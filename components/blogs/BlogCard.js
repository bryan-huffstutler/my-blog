import { Avatar, Card, CardContent, CardHeader, Grid, Typography, CardMedia } from '@material-ui/core';
import React, { useState } from 'react'

function BlogCard({ blog }) {
    const [hover, setHover] = useState(false)


    function onHover() {
        setHover(() => !hover)
    }
    return (

        <Grid item xl={2} lg={4} md={4} sm={12} xs={12}>
            <div onMouseEnter={onHover} onMouseLeave={onHover} style={{transition: hover ? "all .3s ease-in-out" : null, transform: hover ? "scale(1.04)" : null}}>
                <a href={blog.source} target="blank" style={{ textDecoration: 'none' }}>
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
            </div>


        </Grid>




    );
}

export default BlogCard;