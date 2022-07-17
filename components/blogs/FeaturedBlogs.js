import { Grid } from "@material-ui/core";
import BlogCard from "./BlogCard";

function FeaturedBlogs(props) {
    console.log(props.blogs)
    return (
        <Grid container spacing={4}>
            {props.blogs.map(blog => {
                return <BlogCard key={blog._id} id={blog._id} blog={blog} />
            }
            )}
            
        </Grid>
    );
}

export default FeaturedBlogs;