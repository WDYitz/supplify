import type { PropsWithChildren } from "react"

const DashboardRoot = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col w-full h-full bg-background px-20 py-12 space-y-4 items-end">
      {children}
    </section>
  )
}

export default DashboardRoot;