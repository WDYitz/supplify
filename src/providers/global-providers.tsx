import { TooltipProvider } from '@/components/ui/tooltip'
import type { ReactNode } from 'react'

interface GlobalProvidersProps {
  children: ReactNode
}

export const GlobalProviders = ({ children }: GlobalProvidersProps) => {
  return (
      <TooltipProvider delayDuration={100}>
        {children}
      </TooltipProvider>
  )
}