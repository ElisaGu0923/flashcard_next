// types
import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './connection';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const httpMethod: string = req.method;
    const user = JSON.parse(req.body);
    switch (httpMethod) {
        case 'POST':
            connection.query(`SELECT * FROM decks WHERE creator_email= "${user.email}"`, (err, result) => {
                if (err) {
                    console.log('error');
                    console.log(err);
                }
                console.log(result);
                res.status(200).json(result);
            });
    }
};
