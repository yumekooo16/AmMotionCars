import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cookieStore = await cookies();
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {}
          },
        },
      }
    );
    
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error || !user) {
      return NextResponse.json({ isAdmin: false });
    }
    
    // 🔐 REMPLACER PAR VOTRE EMAIL ADMIN
    const adminEmails = ['votre-email@example.com'];
    const isAdmin = adminEmails.includes(user.email);
    
    return NextResponse.json({ isAdmin, user: user.email });
  } catch (error) {
    console.error('Erreur vérification admin:', error);
    return NextResponse.json({ isAdmin: false }, { status: 500 });
  }
}