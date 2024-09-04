async function fetchTicket (id) {
  const ticketPromisedData = await fetch(`http://localhost:8000/tickets/${id}`)
  
  return ticketPromisedData.json()
}

export default async function TicketData({params}) {
  const ticket = await fetchTicket(params.id)
  
  return (
    <main>
      <h2>Ticket Deatils</h2>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}
