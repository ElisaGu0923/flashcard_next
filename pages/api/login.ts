var mysql = require("mysql");
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
    const user = JSON.parse(req.body);
    switch (httpMethod) {
        case 'POST':
            if (user.email && user.password) {
                connection.query(
                    `SELECT user_id FROM (SELECT * FROM users WHERE email = "${user.email}" AND password = "${user.password}") as username`,

                    (err, result) => {
                        // console.log(result);
                        if (result.length > 0) {
                            res.status(200).send(result);
                        } else {
                            res.status(401).send("Incorrect Email and/or Password");
                        }
                    }
                );
            } else {
                res.status(401).send("Please enter Email and Password");
            }
    }
};
