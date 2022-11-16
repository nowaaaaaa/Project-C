import React from 'react';
import './VisconPage.css';
import 


const reports = [
    {
        id: 1,
        name: 'Harm',
        problem: 'Machine is broken because of water',
        shouldHappen: 'Machine should move my eggs',
        phone: '06 12345678'
    },
    {
        id: 2,
        name: 'Piet',
        problem: 'Machine is broken because of water',
        shouldHappen: 'Machine should move my eggs',
        phone: '06 12345678'
    },
    {
        id: 3,
        name: 'Kees',
        problem: 'Machine is broken because of water',
        shouldHappen: 'Machine should move my eggs',
        phone: '06 12345678'
    }
]

function VisconPage() {
    return (
        <div className="App">
            <ul className='reports'>
                {reports.map(({id, name, problem, shouldHappen, phone}) => {
                    return (
                        <li key={id}>
                            <div>
                                <p>{name}</p>
                                <p>{problem}</p>
                                <p>{shouldHappen}</p>
                                <p>{phone}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
