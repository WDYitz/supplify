import { Sidebar } from "@/components/Sidebar";
import { Stock } from "./_components/Stock";
import { unauthenticateUserIfNotLoggedIn } from "@/services/authentication";

const StockPage = async () => {
  await unauthenticateUserIfNotLoggedIn()
  return (
    <main className="w-full h-full flex">
      <Sidebar.Root>
        <Sidebar.Navigation />
        <Sidebar.Actions>
          <Sidebar.SignOut />
        </Sidebar.Actions>
      </Sidebar.Root>

      <Stock.Root>
        <Stock.Header />
        <Stock.Filter />
        <Stock.Table />
        <Stock.Navigation />
      </Stock.Root>
    </main>
  )
}
export default StockPage;