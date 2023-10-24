import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(options)

  if(!session) {
    return <h1 className="text-5xl text-gray-900">Deslogado</h1>
  }

  return (
    <>
      <h3 className="text-gray-900 text-5xl">{session.user?.name}</h3>
    </>
  )
}
