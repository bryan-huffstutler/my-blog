import Head from "next/head";
import { Grid } from "@material-ui/core";
import AllBlogs from "../components/blogs/AllBlogs";
import dbConnect from '../utils/dbConnect'
import Blog from '../models/Blog'

function AllBlogsPage(props) {
    const blogs = JSON.parse(props.blogs)
    return (
        
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AllBlogs blogs={blogs} />
        </div>
    );
}

export async function getServerSideProps() {
    dbConnect()
    const data = await Blog.find()
    const blogs = JSON.stringify(data)

    return {
        props: {
            blogs: blogs
        }
    }
}

export default AllBlogsPage;