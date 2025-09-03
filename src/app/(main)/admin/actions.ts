"use server";

import { getServerSession } from "@/lib/get-session";
import { forbidden, unauthorized } from "next/navigation";
import { setTimeout } from "node:timers/promises";

export async function deleteApplication() {
  // Handle authentication + authorization

  const session = await getServerSession();
  const user = session?.user;

  if (!user) unauthorized();
  if (user.role !== "Admin") forbidden();

  // Delete app...

  await setTimeout(800);
}
