import React from "react";
import ReactDOM from "react-dom/client";

//about JSX

const heading=<h1 id="title" key="h2">Namaste rohan3</h1>;
//or we can write like this 

const heading2=(
    <h1 id="123" key="h1">ROHAN ANAND</h1>
)

//react component 
//functional componenet
const Headercomponent =() => 
{
    return <h1>Namaste react functional component</h1>
}

const Headingcomponent2 =() =>
{
    return(
        <div>
            {heading2}
            <h1>Hello!</h1>
        </div>
    );
};
// this is known as component composition
const HeadingComponent3 = () =>
{
    return (
        <div>
            <Headingcomponent2/>
            <h1>Hey!</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3/>);//to render react functional component
//root.render(heading)//to render react element or jsx

//we can also  use react element under functional component

