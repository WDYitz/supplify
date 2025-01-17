import { Sidebar } from "@/components/Sidebar";
import { IsUnauthenticated } from "@/services/authentication";
import { Dashboard } from "@/components/Dashboard";

const DashboardPage = async () => {
  await IsUnauthenticated({ returnTo: "/login" });

  return (
    <main className="w-full h-full flex">
      <Sidebar.Root>
        <Sidebar.Navigation />
        <Sidebar.Actions>
          <Sidebar.SignOut />
        </Sidebar.Actions>
      </Sidebar.Root>

      <Dashboard.Root>
        <Dashboard.Header />
        <div className="flex justify-between w-full gap-4">
          <Dashboard.Quantity />
          <div className="flex flex-col justify-between w-full gap-4">
            <Dashboard.Income />
            <Dashboard.Loss />
          </div>
        </div>
      </Dashboard.Root>
    </main>
  );
}


export default DashboardPage;
