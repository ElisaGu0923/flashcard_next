import React from 'react'
// next
import Image from 'next/image';
// styles
import useStyles from './styles';

const TopNav = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.container}>
            <Image src='/icons/flashCardsIcon.png' width="40px" height="40px" />
        </div>
    )
}

export default TopNav
