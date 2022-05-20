// types
import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './connection';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const httpMethod: string = req.method;
    console.log('delete card');
    const id = JSON.parse(req.body).id;
    console.log(id);
    switch (httpMethod) {
        case 'POST':
            connection.query(`DELETE FROM cards WHERE id=${id}`, (err, result) => {
                if (err) {
                    console.log(err);
                    res.statusMessage = err;
                }
                res.status(200).send(result);
            });
    }
};
