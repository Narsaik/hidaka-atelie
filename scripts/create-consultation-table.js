const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ktkiyxmnqqdflsmvrugl.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0a2l5eG1ucXFkZmxzbXZydWdsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjA0MjQyNiwiZXhwIjoyMDgxNjE4NDI2fQ.34tpscWj4xZrzr_1N9jl0D4uBnqAofO09BojmHBcCsk';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createTable() {
  console.log('Creating consultation_requests table...');

  // Test connection by inserting a test record
  const { data, error } = await supabase
    .from('consultation_requests')
    .select('*')
    .limit(1);

  if (error) {
    if (error.code === '42P01') {
      console.log('Table does not exist. Please create it in Supabase Dashboard.');
      console.log('\nSQL to run in Supabase SQL Editor:');
      console.log(`
CREATE TABLE consultation_requests (
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

-- Enable Row Level Security
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anon/authenticated
CREATE POLICY "Allow insert for everyone" ON consultation_requests
    FOR INSERT WITH CHECK (true);

-- Create policy to allow service role to read all
CREATE POLICY "Service role can read all" ON consultation_requests
    FOR SELECT USING (auth.role() = 'service_role');

-- Create indexes
CREATE INDEX idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX idx_consultation_requests_created_at ON consultation_requests(created_at DESC);
      `);
    } else {
      console.error('Error:', error.message);
    }
  } else {
    console.log('Table exists! Current records:', data?.length || 0);
  }
}

createTable();
