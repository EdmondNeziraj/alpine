import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://eeclgnluzryxgynrmokv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlY2xnbmx1enJ5eGd5bnJtb2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NzAzNTIsImV4cCI6MjAwODI0NjM1Mn0.plnHd6zulH-0m9Q5e1XMoJNJAGKsIUrRPbGNuG2EzbU";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;