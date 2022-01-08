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
    switch (httpMethod) {
        case 'POST':
            connection.query(`SELECT * FROM decks WHERE id= "${deck.id}"`, (err, result) => {
                if (err) {
                    console.log('error');
                    console.log(err);
                }
                console.log(result);
                res.status(200).json(result);
            });
    }
};
