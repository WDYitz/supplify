import Link from "next/link"

export const SettingsNavigation = () => {
  return (
    <div className="flex justify-start h-full w-[250px] py-5">
      <div className="flex flex-col space-y-1">
        <Link href="">Detalhes da Conta</Link>
        <span className="text-sm text-white text-opacity-35 font-light">Gerenciar conta</span>
      </div>
    </div>
  )
}