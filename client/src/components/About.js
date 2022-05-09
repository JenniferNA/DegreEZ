import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              DegreEZ is a tool designed to help students with planning their schedules. It can take into account your degree audit and suggest the optimal schedule based on
              the remaining classes needed in your major and classes you might specifically want to take. It will always be updated with the latest class schedule and degree 
              requirements and any issues can be resolved manually by an admin. This project was developed by 5 UAlbany students: Dylan VanAllen, Jennifer Avila, Patrizzia Espina, 
              Duckhawn Baek, and Elijah Monzon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;