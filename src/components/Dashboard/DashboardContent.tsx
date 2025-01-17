import type { PropsWithChildren } from "react"

export const DashboardContent = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex w-full h-full bg-background px-20 py-12 space-y-4">
      {children}
    </section>
  )
}