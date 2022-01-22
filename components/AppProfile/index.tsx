import React from 'react';
// Next
import Image from 'next/image';
import { Grid } from '@mui/material';
import Slider from "react-slick";
// styles
import useStyles from './styles';

const AppProfile = () => {
    const { classes } = useStyles();
    const settings = {
        // dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className={classes.container}>
            <img src='https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80'></img>
        </div>
    )
}

export default AppProfile;