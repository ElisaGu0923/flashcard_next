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
import { Card } from '../../pages/updateDeck';

export interface ICardManagerProps {
    card: Card,
    deleteCard: (id: number) => Promise<void>
}

const CardManager: React.FunctionComponent<ICardManagerProps> = ({ card, deleteCard }) => {
    const router = useRouter();
    const { classes } = useStyles();
    return (<Paper variant='outlined' key={card.id} className={classes.paper}>
        <IconButton className={classes.deleteBtn} onClick={() => deleteCard(card.id)}>
            <CloseIcon></CloseIcon>
        </IconButton>
        <div className={classes.question}>
            {card.question}
        </div>
        <div className={classes.answer}>
            {card.answer}
        </div>
        {/* <button onClick={() => deleteCard(card.id)}>Delete</button> */}
    </Paper>)
}

export default CardManager;