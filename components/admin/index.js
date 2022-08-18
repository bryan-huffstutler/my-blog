import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import AdminPanel from "./AdminPanel";
import BlogControl from "./BlogControl";
import axios from 'axios'

function AdminHome(props) {
  const [token, setToken] = useState("");
  const [blogs, setBlogs] = useState()

  function handleToken(data) {
    setToken(data);
  }

  async function getBlogs() {
    const newBlogs = await axios.get('/api/blogs')
    console.log(newBlogs)
    setBlogs(newBlogs.data)
  }

  function removeToken() {
    localStorage.removeItem("token");
    setToken("");
  }

  if (token) {
    return (
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={1} xs={1}>
          <AdminPanel removeToken={removeToken} getBlogs={getBlogs}/>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={1} xs={1}>
          <BlogControl blogs={props.blogs}   getBlogs={getBlogs}/>
        </Grid>
      </Grid>
    );
  } else {
    return <AuthForm handleToken={handleToken} />;
  }
}

export default AdminHome;
