import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div id="professional" className="profession">
      <hr></hr>
      <h3 className="experience-header">Professional Experience</h3>
      <div className="experience-box">
        <h4>HighRadius | Product Engineer Intern</h4>
        <p>
          Developed a Machine Learning model using data analysis and predictive
          modeling techniques to predict customer order amounts, integrated with
          a Full-stack Invoice Management Application built with React JS, Java
          Servlets, and JDBC for web development and database management.
        </p>

        <a
          href="https://github.com/Tejas-raghu/Invoice_Management_system_HRC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github-button">View</button>
        </a>
      </div>

      <div className="experience-box">
        <h4>Flick2Know | Intern</h4>
        <p>
          Leveraged Vue.js and Nuxt.js to develop and maintain user interfaces
          for web applications, adhering to best practices and coding standards.
          Collaborated with a team of experienced developers to implement new
          features and resolve bugs, ensuring timely delivery of high-quality
          products.
        </p>

      </div>
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

          .experience-box {
            border: 1px solid #ccc;
            padding: 20px;
            margin-bottom: 20px;
            background-color: #fff;
            border-radius: 5px;
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
