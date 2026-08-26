"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, createSessionValue } from "@/lib/auth";
import { deleteNews, setNewsStatus, type NewsStatus } from "@/lib/db";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin/noticias");

  if (password !== process.env.ADMIN_PASSWORD) {
    redirect(`/admin/login?error=1&next=${encodeURIComponent(next)}`);
  }

  const value = await createSessionValue();
  const store = await cookies();
  store.set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  redirect(next || "/admin/noticias");
}

export async function logout() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export async function updateNewsStatus(id: number, status: NewsStatus) {
  await setNewsStatus(id, status);
  redirect("/admin/noticias");
}

export async function removeNews(id: number) {
  await deleteNews(id);
  redirect("/admin/noticias");
}
