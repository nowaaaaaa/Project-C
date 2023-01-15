import React from 'react'
import { useState } from 'react'
import { Guid } from 'guid-typescript'

export type Ticket = {
    id: Guid
    submitter: string
    problem?: string[]
    should: string
    tried: string
    phone: string 
    state: "OPEN" | "ACTIVE" | "CLOSED"
}

export type TicketDetails = {
    id: Guid,
    ticket: Ticket,
    ticketId: Guid,
    problem: string,
    expected: string,
    solution: string
}

//Properties that a ticket should have to be moved between lists
type TicketProps = {
ticket: Ticket
originalList: Ticket[]
setOriginalList: (list: Ticket[]) => void
nextList: Ticket[]
setNextList: (list: Ticket[]) => void
}

export function fillProblems(tickets: TicketDetails[], tick: Ticket) {
    tickets.forEach((ticket) => {
        if (ticket.ticketId === tick.id) {
            tick.problem?.push(ticket.problem);
        }
    })
}

//Ticket component that is used to display the valuable information of a ticket
const TicketComponent : React.FC<TicketProps> = (props) => {
return <li id="origin">
    <div className='bg-sky-100 dark:bg-gray-700'>
        <p className='reporterName font-lora bg-slate-300 dark:bg-slate-600 text-center'>{props.ticket.submitter}</p>
        <div className='reportText pl-2 pb-3'>
        <p>Problem:</p>
        <p className='reportText pl-2'>{props.ticket.problem}</p>
        </div>
        <div className='reportText pl-2 pb-3'>
        <p>Machine should be doing:</p>
        <p className='reportText pl-2'>{props.ticket.should}</p>
        </div>
        <div className='reportText pl-2 pb-3'>
        <p>Reporter has tried to:</p>
        <p className='reportText pl-2'>{props.ticket.tried}</p>
        </div>
        <div className='reportText pl-2'>
        <p>Reporter's phone number:</p>
        <p className='reportText pl-2'>{props.ticket.phone}</p>
        </div>
        <p className='text-center pb-2 mb-3'>
            <button onClick={() => {
                props.setNextList([...props.nextList, props.ticket])
                props.setOriginalList(props.originalList.filter((t) => t !== props.ticket))
                changeState(props.ticket)
            }} className='pointer bg-slate-400 dark:bg-gray-600 px-4 rounded-3xl cursor-pointer'> {text(props.ticket)}</button>
        </p>
    </div>
    </li>
}

//List of tickets that is used to display the tickets in a list. Also has an accordion to display tickets
export const TicketList : React.FC<{title: string, tickets: Ticket[], originalList: Ticket[], setOriginalList: (list: Ticket[]) => void, nextList: Ticket[], setNextList: (list: Ticket[]) => void}> = (props) => {
const [isActive, setIsActive] = useState(false);
return (
    <div className='dark:text-cyan-400'>
    <div className='cursor-pointer text-center select-none' onClick={() => setIsActive(!isActive)}>
        <h1 className='inline-block text-center'>{props.title}</h1>
        {!isActive && <h1 className='inline-block text-end bg-red-500 rounded-xl px-2 ml-5'>{props.tickets.length}</h1>}
    </div>
    {isActive && 
        <ul>
        {props.tickets.map((tick) => <TicketComponent ticket={tick} originalList={props.originalList} setOriginalList={props.setOriginalList} nextList={props.nextList} setNextList={props.setNextList} />)}
        </ul>
        }
    </div>
)}

//Used to change the state of a ticket after clicking the button
function changeState(tick: Ticket) {
if (tick.state === "OPEN") {
    tick.state = "ACTIVE"
} else if (tick.state === "ACTIVE") {
    tick.state = "CLOSED"
} else if (tick.state === "CLOSED"){
    tick.state = "ACTIVE"
}
}

//Used to change the text of the button dependant on the state of the ticket
function text(tick: Ticket) {
var text: string;
if (tick.state === "OPEN") {
    text = "Claim"
} else if (tick.state === "ACTIVE") {
    text = "Close"
} else {
    text = "Remove"
}
return text;
}