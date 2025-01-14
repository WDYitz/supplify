import Image from "next/image"

interface ILogoProps {
  w: number
  h: number
}

const Logo = ({ w, h }: ILogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt="Supplify"
      width={w}
      height={h}
      loading="lazy"
    />
  )
}

export default Logo