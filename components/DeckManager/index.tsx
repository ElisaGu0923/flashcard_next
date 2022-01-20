import * as React from 'react';
// next
import { useRouter } from "next/router";
// material UI
import { Paper } from '@mui/material';
// styles
import useStyles from "./styles";
// types
import { Deck } from '../../pages/dashboard';

export interface IDeckManagerProps {
    deck: Deck,
    setDeck: any,
    setOpen: any
}

const DeckManager: React.FunctionComponent<IDeckManagerProps> = ({ deck, setDeck, setOpen }) => {
    const router = useRouter();
    const { classes } = useStyles();
    return <Paper variant='outlined' key={deck.id} className={classes.paper}>
        <span>{deck.deck_name}</span>
        <button onClick={() => { router.push({ pathname: '/learnDeck', query: { id: deck.id } }) }}>Learn</button>
        <button onClick={() => { router.push({ pathname: '/updateDeck', query: { id: deck.id } }) }}>Edit</button>
        <button onClick={() => { setDeck(deck); setOpen(true); }}>Delete</button>
    </Paper>
}

export default DeckManager;