import type { PropsWithChildren } from "react"

export const SettingsContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-start w-full">
      {children}
    </div>
  )
}