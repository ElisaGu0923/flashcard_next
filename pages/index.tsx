// next
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
// libraries
import { useSession, signIn, signOut } from "next-auth/react";
// components
import Layout, { siteTitle } from '../components/layout'
import { Loading } from '../components';
// styles
import utilStyles from '../styles/utils.module.css'
// mock
import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  const { data: session } = useSession();

  const submitSignup = async () => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username: 'username', email: 'email@gmail.com', password: 'password' })
    })
    if (response.status === 200) {
      if (response.statusText != 'OK') {
        console.log(response.statusText);
      } else {
        console.log('OK');
      }
    }
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <button onClick={submitSignup}>Sign up</button>
      <button onClick={() => signIn('', { callbackUrl: '/dashboard' })}>Sign in</button>
    </Layout>
  )
}
