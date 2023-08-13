import React from 'react'

export default function Certificates() {
  return (
    <div id="certificate" className = "certificate">
    <hr></hr>
        <h3>Certificates</h3>
        <p>
            <ul className = "certificate-list">
                <li><strong>HackerRank Problem Solving(Basic) -</strong> 
                <a href = "https://www.hackerrank.com/certificates/01db8d09e440" target = "_blank" rel = "noopener noreferrer"> HackerRank</a> 
                </li>

                <li><strong>HackerRank Problem Solving(Intermediate) -</strong> 
                <a href = "https://www.hackerrank.com/certificates/e3e0af2951a9" target = "_blank" rel = "noopener noreferrer"> HackerRank</a> 
                </li>

                <li><strong>HackerRank SQL (Basic) -</strong>
                <a href = "https://www.hackerrank.com/certificates/24413e7db549" target = "_blank" rel = "noopener noreferrer"> HackerRank</a> 
                </li>

                <li><strong>HackerRank SQL (Intermediate) -</strong> 
                <a href = "https://www.hackerrank.com/certificates/24413e7db549" target = "_blank" rel = "noopener noreferrer"> HackerRank</a> 
                </li>

                <li><strong>AWS Academy Graduate -</strong> 
                <a href = "https://drive.google.com/file/d/1321OKquswMe3lTyDsyJgzuHDHTlQaWD5/view" target = "_blank" rel = "noopener noreferrer"> HackerRank</a> 
                </li>

            </ul>
        </p>

        <style>
            {`
             .certificate{
                text-align: left;
                background-color: #f0f0f0;
                padding: 10px;
             }

             .certificate hr{
                order-width: 2px;
                font-weight: bold;
             }

             .certificate h3{
                margin-left:15px;
                font-size: 25px;
                font-family:'Times New Roman',Times,sans-serif;
                color:#333;
                position : relative;
                display : inline-block;
             }

             .certificate h3::after{
                content: "";
                position: absolute;
                left: 0;
                bottom: -5px; /* Adjust this value to control line position */
                width: 100%;
                height: 2px;
                background-color: #333;
             }

             .certificate-list {
            list-style: none;
            padding-left: 20px;
          }

          .certificate-list li {
            margin-bottom: 10px;
            font-size: 16px;
          }

          .certificate-list li strong {
            
            color: #555;
            font-weight: bold;
          }

          .certificate-list li a {
            color: #333;
            
          }

         

          
            
            `}
        </style>
    </div>
  )
}
