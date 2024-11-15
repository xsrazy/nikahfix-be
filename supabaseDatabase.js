import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
const { SUPABASE_KEY, SUPABASE_URL } = process.env;

const supabaseDatabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabaseDatabase;
