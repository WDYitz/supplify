"use client"
import * as Clerk from '@clerk/elements/sign-in'
import { Connection } from '@clerk/elements/common'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const SignInWithSocials = () => {
  return (
    <Clerk.Root>
      <Clerk.Step name='start' className='flex flex-col gap-4'>
        <Button variant="outline" className="text-lg py-[20px] rounded-lg bg-white bg-opacity-[2%] gap-2">
          <Image src="/icons/google-icon.png" width={27} height={27} alt="Google" />
          <Connection name='google'>Sign in with Google</Connection>
        </Button>
        <Button variant="outline" className="text-lg py-[20px] rounded-lg bg-white bg-opacity-[2%] gap-2">
          <Image src="/icons/microsoft-icon.png" width={27} height={27} alt="Microsoft" />
          <Connection name='microsoft'>Sign in with Microsoft</Connection>
        </Button>
      </Clerk.Step>
    </Clerk.Root>
  )
}