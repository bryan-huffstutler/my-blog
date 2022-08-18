import React from 'react'
import BlogControlCard from './BlogControlCard'
import {Typography} from '@material-ui/core'

function BlogControl (props) {
  

  return (
    <div style={{margin: '30px'}}>
    <Typography align='left' color='primary' variant='h2'>Blogs</Typography>
        {props.blogs.map(blog => {
            return <BlogControlCard key={blog._id} id={blog._id} blog={blog} getBlogs={props.getBlogs}/>
        })}
    </div>
  )
}

export default BlogControl