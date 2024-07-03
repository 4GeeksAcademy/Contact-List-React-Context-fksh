import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleUpdate = (contact) => {
    navigate(`/update-contact/${contact.id}`, { state: contact });
  };

  console.log("listContacts:", store.listContacts);

  return (
    <div>
      {store.listContacts.length > 0
        ? store.listContacts.map((item) => {
            return (
              <ContactCard
                key={item.id}
                name={item.name}
                address={item.address}
                phone={item.phone}
                email={item.email}
                onUpdate={() => handleUpdate(item)}
                onDelete={() => actions.deleteContact(item.id)}
              />
            );
          })
        : null}
    </div>
  );
};
