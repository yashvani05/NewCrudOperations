import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import MyHome from "../Home/MyHome";

const AddPost = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
 

  const handleSubmit = (e) => {
 
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null

    );
   

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }
    if(phone.length !=10){
      return toast.error("no is too short!");
    }
   
    if(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(!email)){
      return toast.error("email is wrong !");
    }

    
    

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
      
    };

    addContact(data);
    console.log("data",data)
    toast.success("Contact added successfully!!");
    console.log(data); 
  };

  return (
    <>
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">contact form</h1>
      <div className="row">
        <div className="col-md-6 col-lg-11 col-12 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="name" className="form-label">FullName:</label>

            <div className="  mr-3 ">

           
              <input
                className="form-control "
                type="text"
                autoComplete="off"
                name="Firstname"
                placeholder="Full name"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <label htmlFor="MyEmail" className="form-label">Email address:</label>

            <div className="  mr-3">
              <input
                className="form-control"
                type="email"
                autoComplete="off"
                name="Myemail"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="MyEmail" className="form-label">phone:</label>

            <div className=" mr-3 ">
              <input
                className="form-control"
                type="number"
               name="Myphone"
               autoComplete="off"
                placeholder="Phone"
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className="">

              <input
                className="btn btn-block btn-success"
                type="submit"
                value="submit"
              />
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <MyHome></MyHome>

</>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
