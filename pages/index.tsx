// next
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
// libraries
import { useSession, signIn, signOut } from "next-auth/react";
// material ui
import { Grid } from '@mui/material';
// components
import { AppProfile, Button, Loading, TopNav } from '../components';
// styles
import useStyles from './index.styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>MEMO</title>
      </Head>
      <TopNav />
      {/* <AppProfile /> */}
      {/* <Grid container direction='row' justifyContent='center' alignItems='center' spacing={6} className={classes.mainContainer}>
        <Grid item>
          <Button variant='outlined' onClick={() => router.push('/register')}>Sign up</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => signIn('', { callbackUrl: '/dashboard' })}>Sign in</Button>
        </Grid>
      </Grid> */}
      <div className={classes.mainContainer}>
        <div className={classes.content}>
          <h1>MEMO</h1>
          <h2>We Can Achieve Greater.</h2>
          <div>Powered by Next.JS, React.JS, Material UI</div>
        </div>
      </div>
    </>
  )
}
