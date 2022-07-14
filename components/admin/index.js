import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import AdminPanel from "./AdminPanel";
import BlogControl from "./BlogControl";

function AdminHome(props) {
  const [token, setToken] = useState("");

  function handleToken(data) {
    setToken(data);
  }

  function removeToken() {
    localStorage.removeItem("token");
    setToken("");
  }

  if (token) {
    return (
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={1} xs={1}>
          <AdminPanel removeToken={removeToken}/>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={1} xs={1}>
          <BlogControl blogs={props.blogs} />
        </Grid>
      </Grid>
    );
  } else {
    return <AuthForm handleToken={handleToken} />;
  }
}

export default AdminHome;
