import Logo from "@/components/Logo"
import { SignInWithSocials } from "./LoginWithSocial"

export const LoginLeftSide = () => {
  return (
    <div className="mx-auto my-auto flex h-[400px] max-w-[550px] flex-col justify-center p-8">
      <div className="flex items-center gap-2 mb-8">
        <Logo />
        <p className="text-3xl">Supplify</p>
      </div>
      <h1 className="my-3 text-4xl font-bold">Bem-vindo</h1>
      <p className="mb-8 text-muted-foreground text-2xl">
        A Supplify é uma plataforma de gestão de estoque que oferece insights personalizados,
        facilitando o controle de seus produtos
      </p>

      <SignInWithSocials />
    </div>
  )
}