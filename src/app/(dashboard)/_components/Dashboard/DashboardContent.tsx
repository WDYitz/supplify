import type { PropsWithChildren } from "react"

export const DashboardContent = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex justify-between w-full gap-4 items-center">
      {children}
    </section>
  )
}