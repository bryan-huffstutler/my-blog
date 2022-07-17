import Layout from '../components/layout/Layout'
import Head from 'next/head'
import MasterProvider from '../components/context/MasterContext'
function MyApp({ Component, pageProps }) {
  return (
    // <MasterProvider>
      <Layout>
        <Head>
          <title>@Bryan_FS_DEV's Blog</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name = 'description' content ="Ever wonder what goes through a full stack developers mind while 
          freelancing? Need to know more about MERN stack technologies?
            This blog is written by Bryan Huffstutler and I go through my life struggling with Google searches, 
            struggling to understand things
            just like everyone else! Here's what I've learned so far..." 
          /> 
        </Head>
        <Component {...pageProps} />
      </Layout>
    // </MasterProvider>



  )
}

export default MyApp