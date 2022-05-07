import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function Show_certi() {
  const [id, setId] = useState();
  const url = "http://127.0.0.1:8000/";
  const check_availability = () => {
    axios.post(url, {});
  };

  return (
    <div>
      <form method="post">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value="id"
          name="id"
          onChange={setId_input}
        />
        <Button onclick={check_availability}>Submit</Button>
      </form>
    </div>
  );
}

export default Show_certi;
