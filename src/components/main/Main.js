import React from "react";

import cardsInfo from "../Users/cardsInfo";
import Card from "../card/Card";
import Actionsheader from "./actions-Header/actions-header";
import "../Css/Main.css";
import AddnewpersonWidget from "../popup/addnewpersonWidget";
import ShowdetailsWidget from "../popup/showdetailsWidget";

const MainContent = () => {
  // widget variables
  const [list] = React.useState(cardsInfo);
  const [filteredData, setFilteredData] = React.useState(list);
  const [isopenshowdetails, setisopenshowdetails] = React.useState(false);
  const [showedit, setshowedit] = React.useState(false);
  const [contact, setdetails] = React.useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    imgSrc: "https://via.placeholder.com/150/0000FF/ffffff",
    text: "",
  });

  // function that sort the filterdlist by name of contact
  function sortcontacts() {
    list.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  // function that show addnewpersonwidget
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

  // function that get a contact and add him to the filteredlist
  function add(newcontact, e) {
    if (checkifexists(newcontact.name)) {
      alert("name already exists");
    } else if (!/^[a-zA-Z]+$/.test(newcontact.name)) {
      alert(" name must be letters!!");
    } else if (
      newcontact.phone.length !== 10 ||
      !/^[0-9]+$/.test(newcontact.phone)
    ) {
      alert("number must be 10  only digits");
    } else {
      setFilteredData([...filteredData, newcontact]);
      onclickadd();
    }
  }

  // function that update details of speciefic contact
  function savedetails(newcontact, tempname) {

    if (checkifexists(newcontact)) {
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

      setFilteredData(newList);

      setshowedit((showedit) => !showedit);
    }
  }

  // function that get name of contact and delete them from the list
  function deletecontact(name) {
    setFilteredData(filteredData.filter((contact) => contact.name !== name));
  }

  // function that get contact and check if it already exist
  function checkifexists(contact) {
    for (var i = 0; i < filteredData.length; i++) {
      if (filteredData[i].name === contact.name) return true;
    }
    return false;
  }

 

  // function that delete all the contact in the book
  function deleteall() {
    setFilteredData([]);
  }

  // function that use details for a speciefic contact
  function showdetails(item) {

    setisopenshowdetails((isopenshowdetails) => !isopenshowdetails);

    setdetails({
      name: item.name,
      phone: item.phone,
      address: item.address,
      email: item.email,
      imgSrc: item.imgSrc,
      text: item.text,
    });
  }


  // function that do search by name and filter the contact list 
  function searchbyname(name) {
    const results = list.filter((contact) =>
      contact.name.toLowerCase().includes(name)
    );
    setFilteredData(results);
  }


  // function that close and open details window
  function closedetailswindow() {
    setisopenshowdetails((isopenshowdetails) => !isopenshowdetails);
  }


  // function that show editdetails window and set the values
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
        searchbyname={(name) => searchbyname(name)}
        onclickadd={() => onclickadd()}
        ondeleteall={() => deleteall()}
      />
      {isopenshowdetails ? (
        <ShowdetailsWidget
          contact={contact}
          onclose={() => closedetailswindow()}
        />
      ) : null}
      {isopenshowdetails || showedit ? <div className="overlay"></div> : null}
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
          {sortcontacts()}
          {filteredData.map((item) => (
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
