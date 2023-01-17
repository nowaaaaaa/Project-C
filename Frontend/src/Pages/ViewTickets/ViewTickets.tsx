import React, { useState } from 'react';

import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { Ticket, TicketDetails } from '../../Pages/VisconPage/makeLists';
import { Guid } from 'guid-typescript';
import { displayTicks } from './displayTicks';

//make a list of 3 ticketdetails
const ticketDetailsList: TicketDetails[] = [
    {
        id: Guid.create(),
        ticketId: Guid.create(),
        problem: "The machine is not working",
        tried: "I tried turning it off and on again",
        should: "The machine should be working"
    },
    {
        id: Guid.create(),
        ticketId: Guid.create(),
        problem: "The machine is not working",
        tried: "I tried turning it off and on again",
        should: "The machine should be working"
    },
    {
        id: Guid.create(),
        ticketId: Guid.create(),
        problem: "The machine is not working",
        tried: "I tried turning it off and on again",
        should: "The machine should be working",
        solution: "Turn off and on again"
    }
]

const ticketList: Ticket[] = [
    {
        id: Guid.create(),
        submitter: "John Doe",
        phone: "555-555-5555",
        state: "OPEN",
        details: [ticketDetailsList[0]]
    },
    {
        id: Guid.create(),
        submitter: "Jane Doe",
        phone: "555-555-5555",
        state: "OPEN",
        details: [ticketDetailsList[1]]
    },
    {
        id: Guid.create(),
        submitter: "John Smith",
        phone: "555-555-5555",
        state: "OPEN",
        details: [ticketDetailsList[2]]
    },
    {
        id: Guid.create(),
        submitter: "Jane Smith",
        phone: "555-555-5555",
        state: "OPEN",
        details: [ticketDetailsList[0]]
    },
    {
        id: Guid.create(),
        submitter: "John Doe",
        phone: "555-555-5555",
        state: "OPEN",
        details: [ticketDetailsList[1]]
    }
]

export function ViewTickets() {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen h-max bg-white dark:bg-slate-800 w-full'>
            <div className='filler h-5 bg-white dark:bg-slate-800'></div>
                <div className='w-full'>
                    <>
                        {displayTicks(ticketList)}
                    </>
                </div>
        </div>
    </div>
  );
}

export default ViewTickets;
