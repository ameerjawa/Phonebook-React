import React from "react";
import "../Css/Showdetails.css";

function ShowdetailsWidget(props) {
  const contact = props.contact;
  const closedetailswindow = props.onclose;

  return (
    <div className="addnewpersonForm">
      <div className="xbutton">
        <button onClick={() => closedetailswindow()}>X</button>
      </div>

      <img alt="H" src={contact.imgSrc}></img>
      <p>{contact.name}</p>
      <p>{contact.address}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.text}</p>
    </div>
  );
}

export default ShowdetailsWidget;
