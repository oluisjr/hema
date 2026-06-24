"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function adminToken() {
  return process.env.ADMIN_SESSION_TOKEN || "dev-session-change-me";
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const expectedEmail = process.env.ADMIN_EMAIL || "admin@hema.com.br";
  const expectedPassword = process.env.ADMIN_PASSWORD || "admin";

  if (email !== expectedEmail || password !== expectedPassword) {
    redirect("/admin/login?erro=credenciais");
  }

  const cookieStore = await cookies();
  cookieStore.set("hema_admin_session", adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("hema_admin_session");
  redirect("/admin/login");
}
