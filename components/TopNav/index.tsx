import React from 'react'
// next
import Image from 'next/image';
import { useRouter } from 'next/router';
// Material UI
import Button from '@mui/material/Button';
// 3rd party libraries
import { signIn } from "next-auth/react";
// styles
import useStyles from './styles';

const TopNav = () => {
    const { classes } = useStyles();
    const router = useRouter();
    return (
        <div className={classes.container}>
            <Image src='/icons/flashCardsIcon.png' width="40px" height="40px" />
            <div>
                <Button variant='outlined' onClick={() => router.push('/register')}>Sign up</Button>
                <Button variant='contained' onClick={() => signIn('', { callbackUrl: '/dashboard' })}>Sign in</Button>
            </div>
        </div>
    )
}

export default TopNav
