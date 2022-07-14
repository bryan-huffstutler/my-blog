import { Grid } from "@material-ui/core";
import BlogCard from "./BlogCard";

function AllBlogs(props) {
  return (
    <Grid container spacing={4}>
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} id={blog._id} blog={blog} />
      ))}
    </Grid>
  );
}

export default AllBlogs;
