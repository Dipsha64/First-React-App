import React from "react";

//FUNCTIONAL COMPONENT
// In JSX need to add "classname" instad of "class". class is used in javascipt as "classes"
const header = () =>{
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
            </div>
        </div>
    );
}

export default header;