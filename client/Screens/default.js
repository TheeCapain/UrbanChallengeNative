import { createClient } from '@supabase/supabase-js'
console.log(process.env.TEST);
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)