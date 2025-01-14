"use server"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface IAuthenticated {
  redirectTo: string;
}

export const IsAuthenticated = async ({ redirectTo }: IAuthenticated) => {
  const { userId } = await auth();
  if (userId) redirect(redirectTo);
}

interface IUnauthenticated {
  returnTo: string;
}

export const IsUnauthenticated = async ({ returnTo }: IUnauthenticated) => {
  const { userId } = await auth();
  if (!userId) redirect(returnTo);
}