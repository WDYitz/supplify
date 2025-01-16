import Image from "next/image"

export const LoginRightSide = () => {
  return (
    <div className="hidden lg:relative lg:grid lg:grid-cols-1 lg:ml-[160px] lg:h-full">
      <Image
        src="/background.jpg"
        alt="Supplify"
        fill
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  )
}