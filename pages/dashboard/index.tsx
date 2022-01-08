import * as React from "react";
import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// libraries
import { useSession, signOut } from "next-auth/react";
// material ui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export type Deck = {
    id: number,
    created_at: string,
    amount: number,
    creator_email: string,
    deck_name: string
}

const Dashboard: React.FunctionComponent = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [decksCount, setDecksCount] = useState<number | undefined>(undefined);
    const [decks, setDecks] = useState<Deck[] | undefined>(undefined);
    const [deck, setDeck] = useState<Deck | undefined>(undefined);
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
                console.log("set length to: " + b.length);
                if (b.length > 0) {
                    setDecks(b);
                } else {
                    setDecks(undefined);
                }
            }
        }
    }

    const deleteDeck = async () => {
        const response = await fetch('/api/deleteDeck', {
            method: 'POST',
            body: JSON.stringify({ deck_id: deck.id })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
            } else {
                // const b = await response.json();
                console.log('deleted');
                setOpen(false);
                setRefresh(!refresh);
            }
        }
    }

    useEffect(() => {
        if (session) {
            setEmail(session.user.email);
            fetchDecks();
        }
    }, [session, refresh]);

    if (status === "authenticated") {
        return <>
            <div>Dashboard Signed in as {session.user.email}</div>
            <div>Welcome {session.user.name}</div>
            {decks ? decks.map((deck) => <div key={deck.id}><span>{deck.deck_name}</span><button onClick={() => { router.push({ pathname: '/updateDeck', query: { id: deck.id } }) }}>Edit</button><button onClick={() => { setDeck(deck); setOpen(true); }}>Delete</button></div>) : <div>Create your first deck</div>}
            <button onClick={() => router.push('/newDeck')}>Create a new deck of cards</button>
            <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
            {open ? <div>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <DialogTitle >
                        {`Delete ${deck.deck_name}?`}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Would you like to delete the entire deck, including all cards in it?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={deleteDeck}>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div> : null}
        </>
    }

    return (<div>Dashboard Not signed in
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </div>)
}

export default Dashboard;