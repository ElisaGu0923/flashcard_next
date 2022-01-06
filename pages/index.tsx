// next
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
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
  const router = useRouter();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <button onClick={submitSignup}>Sign up</button> */}
      <button onClick={() => router.push('/register')}>Sign up</button>
      <button onClick={() => signIn('', { callbackUrl: '/dashboard' })}>Sign in</button>
    </Layout>
  )
}
