import Image from "next/image"

export const LoginRightSide = () => {
  return (
    <div className="relative grid grid-cols-1 bg-red-50 ml-[160px] h-full">
      <Image
        src="/background.jpg"
        alt="Supplify"
        fill
        className="object-cover w-full h-full"
      />
    </div>
  )
}