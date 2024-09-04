import Link from "next/link"

async function fetchTickets () {
  const ticketPromisedData = await fetch("http://localhost:8000/tickets", {
    next: {
      revalidate: 0 // set timer for cached data so users can see the latest content
    }
  })

  return ticketPromisedData.json()
}

export default async function TicketList() {
  const tickets = await fetchTickets()
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets!</p>
      )}
    </>
  )
}
