import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Watch Security - Commercial and Home Security Solutions</title>
        <meta name="description" content="watchsecurityltd.co.uk" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
