"use server"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const authenticateUser = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard")
  }
}

export const unauthenticateUserIfNotLoggedIn = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login")
  }
}
