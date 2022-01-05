import * as React from "react";
import { useState, useEffect } from "react";

// libraries
import { useSession, signIn, signOut } from "next-auth/react";
const Dashboard: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string | undefined>(undefined);
    const { data: session, status } = useSession();

    // const getDecks = () => {
    //     return new Promise((resolve, reject) => {
    //         var mysql = require("mysql2");
    //         var connection = mysql.createConnection({
    //             host: process.env.HOST,
    //             user: process.env.ROOTUSER,
    //             database: process.env.DATABASE,
    //             password: process.env.PASSWORD,
    //         });
    //         connection.query(`SELECT * FROM decks WHERE creator_id= "${session.user.id}"`, (err, result) => {
    //             console.log(result);
    //             if (result && result.length > 0) {
    //                 const username = result[0].username;
    //                 resolve();
    //             } else {
    //                 console.log("null");
    //                 resolve(null);
    //             }
    //         })

    //     })
    // }

    useEffect(() => {
        if (session) {
            setEmail(session.user.email);
        }
    }, [session]);

    if (status === "authenticated") {
        return <>
            <div>Dashboard Signed in as {session.user.email}</div>
            <div>Welcome {session.user.name}</div>
            <button onClick={getDecks}>Get Decks</button>
            <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
        </>
    }


    return (<div>Dashboard Not signed in
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </div>)
}

export default Dashboard;