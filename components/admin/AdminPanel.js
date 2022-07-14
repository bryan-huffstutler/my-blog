import React, { useState } from "react";
import {
  Button,
  Input,
  TextField,
  Checkbox,
  InputLabel,
} from "@material-ui/core";

function AdminPanel(props) {
  const initInputs = {
    title: "",
    description: "",
    source: "",
    date: new Date(),
    isFeatured: false,
    image: "",
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(() => ({
      ...inputs,
      [name]: value,
    }));
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInputs((prev) => ({
        ...prev,
        isFeatured: !inputs.isFeatured,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        isFeatured: !inputs.isFeatured,
      }));
    }
  }

  function clearInputs() {
    setInputs(initInputs);
  }

  function handleSubmit() {
    
    // setInputs((prev) => ({
    //   ...prev,
    //   date: new Date(),
    // }));

    fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });

    clearInputs();
  }

  const styles = {
    // padding: '20px',
    margin: "10px",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Input
        style={styles}
        onChange={handleChange}
        name="title"
        placeholder="Blog Title"
        value={inputs.title}
      />
      <br />

      <TextField
        style={styles}
        onChange={handleChange}
        name="description"
        placeholder="Description"
        rows="8"
        multiline
        value={inputs.description}
      />
      <br />

      <Input
        style={styles}
        onChange={handleChange}
        name="source"
        placeholder="Source"
        value={inputs.source}
      />
      <br />

      <Input
        style={styles}
        onChange={handleChange}
        name="image"
        placeholder="Image Source"
        value={inputs.image}
      />
      <br />

      <InputLabel htmlFor="isFeatured" style={styles}>
        Is it Featured?
        <Checkbox
          onChange={handleCheck}
          name="isFeatured"
          placeholder="Is it featured?"
        />
      </InputLabel>

      <Button style={{margin: '15px'}} onClick={handleSubmit} color="primary" variant="contained">
        Add Blog
      </Button>
      <Button style={{margin: '15px'}} onClick={props.removeToken} variant='contained' color='primary'>LOGOUT</Button>
    </div>
  );
}

export default AdminPanel;
