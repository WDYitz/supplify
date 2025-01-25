import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@clerk/nextjs";
import { Settings } from "../_components/Settings";
import { unauthenticateUserIfNotLoggedIn } from "@/services/authentication";

const SettingsPage = () => {
  unauthenticateUserIfNotLoggedIn()
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
          <UserProfile />
        </Settings.Content>
      </Settings.Root>
    </main>
  )
}

export default SettingsPage;