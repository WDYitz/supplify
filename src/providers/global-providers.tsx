import { TooltipProvider } from '@/components/ui/tooltip'
import { FilterProvider } from '@/contexts/filterContext'
import type { ReactNode } from 'react'

interface GlobalProvidersProps {
  children: ReactNode
}

export const GlobalProviders = ({ children }: GlobalProvidersProps) => {
  return (
    <FilterProvider>
      <TooltipProvider delayDuration={100}>
        {children}
      </TooltipProvider>
    </FilterProvider>
  )
}