import { Grid } from '@material-ui/core'
import Head from 'next/head'
import FeaturedBlogs from '../components/blogs/FeaturedBlogs'
import Intro from '../components/Intro/Intro'

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
  
      <FeaturedBlogs blogs={props.blogs} />



    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/blogs/featured')
  const blogs = await res.json()

  return {
    props: {
      blogs: blogs
    }
  }
}