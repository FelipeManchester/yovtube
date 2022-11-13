import { createClient } from '@supabase/supabase-js';
const PROJECT_URL = 'https://xlhldzkbhrbehkexomdq.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaGxkemtiaHJiZWhrZXhvbWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNDUzOTAsImV4cCI6MTk4MzkyMTM5MH0.iuHalbvjPEURJMge4lG8VslUAwHtULUD6ep1TpLdLLQ';
const supabase = createClient(PROJECT_URL, API_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from('video').select('*');
    },
  };
}
