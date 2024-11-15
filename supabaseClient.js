import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
const { SUPABASE_KEY, SUPABASE_URL } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabaseClient;
