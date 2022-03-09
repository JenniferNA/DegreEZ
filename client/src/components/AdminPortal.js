import React from "react";
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router";
import { Stack } from "@mui/material";

function AdminPortal() {

  
    const [url, setURL] = useState({
      link: ""
    });

    const navigate = useNavigate();
    
    function updateURL(value) {
      return setURL((prev) => {
        return { ...prev, ...value };
      });
    }

    async function onSubmit(e) {
      e.preventDefault();

      const newURL = { ...url };
  
      await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newURL),
      })
      .catch(error => {
        window.alert(error);
        return;
      });

      setURL({ link: ""});
    navigate("/");
  }
  
  return (
    <div className="adminportal">
        <header>
          <h1>Admin Portal</h1>
          <p>Primary Administrator</p>
          <p>University: State University of New York at Albany</p>
        </header>
        <h2>Master Class Link</h2>
        <div>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-disabled"
              label="Should retrieve link from backend"
              value={url} //onChange={(e) => updateURL(e.target.value)}
            />
             <button className="btn" type="submit" onClick={(e) => updateURL({link: url})} ><Fab size="medium" color="#cfe8fc" aria-label="add" > <AddIcon /> </Fab></button>
          </Stack>
          
      </div>
      <h2>Semester Schedule Link</h2>
        <div>
        <Stack direction="row" spacing={2}>
          <TextField
              id="outlined-disabled"
              label="Should retrieve link from backend"
              value={url} //onChange={(e) => updateURL(e.target.value)}
          />
          <button className="btn" type="submit" onClick={(e) => updateURL({link: url})} ><Fab size="medium" color="#cfe8fc" aria-label="add" > <AddIcon /> </Fab></button>
        </Stack>
      </div>
    </div>
  );
}

export default AdminPortal;