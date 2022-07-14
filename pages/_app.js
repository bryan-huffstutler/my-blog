import Layout from '../components/layout/Layout'
import Head from 'next/head'
import MasterProvider from '../components/context/MasterContext'
function MyApp({ Component, pageProps }) {
  return (
    // <MasterProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    // </MasterProvider>



  )
}

export default MyApp