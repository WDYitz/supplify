import { TooltipProvider } from '@/components/ui/tooltip'
import { FilterProvider } from '@/contexts/filterContext'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <FilterProvider>
      <TooltipProvider delayDuration={100}>
        {children}
      </TooltipProvider>
    </FilterProvider>
  )
}