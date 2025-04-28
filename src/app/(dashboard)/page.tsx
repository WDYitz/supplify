import { Dashboard } from "@/app/(dashboard)/_components/Dashboard";
import { ProductsTable } from "@/components/ProductsTable";
import { Sidebar } from "@/components/Sidebar";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { productsColumns } from "../../components/ProductsTable/ProductsColumns";

const DashboardPage = async () => {
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
        <h2 className="w-full text-start">Produtos</h2>
        <ProductsTable columns={productsColumns} data={[]} />
        <Link href="/stock" className="underline">Ver todos produtos</Link>
      </Dashboard.Root>
    </main>
  );
}


export default DashboardPage;
