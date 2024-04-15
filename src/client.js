import {createClient} from "@supabase/supabase-js";
import {key, url} from "./key.js";

export const supabase = createClient(
  url,
  key
)