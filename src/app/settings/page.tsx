import { Sidebar } from "@/components/Sidebar";
import { Settings } from "./_components/Settings";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SettingsPage = async () => {
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

      <Settings.Root>
        <Settings.Header />
        <Settings.Content >
          <Settings.Navigation />
          <Settings.Info session={session} />
          {/* <UserProfile /> */}
        </Settings.Content>
      </Settings.Root>
    </main>
  )
}

export default SettingsPage;