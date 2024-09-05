import { notFound } from "next/navigation"

// enable to create a page which was not pre-built at the request time
export const dynamicParams = true

// static rendering to pre-render each ticket page at a build time
export async function getStaticParams() {
  const ticketsRes = await fetch("http://localhost:8000/tickets")
  
  const tickets = await ticketsRes.json()

  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function fetchTicket (id) {
  const ticketPromisedData = await fetch(`http://localhost:8000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })
  // render 404 page if the page we are looking for does not exist
  if(!ticketPromisedData.ok) {
    notFound()
  }
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
