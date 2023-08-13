import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className = "contact">
      <hr></hr>
      <h3>Contact</h3>
      <p className="details">
        <strong>Email: {" "}</strong>
        <a className = "link" href = "mailto:tejasviraghuvanshi3@gmail.com">
          <strong>tejasviraghuvanshi3@gmail.com</strong>
        </a>
      </p>
      <p className="details"> <strong> Phone: <span className = "phone">8077185801</span></strong></p>

      <style>
        {`
         .contact hr{
           border-width:2px;
           font-weight:bold;
         }

         .contact{
           background-color:#f0f0f0;
           text-align:left;
           padding:10px;
          }

          .contact h3{
            font-size:25px;
            font-family:'Times New Roman',Times,sans-serif;
            color:#333;
            margin-left:29px;
            display:inline-block;
            position:relative;
          }

          .contact h3::after{
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px; /* Adjust this value to control line position */
            width: 100%;
            height: 2px;
            background-color: #333;
          }

          .contact p{
            font-size:20px;
            color: #666;
            text-align:left;
            margin-left: 30px;
            
          }

          .phone{
            color: black ;
            }

          .link{
            font-size:17px;
          }
          

        `}
      </style>
    </div>
  )
}
