import * as React from 'react';
import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// libraries
import Slider from "react-slick";
// types
import { Card } from '../updateDeck';

const LearnDeck: React.FunctionComponent = () => {
    const router = useRouter();
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
            <div key={card.id}><button disabled={disabled} onClick={() => { setShowAnswer(true); setDisabled(true); }}>{showAnswer ? card.answer : null}</button>{card.question}</div>
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
        <>
            {/* {cards.length > 0 ? renderCard(cards[0]) : <div>Loading...</div>} */}
            {curCard ? renderCard(curCard) : null}
            {cards.length > 1 ? <button onClick={showNext}>Next Card</button> : <button onClick={() => router.push('/dashboard')}>Finish</button>}
        </>
    )
}

export default LearnDeck;