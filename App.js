import React from "react";
import ReactDOM  from "react-dom/client";

const HeadingComponent=()=>
(
    <h1>Hello From Functional Components</h1>
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);