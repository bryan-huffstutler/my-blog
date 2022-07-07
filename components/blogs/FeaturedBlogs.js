import { Grid } from "@material-ui/core";
import BlogCard from "./BlogCard";

function FeaturedBlogs(props) {
    return (
        <Grid container spacing={4}>
            {props.blogs.map(blog => 
            <BlogCard blog={blog} />)}
        </Grid>
    );
}

export default FeaturedBlogs;