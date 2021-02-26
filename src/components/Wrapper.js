  
import React from "react";
//Component Wrapper
function Wrapper ({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>
    );
}
export default Wrapper;