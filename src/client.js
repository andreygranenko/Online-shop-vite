import {createClient} from "@supabase/supabase-js";
// import {key, url} from "./key.js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)