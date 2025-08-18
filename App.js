import React from "react";
import ReactDOM from "react-dom/client";
const jsxhandling=(
    <h1 className="heading">Anurag Yadav I am From sultanpur</h1>
)
const headingcomponent=()=>{
    return <h1>Functional component</h1>
}

const headingcomponent2=()=>{
    return(
        <h1>Functional Component</h1>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxhandling)