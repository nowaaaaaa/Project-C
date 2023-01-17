import { Ticket, TicketDetails } from '../../Pages/VisconPage/makeLists';
import { Translate } from '../../Components/Languages/Translator';

//Displays tickets for company
export function displayTicks(ticks: Ticket[]) {
    return (
    ticks.map((tick) => {
        var solution = '';
        if (!tick.details.at(-1)?.solution) {
            solution = "Ticket not solved yet";
        }
        return (
        <div className='bg-sky-100 dark:bg-gray-700 w-full md:w-3/5 my-4 mx-auto dark:text-cyan-400'>
            <p className='reporterName bg-slate-300 dark:bg-slate-600 text-center'>Machine Name</p>
            <div className='reportText pl-2 pb-3'>
                <p>{Translate("Reported Problem:")}</p>
                <p className='reportText pl-2'>{tick.details.at(-1)?.problem}</p>
            </div>
            <div className='reportText pl-2'>
                <p>{Translate("Ticket Solution:")}</p>
                <p className='reportText pl-2'>{tick.details.at(-1)?.solution}{Translate(solution)}</p>
            </div>
        </div>
        )
    })
    )
}

//Fills Ticket with problems last should be most recent
export function fillProblems(tickets: TicketDetails[], tick: Ticket) {
    tickets.forEach((ticket) => {
        if (ticket.ticketId === tick.id) {
            tick.details.push(ticket);
        }
    })
}
//Kan je gebruiken als je TicketDetails via TS wil pushen op een Ticket, anders kan je de functie weghalen