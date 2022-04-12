import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xzehnbtizqkefetawdfk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZWhuYnRpenFrZWZldGF3ZGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk1MDk1MzUsImV4cCI6MTk2NTA4NTUzNX0.NpwSB2WsXsxWYJfzIOyYClGhmkgBZ1PTeAayXZGDVng"
);
