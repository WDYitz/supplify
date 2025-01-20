import { Sidebar } from "@/components/Sidebar";
import { IsUnauthenticated } from "@/services/authentication";
import { Dashboard } from "@/components/Dashboard";
import { DataTable } from "./_components/products-table";
import { productsColumns } from "./_components/_columns";
import Link from "next/link";

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
        <Dashboard.Content>
          <div className="flex flex-col w-full gap-4">
            <Dashboard.Details />
            <div className="flex w-full gap-4">
              <Dashboard.Income />
              <Dashboard.Loss />
              <Dashboard.Quantity />
            </div>
          </div>
          <Dashboard.DetailsAndTags />
        </Dashboard.Content>
        <DataTable columns={productsColumns} data={[]} />
        <Link href="/stock" className="underline">Ver todos produtos</Link>
      </Dashboard.Root>
    </main>
  );
}


export default DashboardPage;
