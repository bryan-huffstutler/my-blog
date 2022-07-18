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
        <title>@Bryan_FS_Dev's Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="@Bryan_FS_DEV's blog. I blog about life in general, I write technical blogs, and I write about being a developer in general." />
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
