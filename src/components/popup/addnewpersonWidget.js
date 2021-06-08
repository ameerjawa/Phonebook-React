import React,{useState} from 'react'








function AddnewpersonWidget() {





    return (
        <div className="addnewpersonForm" id="enablemode">

<form id="addnewperson"  >
        <h1 id="headerOfForm">add new person</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" pattern="[A-Z][a-z]{3-10}" required />
        <label for="telephone">Telephone:</label>
        <input type="text" id="telephone" required />
        <label for="address" pattern="[A-Z][a-z]{3-10}" title="must enter first big letter then small letter">Address:</label>
        <input type="text" id="address" />
        <label for="email">Email:</label>
        <input type="text" id="email" />
        <label for="description">Description:</label>
        <input class="description" type="text" id="description" />

        <input
          class="btnadd"
          id="addnewpersonbtn"
          type="Submit"
          name="add"
          value="Add"
        />
        <input
          class="btnsave"
          id="saveeditcontact"
          type="Submit"
          name="save"
          value="save"
        />
        <input
          class="btncancel"
          id="cancelbtn"
          name="cancel"
                   value="Cancel"
        />
      </form>
            
        </div>
    )
}

export default AddnewpersonWidget
