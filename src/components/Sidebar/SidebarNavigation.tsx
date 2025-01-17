import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import Logo from "../Logo"

const Navigation = () => {
  return (
    <div className="flex items-center flex-col gap-6">
      <Logo w={50} h={50} />
      <Button variant="default" className="hover:bg-background py-6 w-14 mt-6" asChild>
        <Link href="/dashboard">
          <Image src="/icons/dashboard-icon.png" alt="Dashboard" width={35} height={35} />
        </Link>
      </Button>
      <Button variant="default" className="py-6 w-14 hover:bg-background" asChild>
        <Link href="/stock" >
          <Image src="/icons/stock-icon.png" alt="stock" width={35} height={35} className="mr-1" />
        </Link>
      </Button>
      <Button variant="default" className="hover:bg-background py-6 w-14 " asChild>
        <Link href="/analytics">
          <Image src="/icons/barchart-icon.png" alt="analytics" width={35} height={35} />
        </Link>
      </Button>
      <Button variant="default" className="hover:bg-background py-6 w-14 " asChild>
        <Link href="/settings">
          <Image src="/icons/settings-icon.png" alt="settings" width={35} height={35} />
        </Link>
      </Button>
    </div>
  )
}

export default Navigation;