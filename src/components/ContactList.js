import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    console.log("props..",props);

    const renderContactList = props.contact.map((val)=>{
        return (
            <ContactCard val = {val}/>
        )
    })
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;