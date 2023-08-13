import React from 'react'

export default function Projects() {
  return (

    <div id="project" className="project">
    <hr></hr>
        <h3>Projects</h3>

        <div className="project-box">
            <h4>Food Delivery Application</h4>
            <p>
                <ul>
                    <li>Developed a Food Delivery App utilizing the MERN stack (MongoDB, Express.js, React, Node.js).</li>
                    <li>Designed an intuitive frontend with React for seamless user browsing.</li>
                    <li>Implemented user authentication using JWT for secure access.</li>
                </ul>
                <p><strong>Tech Used: </strong> Mongo DB, ReactJS, NodeJS, ExpressJS, HTML, CSS, JSON Web Tokens (JWT)</p>
            </p>
            <a href = "https://github.com/Tejas-raghu/FoodDelivery-MERN/tree/master" target = "_blank" rel = "noopener noreferrer">
                <button className = "githubButton">View</button>
            </a>
        </div>

        <div className = "project-box">
            <h4>B2B Order Amount Production</h4>
            <p>
            Developed and implemented an efficient Machine Learning solution using Python, Numpy, Pandas and
            ML libraries to forecast customer order amounts based on historical customer behavior
            </p>
            <p><strong>Tech Used:</strong> Python, Pandas, Seaborn, Matplotlib, Numpy, Scikit-learn</p>
            <a href = "https://github.com/Tejas-raghu/Order_Amount_Prediction_ML" target = "_blank" rel = "noopener noreferrer">
                <button className = "githubButton">View</button>
            </a>
        </div>

        <div className = "project-box">

            <h4>Weather Application</h4>
            <p>
            Created a weather application built with HTML/CSS, JavaScript, and RapidAPI. It provides real-time
            weather data, hourly and daily forecasts, and an interactive map for multiple locations
            </p>
            <p><strong>Tech Used: </strong>HTML, CSS, Javascript, RapidAPI</p>
            <a href="https://github.com/Tejas-raghu/WeatherApp" target="_blank" rel = "noopener noreferrer">
                <button className = "githubButton">View</button>
            </a>
        </div>


        <style>
            {`
              .project{
                text-align: left;
                background-color: #f0f0f0;
                padding: 10px;
              }

              .project hr{
                border-width: 2px;
                font-weight: bold;
             
              }

              .project h3{
                font-size:25px;
                font-family:'Times New Roman',Times,sans-serif;
                color: #333;
                margin-left: 12px;
                position: relative;
                display: inline-block;
              }

              .project h3::after{
                content: "";
               position: absolute;
               left: 0;
               bottom: -5px; /* Adjust this value to control line position */
               width: 100%;
               height: 2px;
               background-color: #333;
              }

              .project-box {
            border: 1px solid #ccc;
            padding: 20px;
            margin-bottom: 20px;
            background-color: #fff;
            border-radius: 5px;
          }

          .project-box h4 {
            font-size: 20px;
            margin-top: 0;
          }

          .project-box p {
            font-size: 16px;
            color:#666;
            margin-left: 10px;
          }

          .githubButton{
            display: block;
            margin: 20px ;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
            
            
            `}
        </style>
    </div>
  )
}
