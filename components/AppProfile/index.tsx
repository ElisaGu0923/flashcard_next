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
        <>
            {/* <div>
                <Slider {...settings}>
                    <div style={{ width: "100vw" }}>
                        <Image src='/asset/element5-digital-OyCl7Y4y0Bk-unsplash.jpg' layout="responsive" width={100} height={100} />
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div> */}
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                    <div>MEMO</div>
                    <div>FlashCard App for Learning</div>
                    <div>Powered by: Next.JS, Material UI</div>
                </Grid>
            </Grid>
        </>
    )
}

export default AppProfile;