import React, { useState } from 'react';
import './VisconPage.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import { report } from 'process';
import { Translate } from '../../Components/Languages/Translator';

let text = "Claim";

type Ticket = {
  reporter: string
  problem: string
  should: string
  tried: string
  phone: string 
  // state: "OPEN" | "ACTIVE" | "CLOSED"
}

type TicketProps = {
  ticket: Ticket
  originalList: Ticket[]
  setOriginalList: (list: Ticket[]) => void
  nextList: Ticket[]
  setNextList: (list: Ticket[]) => void
}

const TicketComponent : React.FC<TicketProps> = (props) => {
  return <li id="origin">
      <div>
        <p className='reporterName font-lora bg-slate-300 dark:bg-slate-700 text-center'>{props.ticket.reporter}</p>
        <p className='reportText pl-2'>{props.ticket.problem}</p>
        <p className='reportText pl-2'>{props.ticket.should}</p>
        <p className='reportText pl-2'>{props.ticket.tried}</p>
        <p className='reportText pl-2'>{props.ticket.phone}</p>
        <p className='text-center pb-2 mb-3 border-b border-black'>
          <a 
            onClick={() => {
              props.setNextList([...props.nextList, props.ticket])
              props.setOriginalList(props.originalList.filter((t) => t !== props.ticket))
            }}
            className='pointer bg-slate-400 dark:bg-slate-700 px-4 rounded-3xl'
          >
            {text}
          </a>
        </p>
      </div>
    </li>
}

export function VisconPage() {
  const [tickets, setTickets] = useState<Array<Ticket>>([
    { reporter: "Harry", problem: "My machine broke while trying to load my apples", should: "It should have moved the apples to the shuttle", tried: "I tried to move the basket", phone: "06 12345678"},
    { reporter: "Peter", problem: "My machine broke while trying to load my eggs", should: "It should have moved the eggs to the shuttle", tried: "I tried to move the basket", phone: "06 87654321"},
    { reporter: "Harm", problem: "My machine broke while trying to load my tomatoes", should: "It should have moved the tomatoes to the shuttle", tried: "I tried to move the basket", phone: "06 0192837"}
  ])

  const [activeTickets, setActiveTickets] = useState<Array<Ticket>>([])
  const [closedTickets, setClosedTickets] = useState<Array<Ticket>>([])

  return (
    <div>
        <Navbar/>
        <div className='bg bg-white dark:bg-slate-800 pt-[5vh]'>
            <div className='reports bg-slate-300 dark:bg-slate-600'>
              <p className='dark:text-cyan-400 text-center'>{Translate("Pending")}</p>
              <ul className=''>
                {tickets.map((ticket, index) => 
                  <TicketComponent ticket={ticket} key={index} originalList={tickets} setOriginalList={setTickets} nextList={activeTickets} setNextList={setActiveTickets} />
                )}
                </ul>
              </div>
              <div className='reports bg-slate-300 dark:bg-slate-600'>
                <p className='dark:text-cyan-400 text-center'>{Translate("Active")}</p>
                <ul className='' id='target'>
                  {activeTickets.map((ticket, index) => 
                    <TicketComponent ticket={ticket} key={index} originalList={activeTickets} setOriginalList={setActiveTickets} nextList={closedTickets} setNextList={setClosedTickets} />
                  )}
                </ul>
              </div>
              <div className='reports bg-slate-300 dark:bg-slate-600'>
              <p className='dark:text-cyan-400 text-center'>{Translate("Closed")}</p>
                <ul className='' id='last'>
                  {closedTickets.map((ticket, index) =>
                    <TicketComponent ticket={ticket} key={index} originalList={closedTickets} setOriginalList={setClosedTickets} nextList={[]} setNextList={() => {}} />
                  )}
                </ul>
              </div>
        </div>
    </div>
  );
}

export default VisconPage;
