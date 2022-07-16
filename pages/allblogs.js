import Head from "next/head";
import { Grid } from "@material-ui/core";
import AllBlogs from "../components/blogs/AllBlogs";

function AllBlogsPage(props) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


         
            <AllBlogs blogs={props.blogs} />


        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/blogs')
    const blogs = await res.json()

    return {
        props: {
            blogs: blogs
        }
    }
}

export default AllBlogsPage;