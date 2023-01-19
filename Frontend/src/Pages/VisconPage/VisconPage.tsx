import { useState } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { Ticket, TicketList, TicketDetails, fillProblems } from './makeLists';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetTicketsEP, FindUserEP } from '../../BackendManager/endpoints';

var fullList: Ticket[] = [];
var detailList: TicketDetails[] = [];
var verified: boolean = true;
var token = localStorage.getItem("token")
if (token != null) {
  GetTicketsEP({
    jwt: token
  }).then(response => {
    var tickets = response.data['item1']
    var ticketDetails = response.data['item2']
    ticketDetails.forEach(function (value: any) {
      var addition: TicketDetails = {
        id: value.id, 
        ticketId: value.ticketId,
        problem: value.problem,
        tried: value.tried,
        should: value.expected
      }
      detailList.push(addition)
    });
    tickets.forEach(function (value: any) {
      FindUserEP({
        userId: value.submitterId
      }).then(response => {
        var name = response.data.name; 
        var phone = response.data.phone; 
        var state: "OPEN" | "ACTIVE" | "CLOSED" = "OPEN"
        if (value.handlerId != null) state = "ACTIVE"
        if (value.solved === true) state = "CLOSED"
        var details: TicketDetails = detailList[0];
        detailList.forEach(function (value2: TicketDetails) {
          if (value2.ticketId === value.id) {
            details = value2
          }
        });
        var addition: Ticket = {
          id: value.id,
          submitter: name,
          state: state,
          phone: phone,
          details: [details]
        }
        fullList.push(addition)
      }).catch(error => {
        console.log(error)
      })
    });

  }).catch(error => {
    var errMessage: string = error.response.data;
    console.log(errMessage)
    if (errMessage === 'Invalid token') {
      verified = false;
    }
  })
}
else verified = false;

export function VisconPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if ( verified === false ) {
      navigate('/')
    }
  });

  const [tickets, setTickets] = useState<Array<Ticket>>([])
  const [activeTickets, setActiveTickets] = useState<Array<Ticket>>([])
  const [closedTickets, setClosedTickets] = useState<Array<Ticket>>([])
  const [removedTickets, setRemovedTickets] = useState<Array<Ticket>>([])

  if (tickets.length === 0 && activeTickets.length === 0 && closedTickets.length === 0) {
    fullList.map((tick) => {
      fillProblems(detailList, tick)
      if (tick.state === "OPEN") {
        tickets.push(tick)
      } else if (tick.state === "ACTIVE") {
        activeTickets.push(tick)
      } else if (tick.state === "CLOSED") {
        closedTickets.push(tick)
      }
      return <></>
    })
  }

  return (
    <div>
      <Navbar/>
      <div className='a min-h-screen h-max bg-white dark:bg-slate-800'>
        <div className='filler h-5 bg-white dark:bg-slate-800'></div>
          <div className='bg-slate-300 dark:bg-slate-600 w-full md:w-3/5 mx-auto my-9 py-3 px-2'>
            <TicketList title={Translate("Pending")} tickets={tickets} originalList={tickets} setOriginalList={setTickets} nextList={activeTickets} setNextList={setActiveTickets}/>
          </div>
          <div className='bg-slate-300 dark:bg-slate-600 w-full md:w-3/5 mx-auto my-9 py-3 px-2'>
            <TicketList title={Translate("Active")} tickets={activeTickets} originalList={activeTickets} setOriginalList={setActiveTickets} nextList={closedTickets} setNextList={setClosedTickets}/>
          </div>
          <div className='bg-slate-300 dark:bg-slate-600 w-full md:w-3/5 mx-auto mt-9 py-3 px-2'>
            <TicketList title={Translate("Closed")} tickets={closedTickets} originalList={closedTickets} setOriginalList={setClosedTickets} nextList={removedTickets} setNextList={setRemovedTickets}/>
          </div>
          <div className='filler h-5 bg-white dark:bg-slate-800'></div>
      </div>
    </div>
  );
}

export default VisconPage;
