import * as React from 'react';
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import { CardManager, Toast } from '../../components';
// styles
import useStyles from './styles';
// type
import { Deck } from '../dashboard';
import { AlertColor } from '@mui/material/Alert';

export type Card = {
    id: number,
    deck_id: number,
    question: string,
    answer: string
}

const UpdateDeck: React.FunctionComponent = () => {
    const router = useRouter();
    const { classes } = useStyles();
    const [deck_name, setDeckName] = useState<string | undefined>(undefined);
    const [deck, setDeck] = useState<Deck | undefined>(undefined);
    const [cards, setCards] = useState<Card[] | undefined>(undefined);
    const [question, setQuestion] = useState<string | undefined>(undefined);
    const [answer, setAnswer] = useState<string | undefined>(undefined);
    const [message, setMessage] = useState<string | undefined>(undefined);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<AlertColor>('success');

    const fetchDeck = async () => {
        const response = await fetch('/api/getDeck', {
            method: 'POST',
            body: JSON.stringify({ id: router.query.id })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
            } else {
                const b = await response.json();
                if (b) {
                    setDeck(b[0]);
                    setDeckName(b[0].deck_name);
                    console.log(b);
                }
            }
        }
    }

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
                    console.log(b);
                    setCards(b);
                }
            }
        }
    }

    const updateDeck = async () => {
        const response = await fetch('/api/updateDeck', {
            method: 'POST',
            body: JSON.stringify({ deck_name, id: router.query.id })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
                setAlertType('error');
                setMessage('Something went wrong');
            } else {
                setAlertType('success');
                setMessage('Your Deck of Cards has successfully been updated!');
                setShowToast(true);
                setTimeout(() => {
                    router.push('/dashboard');
                }, 1500);
            }
        }
    }

    const createCard = async () => {
        const cardsAry = [];
        const card = { question, answer };
        cardsAry.push(card);
        const response = await fetch('/api/createCards', {
            method: 'POST',
            body: JSON.stringify({ cards: cardsAry, deck_id: router.query.id })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
                setAlertType('error');
                setMessage('Something went wrong');
            } else {
                setAlertType('success');
                setMessage('New card has been added to this deck');
                setShowToast(true);
                setRefresh(!refresh);
                setQuestion(undefined);
                setAnswer(undefined);
            }
        }
    }

    const deleteCard = async (id: number) => {
        const response = await fetch('/api/deleteCard', {
            method: 'POST',
            body: JSON.stringify({ id })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
                setAlertType('error');
                setMessage('Something went wrong');
            } else {
                setRefresh(!refresh);
            }
        }
    }

    useEffect(() => {
        if (router.query.id) {
            fetchDeck();
            fetchCards();
        }
    }, [])

    useEffect(() => {
        if (router.query.id) {
            fetchCards();
        }
    }, [refresh])

    return (
        <div className={classes.mainContainer}>
            <h2>Update Deck</h2>
            <div className={classes.nameField}>
                <label>Change the name of this deck: </label>
                <input
                    type="text"
                    name="deckName"
                    value={deck_name}
                    onChange={(e) => {
                        setDeckName(e.target.value);
                    }}
                />
            </div>
            {cards && cards.map(card => <div key={card.id} className={classes.cardContainer}><CardManager card={card} deleteCard={deleteCard}></CardManager></div>)}
            <label>Enter Question</label>
            <input
                type="text"
                name="question"
                value={question}
                onChange={(e) => {
                    setQuestion(e.target.value);
                }}
            />
            <label>Enter Answer</label>
            <input
                type="text"
                name="answer"
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                }}
            />
            <button disabled={!question || !answer} onClick={createCard}>Add Card</button>
            <button disabled={!deck_name} onClick={updateDeck}>Update</button>
            {/* {message ? <div>{message}</div> : null} */}
            <Toast open={showToast} setOpen={setShowToast} type={alertType} message={message} />
        </div>
    )
}

export default UpdateDeck;