// next
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
// libraries
import { useSession, signIn, signOut } from "next-auth/react";
// material ui
import { Grid } from '@mui/material';
// components
import Layout, { siteTitle } from '../components/layout'
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
        <title>{siteTitle}</title>
      </Head>
      <TopNav />
      <AppProfile />
      <Grid container direction='row' justifyContent='center' alignItems='center' spacing={6}>
        <Grid item>
          <Button variant='outlined' onClick={() => router.push('/register')}>Sign up</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => signIn('', { callbackUrl: '/dashboard' })}>Sign in</Button>
        </Grid>
      </Grid>
    </>
  )
}
