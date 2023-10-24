import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-indigo-600 p-4">
            <ul className="flex justify-evenly  font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/api/auth/signin">Entrar</Link></li>
                <li><Link href="/api/auth/signout">Sair</Link></li>
            </ul>
        </nav>
    )
}

