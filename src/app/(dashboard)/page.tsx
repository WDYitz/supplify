import SkeletonButtonLoading from "@/components/loginButtonSkeleton";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return (
    <>
      <ClerkLoaded>
        <SignOutButton>
          <Button variant="outline">
            <LogInIcon />
            Logout
          </Button>
        </SignOutButton>
      </ClerkLoaded>

      <ClerkLoading>
        <SkeletonButtonLoading />
      </ClerkLoading>
    </>
  );
}

export default Dashboard;
