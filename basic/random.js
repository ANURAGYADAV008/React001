import React from "react";
import ReactDOM from "react-dom/client";
const jsxhandling=(
    <h1 className="heading">Anurag Yadav I am From sultanpur</h1>
)
const Headingcomponent=()=>{
    return <h1>Functional component</h1>
}
const Normalfun=function(){
    return(
        <h1>This is Normal Function 🚀🚀</h1>
    )
}
const number=1000;
const Headingcomponent2=()=>{
    return(
        <div>
            <h1>{number}</h1>
        <Headingcomponent/>
        <h1>Functional Component </h1>
        <Normalfun/>
        </div>
    )
        
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent2/>)