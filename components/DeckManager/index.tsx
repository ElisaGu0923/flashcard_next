import * as React from 'react';
// next
import { useRouter } from "next/router";
// material UI
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
// icons
import CloseIcon from '@mui/icons-material/Close';
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
    return (<Paper variant='outlined' key={deck.id} className={classes.paper}>
        <IconButton className={classes.deleteBtn} onClick={() => { setDeck(deck); setOpen(true); }}>
            <CloseIcon></CloseIcon>
        </IconButton>
        <div className={classes.title}>{deck.deck_name}</div>
        <div>
            <Button className={classes.learnBtn} variant="contained" onClick={() => { router.push({ pathname: '/learnDeck', query: { id: deck.id } }) }}>Learn</Button>
            <Button className={classes.editBtn} onClick={() => { router.push({ pathname: '/updateDeck', query: { id: deck.id } }) }}>Edit</Button>
        </div>
    </Paper>)
}

export default DeckManager;