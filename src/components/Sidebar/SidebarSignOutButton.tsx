"use client"
import { handleAuth } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SidebarSignOutButton = () => {
  return (
    <Button variant="default" className="w-14 h-14 hover:bg-transparent" onClick={() => handleAuth("google")}>
      <Image src="/icons/login-icon.png" alt="Sair" width={32} height={32} />
    </Button>
  )
}

export default SidebarSignOutButton;