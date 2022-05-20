// types
import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './connection';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const httpMethod: string = req.method;
    console.log('delete deck');
    const deck_id = JSON.parse(req.body).deck_id;
    console.log(deck_id);
    switch (httpMethod) {
        case 'POST':
            connection.query(`DELETE FROM cards WHERE deck_id=${deck_id}`, (err, result) => {
                if (err) {
                    console.log(err);
                    res.statusMessage = err;
                }
            });
            connection.query(`DELETE FROM decks WHERE id=${deck_id}`, (err, result) => {
                if (err) {
                    console.log(err);
                    res.statusMessage = err;
                }
                res.status(200).send(result);
            });
    }
};
