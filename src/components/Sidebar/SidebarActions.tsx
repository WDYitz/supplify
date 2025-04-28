import type { PropsWithChildren } from "react"
import SkeletonButtonLoading from "../SkeletonUI/SkeletonUIButtonLoading"

const Actions = ({ children, isLoading }: PropsWithChildren & { isLoading?: boolean }) => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        {children}
      </div>
      {
        isLoading && (
          <div className="flex flex-col gap-4 items-center w-14 h-14 ">
            <SkeletonButtonLoading variants="ghost" />
          </div>
        )
      }
    </>
  )
}

export default Actions;