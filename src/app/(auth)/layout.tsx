import { getServerSession } from "@/lib/get-session";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Redirect already logged-in users

  const session = await getServerSession();
  const user = session?.user;

  if (user) return redirect("/dashboard");

  return children;
}
