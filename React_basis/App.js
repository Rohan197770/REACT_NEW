import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
      key: "h1",
    },
    "Heading 1 for parcel"//create h1 tag using react
  );
  // jo upar code hai wo ye same chiz bna rha hai 
  // /* <h1 id="title">Heading 1</h1> */
  
  const heading2 = React.createElement(
   "h2",//name of the tag //react element
    {
      id: "title",//attributes
      key: "h2",//uniquelly identified
    },
    "Heading 2"//what you want to put inside the h1
  );
  
  const container = React.createElement(
    "div",//tag
    {
      id: "container",//attributes //props
    },
    [heading, heading2]//children
  );

  //jsx
  const heading5 =(<h1 id="title" key="h2">Namaste rohan</h1>
  );
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer

  /*<div class="header">
    <h1>Namaste Rohan</h1>
    <h2>Namste Abhishek</h2>
    </div>
    */
   //isi ka code hai ye 
   const container1= React.createElement(
     "div",
     {
        id:"container",
        key:"1234",
     },
     [React.createElement(
       "h1",
       {
          id: "title",
          key: "h1",
       },
       "Namaste Rohan 1"
     ),React.createElement(
       "h2",
       {
         id: "title2",
         key: "h2",
       },
       "hello React"
     )]
   );
  root.render(container1);
  