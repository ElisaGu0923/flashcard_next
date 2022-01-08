import * as React from 'react';
import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// nextauth
import { useSession } from 'next-auth/react';
// type
import { AlertColor } from '@mui/material/Alert';
// components
import Toast from '../../components/Toast';

const NewDeck: React.FunctionComponent = () => {
    const [deck_name, setDeckName] = useState<string>('');
    const [message, setMessage] = useState<string | undefined>(undefined);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<AlertColor>('success');
    const { data: session } = useSession();
    const router = useRouter();

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
        <div>
            <div>Create New Deck of Cards</div>
            <div>
                <label>Enter the name of your new deck</label>
                <input
                    type="text"
                    name="deckName"
                    value={deck_name}
                    onChange={(e) => {
                        setDeckName(e.target.value);
                    }}
                />
            </div>
            <button disabled={!deck_name} onClick={createDeck}>Create!</button>
            <Toast open={showToast} setOpen={setShowToast} type={alertType} message={message} />
        </div>
    )
}

export default NewDeck;