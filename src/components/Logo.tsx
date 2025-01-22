import Image from "next/image"

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Supplify"
      width={45}
      height={45}
      className="w-auto h-auto"
      priority
    />
  )
}

export default Logo