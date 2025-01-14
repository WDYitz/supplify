"use client"
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

const SidebarSignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut({
      redirectUrl: "/login"
    })
  };

  return (
    <Button variant="default" className="w-14 h-14 hover:bg-transparent" onClick={handleSignOut}>
      <LogOut width={50} height={50} />
    </Button>
  )
}

export default SidebarSignOutButton;