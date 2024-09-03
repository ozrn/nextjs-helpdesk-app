async function fetchTickets () {
  const ticketPromisedData = await fetch("http://localhost:8000/tickets")

  return ticketPromisedData.json()
}

export default async function TicketList() {
  const tickets = await fetchTickets()
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ) ) }
      {tickets.length === 0 && (
        <p className="text-center">There are no tickets!</p>
      )}
    </>
  )
}
