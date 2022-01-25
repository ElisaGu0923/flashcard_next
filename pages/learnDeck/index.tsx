import * as React from 'react';
import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// material ui
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// 3rd party libraries
import Slider from "react-slick";
// styles
import useStyles from './styles';
// types
import { Card } from '../updateDeck';

const LearnDeck: React.FunctionComponent = () => {
    const router = useRouter();
    const { classes } = useStyles();
    const [cards, setCards] = useState<Card[]>([]);
    const [curCard, setCurCard] = useState<Card | undefined>(undefined);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);

    const fetchCards = async () => {
        const response = await fetch('/api/getCards', {
            method: 'POST',
            body: JSON.stringify({ id: router.query.id })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
            } else {
                const b = await response.json();
                if (b) {
                    setCards(b);
                    if (b.length > 0) {
                        setCurCard(b[0]);
                    }
                }
            }
        }
    }

    const renderCard = (card: Card): JSX.Element => {
        return (
            <div key={card.id}>
                <Paper className={classes.qcard}>
                    {card.question}
                </Paper>
                <button className={classes.acard} disabled={disabled} onClick={() => { setShowAnswer(true); setDisabled(true); }}>{showAnswer ? card.answer : 'Click to show answer'}</button>
            </div>
        )
    }

    const showNext = (): void => {
        setShowAnswer(false);
        setDisabled(false);
        setCurCard(cards[1]);
        cards.shift();
        setCards(cards);
    }

    useEffect(() => {
        if (router.query.id) {
            fetchCards();
        }
    }, [])

    return (
        <div className={classes.mainContainer}>
            {/* {cards.length > 0 ? renderCard(cards[0]) : <div>Loading...</div>} */}
            {curCard ? renderCard(curCard) : null}
            {cards.length > 1 ? <Button endIcon={<NavigateNextIcon />} onClick={showNext}>Next Card</Button> : <Button className={classes.finishBtn} onClick={() => router.push('/dashboard')}>Finish!</Button>}
        </div>
    )
}

export default LearnDeck;