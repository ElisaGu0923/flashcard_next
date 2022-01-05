import * as React from "react";
import { useState, useEffect } from "react";

// libraries
import { useSession, signIn, signOut } from "next-auth/react";
const Dashboard: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [decksCount, setDecksCount] = useState<number>(0);
    const { data: session, status } = useSession();

    const fetchDecks = async () => {
        const response = await fetch('/api/getDecks', {
            method: 'POST',
            body: JSON.stringify({ email: session.user.email })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
            } else {
                const b = await response.json();
                console.log(b.length);
                setDecksCount(b.length);
            }
        }
    }

    useEffect(() => {
        if (session) {
            setEmail(session.user.email);
        }
    }, [session]);

    if (status === "authenticated") {
        return <>
            <div>Dashboard Signed in as {session.user.email}</div>
            <div>Welcome {session.user.name}</div>
            <button onClick={fetchDecks}>Get Decks</button>
            <div>Decks Count: {decksCount}</div>
            <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
        </>
    }


    return (<div>Dashboard Not signed in
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </div>)
}

export default Dashboard;