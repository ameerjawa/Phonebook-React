import React from "react";

import cardsInfo from "./cardsInfo";
import Card from "../card/Card";
import Actionsheader from "./actions-Header/actions-header";
import "../Css/Main.css";
import AddnewpersonWidget from "../popup/addnewpersonWidget";

const MainContent = (props) => {
  const [list, setList] = React.useState(cardsInfo);
  const [isActive, setisActive] = React.useState(false);
  const [showedit, setshowedit] = React.useState(false);
  const [contact, setdetails] = React.useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    imgSrc: "https://via.placeholder.com/150/0000FF/ffffff",
    text: "",
  });

  const onclickadd = () => {
    setdetails({
      name: "",
      phone: "",
      address: "",
      email: "",
      imgSrc: "",
      text: "",
    });
    setshowedit((showedit) => !showedit);
  };

  function add(newcontact, e) {
    if (checkifexists(newcontact.name)) {
      alert("name already exists");
    } else {
      setList([...list, newcontact]);
      onclickadd();
    }
  }

  function savedetails(newcontact, tempname) {
    //console.log(editcheckifexists(newcontact));

    if (true) {
      alert("name already exists");
    } else {
      const newList = list.map((item) => {
        if (item.name === tempname) {
          const updatedItem = {
            ...item,

            name: newcontact.name,
            address: newcontact.address,
            email: newcontact.email,
            description: newcontact.description,
            phone: newcontact.phone,
          };

          return updatedItem;
        }

        return item;
      });

      setList(newList);

      setshowedit((showedit) => !showedit);
    }
  }

  function deletecontact(name) {
    setList(list.filter((contact) => contact.name !== name));
  }

  /**************
   *
   *  problem with this function down below
   *
   */

  /*
  function editcheckifexists(contact){

    var index=getindex(contact.name);
    

    for (var i=0;i<list.length;i++){

      if(list[i].name==contact.name && i==index)
              return false;
      else if(list[i].name==contact.name)
                        return true        
      
         
           


    }
    return false;
  
   
  }
*/
  function checkifexists(name) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].name == name) return true;
    }
    return false;
  }

  function deleteall() {
    setList([]);
  }
  function showdetails(item) {
    setisActive((isActive) => !isActive);

    setdetails({
      name: item.name,
      phone: item.phone,
      address: item.address,
      email: item.email,
      imgSrc: item.imgSrc,
      text: item.text,
    });
  }

  function closedetailswindow() {
    setisActive((isActive) => !isActive);
  }

  function getindex(name) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].name == name) return i;
    }

    return 0;
  }

  function editdetails(item) {
    onclickadd();

    setdetails({
      name: item.name,
      phone: item.phone,
      address: item.address,
      email: item.email,
      imgSrc: item.imgSrc,
      text: item.text,
    });
  }

  var index = 0;

  return (
    <article className="main">
      <Actionsheader
        onclickadd={() => onclickadd()}
        ondeleteall={() => deleteall()}
      />
      {isActive ? (
        <div className="addnewpersonForm">
          <div className="xbutton">
            <button onClick={() => closedetailswindow()}>X</button>
          </div>

          <img src={contact.imgSrc}></img>
          <p>{contact.name}</p>
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.text}</p>
        </div>
      ) : null}
      {isActive || showedit ? <div className="overlay"></div> : null}
      {showedit ? (
        <AddnewpersonWidget
          onedit={(newcontact, tempname) => savedetails(newcontact, tempname)}
          details={contact}
          active={showedit}
          oncancel={onclickadd}
          onadd={(newcontact, e) => add(newcontact, e)}
        />
      ) : null}

      {list.length > 0 ? (
        <div className="contacts">
          {list.map((item) => (
            <Card
              oneditdetails={() => editdetails(item)}
              onshowdetails={() => showdetails(item)}
              ondelete={(name) => deletecontact(name)}
              details={item}
              key={index++}
            />
          ))}{" "}
          {/* {cards}  array - each element with unique key */}
        </div>
      ) : (
        <div className="nocontactmessage">
          <h1>no contact found</h1>
        </div>
      )}
    </article>
  );
};

export default MainContent;
