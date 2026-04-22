import { createClient } from '@supabase/supabase-js'
 const supabaseUrl = 'https://nnkbljcuuyvdsrzujsgy.supabase.co'
 const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ua2JsamN1dXl2ZHNyenVqc2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MzQ3MTUsImV4cCI6MjA5MjQxMDcxNX0.KJUS0kBxqia_aajOWnlJjxlENoJnumhvCh-LYvJI5I8'
 export const supabase = createClient(supabaseUrl, supabaseKey)