import { handleGoogleSignin, handleMicrosoftSignin } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const SignInWithSocials = () => {
  return (
    <>
      <form className='flex flex-col gap-4'>
        <Button variant="outline" className="text-lg py-[20px] rounded-lg bg-white bg-opacity-[2%] gap-2" formAction={handleGoogleSignin}>
          <Image src="/icons/google-icon.png" width={27} height={27} alt="Google" />
          Sign in with Google
        </Button>
        <Button variant="outline" className="text-lg py-[20px] rounded-lg bg-white bg-opacity-[2%] gap-2" formAction={handleMicrosoftSignin}>
          <Image src="/icons/microsoft-icon.png" width={27} height={27} alt="Microsoft" />
          Sign in with Microsoft
        </Button>
      </form>
    </>
  )
}