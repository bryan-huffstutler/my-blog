import React, { useState } from "react";

import {
  Typography,
  Input,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

function BlogControlCard(props) {
  const { _id, title, source, isFeatured } = props.blog;
  console.log(isFeatured);
  const [featured, setFeatured] = useState(isFeatured);

  function handleFeature() {
    if(featured) {
        const json = JSON.stringify({isFeatured: false})
        fetch(`/api/blogs/${_id}`,
        {
            method: "PUT",
            body: json
        }).then(res => props.getBlogs())
    } else {
        const json = JSON.stringify({isFeatured: true})
        fetch(`/api/blogs/${_id}`,
        {
            method: "PUT",
            body: json
        }).then(res => props.getBlogs()).catch(err => console.log(err))
    }
    setFeatured(!featured)
  }

  function handleDelete () {
    fetch(`/api/blogs/${_id}`, {
        method: "DELETE"
    }).then(res=> props.getBlogs()).catch(err => console.log(err))
  }

  return (
    <div id={_id}>
      <Typography align="left" variant="h6">
        Blog Name: {title}
      </Typography>

      {isFeatured ? <FormControlLabel 
        value="featured"
        control={<Checkbox color='primary' defaultChecked/>}
        label="Featured"
        labelPlacement="end"
        name='featured'
        onChange={handleFeature}
      /> : <FormControlLabel 
        value='featured'
        control={<Checkbox color='primary' />}
        label="Featured"
        labelPlacement="end"
        name='featured'
        onChange={handleFeature}
      />}
      <Button variant='contained' color='primary'>SUBMIT</Button>
      <Button onClick = {handleDelete} variant='contained' color='secondary'>DELETE</Button>
    </div>
  );
}

export default BlogControlCard;