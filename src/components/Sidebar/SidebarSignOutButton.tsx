"use client"
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";

const SidebarSignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut({
      redirectUrl: "/login"
    })
  };

  return (
    <Button variant="default" className="w-14 h-14 hover:bg-transparent" onClick={handleSignOut}>
      <Image src="/icons/login-icon.png" alt="Sair" width={32} height={32} />
    </Button>
  )
}

export default SidebarSignOutButton;