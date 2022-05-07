
import React, {Component} from 'react';
import homebg from '../graphics/HomeBG.png';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography, Button, CssBaseline, Box, Grid, Paper, Avatar } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Input = styled('input')({
  display: 'none',
});

function StudentPlan() {
  return (
    <div className="studentplan">
        <div id="studentinfo">

            <div class="row">
                <p>Name: First Last</p>
                <p>University: University at Albany</p>
            </div>
            <div class="row">
                <p>Major(s): Major1, ...</p>
                <p>Minor(s): Minor1, ...</p>
            </div>

            <div class="row">
                <h3>Multi Semester Plan</h3><a href="#">Edit</a>
            </div>
        </div>

        <div class="multisemplan">
            <h2>Semester 20XX</h2>
            <hr></hr>
            <ul>
                <li>Course 1 (X credits)</li>
                <li>Course 2 (X credits)</li>
                <li>Course 3 (X credits)</li>
                <li>Course 4 (X credits)</li>
                <li>Course 5 (X credits)</li>
            </ul>
            <a>Detailed View </a>
        </div>

        <div class="multisemplan">
            <h2>Semester 20XX</h2>
            <hr></hr>
            <ul>
                <li>Course 1 (X credits)</li>
                <li>Course 2 (X credits)</li>
                <li>Course 3 (X credits)</li>
                <li>Course 4 (X credits)</li>
                <li>Course 5 (X credits)</li>
            </ul>
            <a>Detailed View </a>
        </div>
      
    </div>
  );
}

export default StudentPlan;