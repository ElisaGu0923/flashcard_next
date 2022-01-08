// const items = [
//     { name: 'alpha', description: 'describes alpha', value: 1 },
//     ...
// ];

// db.query(
//     'INSERT INTO my_table (name, description, value) VALUES ?',
//     [items.map(item => [item.name, item.description, item.value])],
//     (error, results) => {...}
// );
var mysql = require("mysql2");
// types
import { NextApiRequest, NextApiResponse } from 'next';

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOTUSER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
});

export default (req: NextApiRequest, res: NextApiResponse) => {
    const httpMethod: string = req.method;
    console.log('create cards');
    const deck_id = JSON.parse(req.body).deck_id;
    console.log(deck_id);
    const cards = JSON.parse(req.body).cards;
    console.log(cards);
    switch (httpMethod) {
        case 'POST':
            connection.query("INSERT INTO cards (deck_id, question, answer) VALUES ?", [cards.map(card => [deck_id, card.question, card.answer])], (err, result) => {
                if (err) {
                    console.log(err);
                    res.statusMessage = err;
                }
                res.status(200).send(result);
            });
    }
};
