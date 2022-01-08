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
    const deck = JSON.parse(req.body);
    console.log('create deck');
    console.log(deck);
    switch (httpMethod) {
        case 'POST':
            connection.query("INSERT INTO decks SET ?", deck, (err, result) => {
                if (err) {
                    console.log(err);
                    switch (err.errno) {
                        case 1062:
                            res.statusMessage = "Deck Already Exist";
                    }
                }
                res.status(200).send(result);
            });
    }
};
