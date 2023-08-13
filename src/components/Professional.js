import React from "react";

export default function () {
  return (
    <div id="professional" className="profession">
    <hr></hr>
      <h3 className="experience-header">Professional Experience</h3>
      <h4>HighRadius | Product Engineer Intern</h4>
      <p>
        Developed a Machine Learning model using data analysis and predictive
        modeling techniques to predict customer order amounts, integrated with a
        Full-stack Invoice Management Application built with React JS, Java
        Servlets, and JDBC for web development and database management.
      </p>

      <a href = "https://github.com/Tejas-raghu/Invoice_Management_system_HRC" target="_blank" rel="noopener noreferrer">
        <button className="github-button">View</button>
      </a>
      <style>
        {`
             .profession{
                background-color: #f0f0f0;
                padding: 10px;
                text-align: left;
             }

             .profession hr{
                border-width: 2px;
                font-weight: bold;
             }

             .experience-header {
                margin-left: 12px;
               position: relative;            /* For positioning the line */
               display: inline-block;         /* To contain inline elements */
               font-size: 25px;
               font-family: 'Times New Roman', Times, serif;
               color: #333;
          }

          .experience-header::after {
               content: "";
               position: absolute;
               left: 0;
               bottom: -5px; /* Adjust this value to control line position */
               width: 100%;
               height: 2px;
               background-color: #333;
          }

            .profession h4 {
              text-align: left;
              margin-left: 18px;
              font-size: 20px;
              font-family: 'Times New Roman', Times, serif;
              color: #555;
             }

          .profession p{
            text-align: left;
            inline-height:1.5;
            font-size:18px;
            margin-left: 20px;
            margin-right: 20px;
            color:#666;
          }

          .github-button{
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
  );
}
