import React from "react";
import cardsInfo from "../Users/cardsInfo";

import "../Css/Addnewpersonwidget.css";

class AddnewpersonWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsIn: cardsInfo,
      name: props.details.name != null ? props.details.name : "",
      phone: props.details.phone != null ? props.details.phone : "",
      address: props.details.address != null ? props.details.address : "",
      email: props.details.email != null ? props.details.email : "",
      descreption:
        props.details.descreption != null ? props.details.descreption : "",
      errormessage: "",
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit = (e, tempname) => {
    e.preventDefault();

    var newContact = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
      imgSrc: "https://via.placeholder.com/150/0000FF/ffffff",
      text: this.state.descreption,
    };

    tempname === ""
      ? this.props.onadd(newContact, e)
      : this.props.onedit(newContact, tempname);
  };

  render() {
    return this.props.active ? (
      <div className="addnewpersonForm">
        <form
          id="addnewperson"
          onSubmit={(e) => {
            this.handleSubmit(e, this.props.details.name);
          }}
        >
          <h1 id="headerOfForm">
            {this.props.details.name === "" ? "add " : "edit "} new person{" "}
          </h1>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={this.state.name}
            type="text"
            id="name"
            onChange={this.myChangeHandler}
            required
          />
          <label htmlFor="telephone">Telephone:</label>
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.myChangeHandler}
            type="text"
            id="telephone"
            required
          />
          <label
            htmlFor="address"
            title="must enter first big letter then small letter"
          >
            Address:
          </label>
          <input
            name="address"
            value={this.state.address}
            onChange={this.myChangeHandler}
            type="text"
            id="address"
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.myChangeHandler}
            type="text"
            id="email"
          />
          <label htmlFor="description">Description:</label>
          <input
            name="descreption"
            value={this.state.descreption}
            onChange={this.myChangeHandler}
            className="description"
            type="text"
            id="description"
          />

          <input
            className="btnadd"
            id="addnewpersonbtn"
            type="Submit"
            name="add"
            defaultValue={this.props.details.name === "" ? "Add" : "Save"}
          />

          <input
            className="btncancel"
            onClick={this.props.oncancel}
            id="cancelbtn"
            name="cancel"
            defaultValue="cancel"
          />
        </form>
      </div>
    ) : null;
  }
}

export default AddnewpersonWidget;
