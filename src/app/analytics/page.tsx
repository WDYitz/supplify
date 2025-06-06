import { Sidebar } from "@/components/Sidebar"
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Analytics = async () => {
  const session = await auth()

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="w-full h-full flex">
      <Sidebar.Root>
        <Sidebar.Navigation />
        <Sidebar.Actions>
          <Sidebar.SignOut />
        </Sidebar.Actions>
      </Sidebar.Root>

      <div className="flex flex-col w-full h-full bg-background px-20 py-12 space-y-4 ">
        <h2 className="text-2xl">Analytics</h2>
      </div>
    </main>
  )
}

export default Analytics