-- HIDAKA Ateliê - Consultation Requests Table
-- Run this in Supabase Dashboard > SQL Editor

-- Create the consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    event_type TEXT NOT NULL,
    event_date DATE,
    message TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'completed', 'cancelled')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for the contact form)
CREATE POLICY "Allow public insert" ON consultation_requests
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Policy: Only service role can read/update/delete
CREATE POLICY "Service role full access" ON consultation_requests
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_consultation_requests_updated_at ON consultation_requests;
CREATE TRIGGER update_consultation_requests_updated_at
    BEFORE UPDATE ON consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT INSERT ON consultation_requests TO anon;
GRANT INSERT ON consultation_requests TO authenticated;
GRANT ALL ON consultation_requests TO service_role;
GRANT USAGE, SELECT ON SEQUENCE consultation_requests_id_seq TO anon;
GRANT USAGE, SELECT ON SEQUENCE consultation_requests_id_seq TO authenticated;
