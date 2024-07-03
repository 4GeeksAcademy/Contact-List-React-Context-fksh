import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
  const { actions, store } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const contactToEdit = store.listContacts.find(
        (item) => item.id === parseInt(id)
      );
      if (contactToEdit) {
        setContact(contactToEdit);
      }
    }
  }, [id, store.listContacts]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...contact,
      agenda_slug: "frank",
    };
    if (id) {
      actions.updateContact(newContact);
    } else {
      actions.addContact(newContact);
    }
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>{id ? "Update Contact" : "Add a new contact"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Save"}
        </button>
        <a href="/" className="btn btn-link">
          Return to contacts
        </a>
      </form>
    </div>
  );
};
