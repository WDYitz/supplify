import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import type { PropsWithChildren } from "react"
import SkeletonButtonLoading from "../SkeletonUI/SkeletonUIButtonLoading"

const Actions = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ClerkLoaded>
        <div className="flex flex-col items-center w-full">
          {children}
        </div>
      </ClerkLoaded>
      <ClerkLoading>
        <div className="flex flex-col gap-4 items-center w-14 h-14 ">
          <SkeletonButtonLoading variants="ghost" />
        </div>
      </ClerkLoading>
    </>
  )
}

export default Actions;