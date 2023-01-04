import { Machine } from "./MakeMachine";

const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1',
    database: 'postgres'
});

client.connect();

// function fetchMachines(list: Machine[]) {
//     client.query('SELECT * FROM machines', (err: any, res: any) => {
//         if (err) {
//             console.log(err.stack);
//         } else {
//             for (let row of res.rows) {
//                 list.push();
//                 mach: Machine = {
//                     name: row.name,
//                     type: row.type,
//                     problems: row.problems
//                 }
//                 list.push(mach);
//             }
//         }
//     });
// }