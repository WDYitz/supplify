import { StockForm } from "@/components/Forms/Stock";
import { Sidebar } from "@/components/Sidebar";
import { IsUnauthenticated } from "@/services/authentication";

const Dashboard = async () => {
  await IsUnauthenticated({ returnTo: "/login" });

  return (
    <main className="w-full h-full flex">
      <Sidebar.Root>
        <Sidebar.Navigation />
        <Sidebar.Actions>
          <Sidebar.SignOut />
        </Sidebar.Actions>
      </Sidebar.Root>

      <section className="flex flex-col w-full h-full bg-background px-14 py-8 space-y-12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">Home</h2>
            <p className="text-3xl font-light">Criar Novo Estoque</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Plano Gratuito</p>
            <p className="text-end text-lg">0 / 3</p>
          </div>
        </div>

        <div className="flex gap-6">
          <StockForm />
        </div>
      </section>
    </main>
  );
}


export default Dashboard;
