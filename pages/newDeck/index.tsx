import * as React from 'react';
import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// nextauth
import { useSession } from 'next-auth/react';
// material ui
import Button from '@mui/material/Button';
// components
import Toast from '../../components/Toast';
// styles
import useStyles from './styles';
// type
import { AlertColor } from '@mui/material/Alert';

const NewDeck: React.FunctionComponent = () => {
    const router = useRouter();
    const { classes } = useStyles();
    const { data: session } = useSession();
    const [deck_name, setDeckName] = useState<string>('');
    const [message, setMessage] = useState<string | undefined>(undefined);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<AlertColor>('success');

    const createDeck = async () => {
        const response = await fetch('/api/createDeck', {
            method: 'POST',
            body: JSON.stringify({ deck_name, creator_email: session.user.email })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
                setAlertType('error');
                setMessage('Something went wrong');
                setShowToast(true);
            } else {
                setAlertType('success');
                setMessage('Your New Deck of Cards has been created!')
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    router.push('/dashboard');
                }, 1500);
            }
        }
    }

    return (
        <div className={classes.container}>
            <h1>Create New Deck of Cards</h1>
            <label>Enter a name for your new deck of cards</label>
            <input
                type="text"
                name="deckName"
                value={deck_name}
                onChange={(e) => {
                    setDeckName(e.target.value);
                }}
            />
            <Button color='secondary' variant='contained' disabled={!deck_name} onClick={createDeck}>Create!</Button>
            <Toast open={showToast} setOpen={setShowToast} type={alertType} message={message} />
        </div>
    )
}

export default NewDeck;