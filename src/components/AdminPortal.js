import React from "react";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

function AdminPortal() {
  return (
    <div className="adminportal">
        <header>
          <h1>Admin Portal</h1>
          <p>Primary Administrator</p>
          <p>University: State University of New York at Albany</p>
        </header>
        <h2>Master Class Link</h2>
        <div>
          <TextField
            disabled
            id="outlined-disabled"
            label="Should retrieve link from backend"
          />
          <Fab color="secondary" aria-label="edit"><EditIcon /></Fab>
      </div>
      <h2>Semester Schedule Link</h2>
        <div>
        <TextField
            disabled
            id="outlined-disabled"
            label="Should retrieve link from backend"
          />
          <Fab color="secondary" aria-label="edit"><EditIcon /></Fab>
      </div>
    </div>
  );
}

export default AdminPortal;