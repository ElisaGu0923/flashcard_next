import * as React from "react";
import { useState, useEffect } from "react";

// libraries
import { useSession, signIn, signOut } from "next-auth/react";

export type Deck = {
    id: number,
    created_at: string,
    amount: number,
    creator_email: string,
    deck_name: string
}

const Dashboard: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [decksCount, setDecksCount] = useState<number | undefined>(undefined);
    const [decks, setDecks] = useState<Deck[] | undefined>(undefined);
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
                if (!b) {
                    console.log("undefined b");
                    setDecksCount(0);
                } else {
                    console.log("set length to: " + b.length);
                    setDecksCount(b.length);
                    if (b.length > 0) {
                        setDecks(b);
                    }
                }
            }
        }
    }

    useEffect(() => {
        if (session) {
            setEmail(session.user.email);
            fetchDecks();
        }
    }, [session]);

    if (status === "authenticated") {
        return <>
            <div>Dashboard Signed in as {session.user.email}</div>
            <div>Welcome {session.user.name}</div>
            {/* <button onClick={fetchDecks}>Get Decks</button> */}
            {/* {decksCount && <div>Decks Count: {decksCount}</div>} */}
            {decks ? decks.map((deck) => <div key={deck.id}>{deck.deck_name}</div>) : <div>Create your first deck</div>}
            <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
        </>
    }

    return (<div>Dashboard Not signed in
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </div>)
}

export default Dashboard;