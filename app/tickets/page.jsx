import TicketList from "./TicketList"

export default function Tickets() {
  return (
    <main>
      <div>
        <h2>Tickets</h2>
        <p><small>Currently open tickets</small></p>
      </div>
      <TicketList />
    </main>
  )
}
