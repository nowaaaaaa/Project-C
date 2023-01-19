import React, { useState } from 'react';

import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { Ticket, TicketDetails } from '../../Pages/VisconPage/makeLists';
import { Guid } from 'guid-typescript';
import { displayTicks } from './displayTicks';
import { GetTicketsEP, FindUserEP } from '../../BackendManager/endpoints';

//make a list of 3 ticketdetails
// const ticketDetailsList: TicketDetails[] = [
//     {
//         id: Guid.create(),
//         ticketId: Guid.create(),
//         problem: "The machine is not working",
//         tried: "I tried turning it off and on again",
//         should: "The machine should be working"
//     },
//     {
//         id: Guid.create(),
//         ticketId: Guid.create(),
//         problem: "The machine is not working",
//         tried: "I tried turning it off and on again",
//         should: "The machine should be working"
//     },
//     {
//         id: Guid.create(),
//         ticketId: Guid.create(),
//         problem: "The machine is not working",
//         tried: "I tried turning it off and on again",
//         should: "The machine should be working",
//         solution: "Turn off and on again"
//     }
// ]

// const ticketList: Ticket[] = [
//     {
//         id: Guid.create(),
//         submitter: "John Doe",
//         phone: "555-555-5555",
//         state: "OPEN",
//         details: [ticketDetailsList[0]]
//     },
//     {
//         id: Guid.create(),
//         submitter: "Jane Doe",
//         phone: "555-555-5555",
//         state: "OPEN",
//         details: [ticketDetailsList[1]]
//     },
//     {
//         id: Guid.create(),
//         submitter: "John Smith",
//         phone: "555-555-5555",
//         state: "OPEN",
//         details: [ticketDetailsList[2]]
//     },
//     {
//         id: Guid.create(),
//         submitter: "Jane Smith",
//         phone: "555-555-5555",
//         state: "OPEN",
//         details: [ticketDetailsList[0]]
//     },
//     {
//         id: Guid.create(),
//         submitter: "John Doe",
//         phone: "555-555-5555",
//         state: "OPEN",
//         details: [ticketDetailsList[1]]
//     }
// ]

var ticketList: Ticket[] = [];
var ticketDetailsList: TicketDetails[] = [];
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
      ticketDetailsList.push(addition)
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

        var addition: Ticket = {
          id: value.id,
          submitter: name,
          state: state,
          phone: phone,
          details: []
        }

        ticketList.push(addition)
        
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
else {
  verified = false;
}

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
