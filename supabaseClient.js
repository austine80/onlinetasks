const supabaseUrl = "https://ypswtqxlvxfccanrlocq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwc3d0cXhsdnhmY2NhbnJsb2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODM0NzMsImV4cCI6MjA5MjI1OTQ3M30.wMLMV3STIMutXGLXSIjGYdFgalkkg9zoM-JCM0NtC-0";

const { createClient } = window.supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);