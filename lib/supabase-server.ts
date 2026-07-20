import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Creates a Supabase client suitable for server-side / middleware contexts.
 * This is separate from lib/supabase.ts (browser client) to avoid
 * singleton issues across runtimes.
 */
export function createServerSupabaseClient() {
	return createClient(supabaseUrl, supabaseAnonKey);
}
