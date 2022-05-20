// types
import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from './connection';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const httpMethod: string = req.method;
    const user = JSON.parse(req.body);
    console.log(user);
    switch (httpMethod) {
        case 'POST':
            connection.query("INSERT INTO users SET ?", user, (err, result) => {
                if (err) {
                    console.log(err);
                    switch (err.errno) {
                        case 1062:
                            res.statusMessage = "User Already Exist";
                    }
                }
                res.status(200).send(result);
            });
    }
};
