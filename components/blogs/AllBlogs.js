import { Grid, Card, CardHeader, CardContent, Divider, Avatar, Typography } from "@material-ui/core";
import BlogCard from './BlogCard'

function AllBlogs(props) {
    return (
        <Grid container spacing={4}>
            {props.blogs.map(blog => 
                <BlogCard id={blog._id} blog={blog} />
            )}
        </Grid>
    );
}

export default AllBlogs;