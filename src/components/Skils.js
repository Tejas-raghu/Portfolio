import React from "react";

export default function Skils() {
  return (
    <div id="skill" className="skill">
      <hr></hr>
      <h3>Skills</h3>
      <ul>
        <li>
          <strong>Programming Languages:</strong> C, C++, Python, Javascript,
          HTML, CSS
        </li>
        <li>
          <strong>Libraries/Frameworks: </strong> React JS, Express JS, Node JS,
          MongoDB
        </li>
        <li>
          <strong>Tools / Platforms:</strong> Github, VS Code, Eclipse, Postman
        </li>
        <li>
          <strong>Databases:</strong> SQL
        </li>
      </ul>

      <style>
        {`

               .skill{
                background-color:#f0f0f0;
                padding:10px;
                text-align:left;
               }
               
               .skill hr{
                border-width: 2px;
                font-weight: bold;
               }

              .skill h3{
                text-align: left;
                margin-left: 14px;
                font-size: 25px;
                font-family: 'Times New Roman', Times, serif;
                color: #333;
                display: inline-block;
                position: relative;
                }

                .skill h3::after{
                  content: "";
                  position: absolute;
                  left: 0;
                  bottom: -5px; /* Adjust this value to control line position */
                  width: 100%;
                  height: 2px;
                  background-color: #333;
                }

              .skill ul {
                list-style: none;
                padding: 0;
                margin: 0;
               }

              .skill li {
                text-align: left;
                margin-left: 20px; /* Indent content a bit */
                font-size: 18px;
                line-height: 1.5;
                color: #555;
                }
              
            `}
      </style>
    </div>
  );
}
