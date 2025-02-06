import type { PropsWithChildren } from "react"

export const SettingsContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full h-full">
      {children}
    </div>
  )
}