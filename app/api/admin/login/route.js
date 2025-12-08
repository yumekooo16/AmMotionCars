import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Supabase côté serveur avec la clé service role
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("admins")
    .select("id, email, password")
    .eq("email", email.trim())
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password.trim(), data.password);

  if (!isValid) {
    return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: data.id, email: data.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  const res = NextResponse.json({ message: "Connexion réussie" });

  res.cookies.set({
    name: "admin_token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 3600
  });

  return res;
}
