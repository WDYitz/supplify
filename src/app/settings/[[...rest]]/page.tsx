import { Sidebar } from "@/components/Sidebar";
import { Settings } from "../_components/Settings";

const SettingsPage = () => {
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
          <Settings.Info />
          {/* <UserProfile /> */}
        </Settings.Content>
      </Settings.Root>
    </main>
  )
}

export default SettingsPage;