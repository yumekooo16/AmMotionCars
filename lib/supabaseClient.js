import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lbeukcxiarqorufgtlmi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZXVrY3hpYXJxb3J1Zmd0bG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MTc2MjYsImV4cCI6MjA3NjA5MzYyNn0.Km04peR4Q-W4T1iw9bHHJ5lUaSS2nBLSxp_GXz1sauM';

export const supabase = createClient(supabaseUrl, supabaseKey);