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
  state: "OPEN" | "ACTIVE" | "CLOSED"
}

const tickOpen: Ticket = {
  reporter: "John DoO",
  problem: "I have a problem",
  should: "Should be fixed",
  tried: "I tried to fix it",
  phone: "12345678",
  state: "OPEN"
}

const tickActive: Ticket = {
  reporter: "John DoA",
  problem: "I have a problem",
  should: "Should be fixed",
  tried: "I tried to fix it",
  phone: "12345678",
  state: "ACTIVE"
}

const tickClosed: Ticket = {
  reporter: "John DoC",
  problem: "I have a problem",
  should: "Should be fixed",
  tried: "I tried to fix it",
  phone: "12345678",
  state: "CLOSED"
}

const tickarr: Ticket[] = [tickOpen, tickActive, tickClosed, tickActive, tickClosed, tickOpen, tickOpen]



const activeList: Ticket[] = returnList(tickarr, "ACTIVE");
const closedList: Ticket[] = returnList(tickarr, "CLOSED");
const openList: Ticket[] = returnList(tickarr, "OPEN");



//function that moves a ticket from open to active and active to closed
function moveTicket(ticket: Ticket, originalList: Ticket[], setOriginalList: React.Dispatch<React.SetStateAction<Ticket[]>>, nextList: Ticket[], setNextList: React.Dispatch<React.SetStateAction<Ticket[]>>) {
  setOriginalList(originalList.filter((tick) => tick !== ticket));
  setNextList([...nextList, ticket]);
  return <></>
}



function returnList(tick: Ticket[], listName: "OPEN" | "ACTIVE" | "CLOSED") {
  var tickList: Ticket[] = [];
  tick.map((ticket) => {
    if (ticket.state === listName) {
        tickList.push(ticket)
    }
  })
  return tickList;
}

function TicketComponent(ticks: Ticket[], listName: string) {
  return (
    <div>
      <h1>{listName}</h1>
      {ticks.map((tick, index) => 
        <div className='ticket bg-slate-400 dark:bg-slate-700 my-3' key={index}>
          <p className='dark:text-cyan-400'>{tick.reporter}</p>
          <p className='dark:text-cyan-400'>{tick.problem}</p>
          <p className='dark:text-cyan-400'>{tick.should}</p>
          <p className='dark:text-cyan-400'>{tick.tried}</p>
          <p className='dark:text-cyan-400'>{tick.phone}</p>
          <p className='dark:text-cyan-400'>{tick.state}</p>
          <button onClick={moveTicket(tick), originalList, nextList}>aaa</button>
        </div>
      )}
    </div>
  )
}

export function VisconPage() {
  return (
    <div>
        <Navbar/>
        <div className='bg bg-white dark:bg-slate-800 pt-[5vh]'>
          {TicketComponent(openList, "OPEN")}
          {TicketComponent(activeList, "ACTIVE")}
          {TicketComponent(closedList, "CLOSED")}
            {/* <div className='reports bg-slate-300 dark:bg-slate-600'>
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
              </div> */}
        </div>
    </div>
  );
}

export default VisconPage;
