const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      listContacts: [],
    },
    actions: {
      getContacts: () => {
        fetch("https://playground.4geeks.com/contact/agendas/frank/")
          .then((response) => {
            if (response.status === 404) {
              return fetch(
                "https://playground.4geeks.com/contact/agendas/frank",
                {
                  method: "POST",
                }
              );
            }
            return response;
          })
          .then((response) => response.json())
          .then((result) => setStore({ listContacts: result.contacts }))
          .catch((error) => console.error(error));
      },
      addContact: (newContact) => {
        fetch("https://playground.4geeks.com/contact/agendas/frank/contacts", {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              return response.json().then((err) => {
                throw new Error(`Error ${response.status}: ${err.message}`);
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log("Contact added successfully:", data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.error("Error adding contact:", error);
          });
      },
      updateContact: (updatedContact) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/frank/contacts/${updatedContact.id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedContact),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              return response.json().then((err) => {
                throw new Error(`Error ${response.status}: ${err.message}`);
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log("Contact updated successfully:", data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.error("Error updating contact:", error);
          });
      },
      deleteContact: (id) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/frank/contacts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => {
            if (!response.ok) {
              return response.json().then((err) => {
                throw new Error(`Error ${response.status}: ${err.message}`);
              });
            }
            getActions().getContacts();
          })
          .catch((error) => {
            console.error("Error deleting contact:", error);
          });
      },
    },
  };
};

export default getState;
