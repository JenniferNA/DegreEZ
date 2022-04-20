import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import homebg from '../graphics/HomeBG.png';
import { useParams, useNavigate } from "react-router";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';


export default function AdminPortal() {
  const [form, setForm] = useState({
    masterURL: ""
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {

    e.preventDefault();

    const newURL = { ...form };

    await fetch("http://localhost:5000/url/add", {
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

    window.alert("url submitted");

    setForm({ masterURL: "" });
  }


  return (
    <div className="adminportal">

      <header>
        <h1>Admin Portal</h1>
        <p>Primary Administrator</p>
        <p>University: State University of New York at Albany</p>
      </header>

      <form onSubmit={onSubmit}>
        {/*
        <h2>Master Class Link</h2>
     
        <div>
          <input
              className="form-check-input"
              type="url"
              id="outlined-disabled"
              //onChange={(e) => updateForm({ deptURL: e.target.value })}
            />
        </div>
        */}

        <h2>Semester Schedule Link</h2>
        <input
          className="form-check-input"
          type="text"
          id="masterURL"
          value={form.masterURL}
          onChange={(e) => updateForm({ masterURL: e.target.value })}
        />
        
        <button type="submit">Change</button>
      </form>

    </div>
  );
}