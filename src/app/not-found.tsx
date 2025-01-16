import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Ops, esta página nao foi encontrada</h2>
      <p>Parece que você se perdeu... Tente voltar para a página home.</p>
      <div>
        <Link href="/dashboard">IR PARA HOME</Link>
      </div>
    </div>
  )
}

export default NotFound