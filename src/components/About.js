import React from 'react'

export default function () {
  return (
    <div id="about" className = "about">
    
        <h3 className="about-exp">About Me</h3>
        <p>
        Fascinated by solving puzzles and thinking logically, 
        I chose a career in software development. The constant evolution of this field and its real-world impact captivated me. 
        Beyond college, I explored web development through online tutorials and projects, 
        gaining the skills and confidence to create web applications.
        </p>


        <style>
            {`
            .about {
            background-color: #f0f0f0;
            padding: 20px;
            text-align: left;
            
          }

          
          .about-exp {
                margin-left: 12px;
               position: relative; /* For positioning the line */
               display: inline-block; /* To contain inline elements */
               font-size: 25px;
               font-family: 'Times New Roman', Times, serif;
               color: #333;
          }

          .about-exp::after {
               content: "";
               position: absolute;
               left: 0;
               bottom: -5px; /* Adjust this value to control line position */
               width: 100%;
               height: 2px;
               background-color: #333;
          }

          .about h3 {
            text-align: left;
            margin-left: 6px;
            font-size: 25px;
            font-family: 'Times New Roman', Times, serif;
            color: #333;
          }

          .about p {
            
            font-size: 18px;
            text-align: left;
            line-height: 1.5;
            color: #666;
            margin-left: 5px;
          }
            `}
        </style>
    </div>
  )
}
