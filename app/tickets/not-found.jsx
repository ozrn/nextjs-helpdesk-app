import Link from "next/link"


export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>The ticket you were looking for could not be found.</p>
      <p>Go back to the ticket page to see all <Link href="/tickets">tickets</Link></p>
    </main>
  )
}