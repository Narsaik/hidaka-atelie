// Setup Supabase table for Hidaka consultation requests
const https = require('https');

const SUPABASE_URL = 'ktkiyxmnqqdflsmvrugl.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0a2l5eG1ucXFkZmxzbXZydWdsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjA0MjQyNiwiZXhwIjoyMDgxNjE4NDI2fQ.34tpscWj4xZrzr_1N9jl0D4uBnqAofO09BojmHBcCsk';

const sql = `
CREATE TABLE IF NOT EXISTS consultation_requests (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    event_type TEXT NOT NULL,
    event_date DATE,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert" ON consultation_requests;
CREATE POLICY "Allow public insert" ON consultation_requests
    FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Service role full access" ON consultation_requests;
CREATE POLICY "Service role full access" ON consultation_requests
    FOR ALL TO service_role USING (true) WITH CHECK (true);

GRANT INSERT ON consultation_requests TO anon;
GRANT USAGE, SELECT ON SEQUENCE consultation_requests_id_seq TO anon;
`;

const data = JSON.stringify({ query: sql });

const options = {
  hostname: SUPABASE_URL,
  port: 443,
  path: '/rest/v1/rpc/exec_sql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'apikey': SERVICE_KEY,
    'Authorization': `Bearer ${SERVICE_KEY}`,
    'Content-Length': Buffer.byteLength(data)
  }
};

console.log('Attempting to create table via RPC...');

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    if (res.statusCode === 404) {
      console.log('RPC method not available. Trying direct table test...');
      testTableExists();
    } else {
      console.log('Response:', body);
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e.message);
  testTableExists();
});

req.write(data);
req.end();

function testTableExists() {
  const testOptions = {
    hostname: SUPABASE_URL,
    port: 443,
    path: '/rest/v1/consultation_requests?select=id&limit=1',
    method: 'GET',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`
    }
  };

  const testReq = https.request(testOptions, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log('\nTable check status:', res.statusCode);
      if (res.statusCode === 200) {
        console.log('✅ Table EXISTS and is accessible!');
        console.log('Response:', body);
      } else if (res.statusCode === 404 || body.includes('does not exist')) {
        console.log('❌ Table does NOT exist yet.');
        console.log('Please create it manually in Supabase Dashboard.');
      } else {
        console.log('Response:', body);
      }
    });
  });

  testReq.on('error', (e) => console.error('Test error:', e.message));
  testReq.end();
}
