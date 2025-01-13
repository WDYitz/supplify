import SkeletonButtonLoading from "@/components/loginButtonSkeleton"
import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignInButton } from "@clerk/nextjs"
import Image from "next/image"

export const LoginLeftSide = () => {
  return (
    <div className="mx-auto my-auto flex h-[400px] max-w-[550px] flex-col justify-center p-8">
      <Image
        src="/logo.png"
        alt="Supplify"
        width={80}
        height={80}
        className="mb-8"
      />
      <h1 className="my-3 text-4xl font-bold">Bem-vindo</h1>
      <p className="mb-8 text-muted-foreground text-2xl">
        A Supplify é uma plataforma de gestão de estoque que oferece insights personalizados,
        facilitando o controle de seus produtos
      </p>
      <ClerkLoaded>
        <SignInButton forceRedirectUrl={"http://localhost:3000/"}>
          <Button variant="outline" className="text-lg py-6">
            <Image
              src="/loginIcon.png"
              alt="Supplify"
              width={38}
              height={38}
            />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </ClerkLoaded>

      <ClerkLoading>
        <SkeletonButtonLoading />
      </ClerkLoading>
    </div>
  )
}