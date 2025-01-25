import { TooltipProvider } from '@/components/ui/tooltip'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes"
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <TooltipProvider delayDuration={100}>
        {children}
      </TooltipProvider>
    </ClerkProvider>
  )
}