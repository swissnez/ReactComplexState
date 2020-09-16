import React, { useState } from "react";

function App() {
  // contact = var & setContact = ()
  const [contact, setContact] = useState({ // Object here
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const {name,value} = event.target; // declare {} from event obj
    
    setContact(prevValue=>{
      return {
      /* fName: ("fName" === name) ? value: contact.fName,
      lName: ("lName" === name) ? value: contact.lName,
      email: ("email" === name) ? value: contact.email */
        ...prevValue,
        [name]:value
      }
    });

  }


 
  console.log((contact.fName) && (contact.lName) && (contact.email) ? contact:"");
 
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onChange={handleChange}>
        <input name="fName" placeholder="First Name"  />
        <input name="lName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
        <button method="post" action="/submitRoute" name="myButton">Submit</button>
      </form>
    </div>
  );
}

export default App;
