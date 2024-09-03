import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <h1>HelpDesk</h1>
      <Link href="/">Dashboard</Link> &nbsp;
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
