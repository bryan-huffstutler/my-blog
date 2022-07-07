import { Avatar, Card, CardContent, CardHeader, Grid, Typography, CardMedia } from '@material-ui/core';
import React from 'react'

function BlogCard({ blog }) {
    return (
        
            <Grid item xl={2} lg={4} md={4} sm={12} xs={12}>
            <a href="https://www.google.com" target="blank" style={{textDecoration: 'none'}}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar>BH</Avatar>
                        }
                        title={blog.title}
                    />

                    <CardMedia
                        component='img'
                        src={blog.image}
                    />

                    <CardContent>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        >
                            {blog.description}
                        </Typography>
                    </CardContent>
                </Card>
            </a>
                
            </Grid>
        

    );
}

export default BlogCard;