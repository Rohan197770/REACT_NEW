const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"//create h1 tag using react
  );
  // jo upar code hai wo ye same chiz bna rha hai 
  // /* <h1 id="title">Heading 1</h1> */
  
  const heading2 = React.createElement(
   "h2",//name of the tag
    {
      id: "title",//attributes
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
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer
  root.render(container);
  