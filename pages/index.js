import Head from "next/head";
import FeaturedBlogs from "../components/blogs/FeaturedBlogs";
import Intro from "../components/Intro/Intro";
import dbConnect from "../utils/dbConnect";
import Blog from '../models/Blog'

export default function Home(props) {
  const blogs = JSON.parse(props.blogs)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      
      {blogs ? <FeaturedBlogs blogs={blogs} /> : "No Featured Blogs"}
      
    </div>
  );
}

export async function getServerSideProps(context) {
  dbConnect();
  const data = await Blog.find({ isFeatured: true })
  const blogs = JSON.stringify(data)

  
  return {
    props: {
      blogs: blogs
    },
  };
}
