
import React, {Component} from 'react';
import { FaChevronRight } from 'react-icons/fa';

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
                <h3>Multi Semester Plan</h3><a id="edit" href="#">Edit </a>
            </div>
        </div>

        <div class="planlist">
            <div class= "schedule">
                <h2>Semester 20XX</h2>
                <hr></hr>
                <ul>
                    <li>Course 1 (X credits)</li>
                    <li>Course 2 (X credits)</li>
                    <li>Course 3 (X credits)</li>
                    <li>Course 4 (X credits)</li>
                    <li>Course 5 (X credits)</li>
                </ul>
                <div class="row">
                    <a href="#">Detailed View <FaChevronRight /></a>
                </div>
            </div>
            <div class= "schedule">
                <h2>Semester 20XX</h2>
                <hr></hr>
                <ul>
                    <li>Course 1 (X credits)</li>
                    <li>Course 2 (X credits)</li>
                    <li>Course 3 (X credits)</li>
                    <li>Course 4 (X credits)</li>
                    <li>Course 5 (X credits)</li>
                </ul>
                <div class="row">
                    <a href="#">Detailed View <FaChevronRight /></a>
                </div>
            </div>
            <div class= "schedule">
                <h2>Semester 20XX</h2>
                <hr></hr>
                <ul>
                    <li>Course 1 (X credits)</li>
                    <li>Course 2 (X credits)</li>
                    <li>Course 3 (X credits)</li>
                    <li>Course 4 (X credits)</li>
                    <li>Course 5 (X credits)</li>
                </ul>
                <div class="row">
                    <a href="#">Detailed View <FaChevronRight /></a>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default StudentPlan;