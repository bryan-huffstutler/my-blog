import { Divider, Grid, Typography } from "@material-ui/core";
import BlogCard from "./BlogCard";

function FeaturedBlogs(props) {
  console.log(props.blogs);
  return (
    <div style={{margin: '20px'}}>
    <Divider variant='fullWidth' orientation='horizontal' component='h1'/>
      <Typography variant="h2" align="center" color="textPrimary">
        Featured Blogs
      </Typography>
      <Divider variant='fullWidth' orientation='horizontal' component='h1'/>
      <Grid container spacing={4} style={{margin: '20px'}}>
        {props.blogs.map((blog) => {
          return <BlogCard key={blog._id} id={blog._id} blog={blog} />;
        })}
      </Grid>
    </div>
  );
}

export default FeaturedBlogs;
