"use server"

import { auth, signIn, signOut } from "@/lib/auth"

const handleAuth = async (provider: string) => {
  const session = await auth();

  if (session) {
    return await signOut({
      redirectTo: "/login",
    });
  }

  await signIn(provider, {
    redirectTo: "/",
  })
}

const handleGoogleSignin = () => handleAuth("google")
const handleMicrosoftSignin = () => handleAuth("microsoft-entra-id")

export {
  handleGoogleSignin,
  handleMicrosoftSignin,
  handleAuth,
}