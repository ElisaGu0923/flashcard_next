// types
import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './connection';

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
