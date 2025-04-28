import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h2 className='text-2xl'>Ops, esta página nao foi encontrada</h2>
      <p className='text-2xl'>Parece que você se perdeu... Tente voltar para a página home.</p>
      <div className='mt-4'>
        <Button variant="secondary" className='text-black text-md' asChild>
          <Link href="/">Ir para home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound