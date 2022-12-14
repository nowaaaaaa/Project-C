import React, { useState } from 'react';

import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { Ticket, TicketList } from './makeLists';

var fullList: Ticket[] = [
  { reporter: "1", problem: "My machine broke while trying to load my apples", should: "It should have moved the apples to the shuttle", tried: "I tried to move the basket", phone: "06 12345678", state: "OPEN"},
  { reporter: "2", problem: "My machine broke while trying to load my eggs", should: "It should have moved the eggs to the shuttle", tried: "I tried to move the basket", phone: "06 87654321", state: "OPEN"},
  { reporter: "3", problem: "My machine broke while trying to load my tomatoes", should: "It should have moved the tomatoes to the shuttle", tried: "I tried to move the basket", phone: "06 0192837", state: "OPEN"},
  { reporter: "4", problem: "My machine broke while trying to load my apples", should: "It should have moved the apples to the shuttle", tried: "I tried to move the basket", phone: "06 12345678", state: "ACTIVE"},
  { reporter: "5", problem: "My machine broke while trying to load my eggs", should: "It should have moved the eggs to the shuttle", tried: "I tried to move the basket", phone: "06 87654321", state: "ACTIVE"},
  { reporter: "6", problem: "My machine broke while trying to load my tomatoes", should: "It should have moved the tomatoes to the shuttle", tried: "I tried to move the basket", phone: "06 0192837", state: "ACTIVE"},
  { reporter: "7", problem: "My machine broke while trying to load my apples", should: "It should have moved the apples to the shuttle", tried: "I tried to move the basket", phone: "06 12345678", state: "CLOSED"},
  { reporter: "8", problem: "My machine broke while trying to load my eggs", should: "It should have moved the eggs to the shuttle", tried: "I tried to move the basket", phone: "06 87654321", state: "CLOSED"},
  { reporter: "9", problem: "My machine broke while trying to load my tomatoes", should: "It should have moved the tomatoes to the shuttle", tried: "I tried to move the basket", phone: "06 0192837", state: "CLOSED"},
  { reporter: "10", problem: "My machine broke while trying to load my apples", should: "It should have moved the apples to the shuttle", tried: "I tried to move the basket", phone: "06 12345678", state: "ACTIVE"},
]

export function VisconPage() {

  const [tickets, setTickets] = useState<Array<Ticket>>([])
  const [activeTickets, setActiveTickets] = useState<Array<Ticket>>([])
  const [closedTickets, setClosedTickets] = useState<Array<Ticket>>([])

  if (tickets.length === 0 && activeTickets.length === 0 && closedTickets.length === 0) {
    fullList.map((tick) => {
      if (tick.state === "OPEN") {
        tickets.push(tick)
      } else if (tick.state === "ACTIVE") {
        activeTickets.push(tick)
      } else if (tick.state === "CLOSED") {
        closedTickets.push(tick)
      }
      return <></>
    }
  )
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
            <TicketList title={Translate("Closed")} tickets={closedTickets} originalList={closedTickets} setOriginalList={setClosedTickets} nextList={activeTickets} setNextList={setActiveTickets}/>
          </div>
          <div className='filler h-5 bg-white dark:bg-slate-800'></div>
      </div>
    </div>
  );
}

export default VisconPage;
