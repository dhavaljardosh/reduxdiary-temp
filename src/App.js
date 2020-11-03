import { useState } from "react";
import "./App.css";
import { store } from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook,faBookReader, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [contactName, setContactName] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="App">
      <div style={{ padding: "10px 80px 0px" }}>
        <div style={{ display: "flex" }}>
          <div className="box">
            <h2>
            <FontAwesomeIcon icon={faAddressBook} />
            <span style ={{paddingLeft: "12px"}}>Contacts</span></h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!contactName) {
                  alert("Contact is required");
                  return;
                }
                store.dispatch({ type: "ADD_CONTACT", name: contactName });
              }}
            >
              <input
                className="btn-input" placeholder="Type to Add Contacts"
                onChange={(e) => setContactName(e.target.value)}
              />
              <button className="bal-btn" type="submit">
                Add
              </button>
            </form>

            <div className="contact-details-box">
              {store.getState().contactsReducer.map((contact) => (
                <Contact details={contact} />
              ))}
            </div>
          </div>
          <div className="box">
            <h2>
            <FontAwesomeIcon icon={faBookReader} /> 
            <span style ={{paddingLeft: "12px"}}>Notes</span></h2>
            <input
              className="btn-input" placeholder="Type to Add Notes"
              onChange={(e) => setNote(e.target.value)}
            />
            <button
              className="bal-btn"
              onClick={() => {
                if (!note) {
                  alert("Contact is required");
                  return;
                }
                store.dispatch({ type: "ADD_NOTE", noteDescription: note });
              }}
            >
              Add
            </button>
            <div  className="contact-details-box">
              {store.getState().notesReducer.map((note) => (
                <Note details={note} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact({ details }) {
  return (
    <div className="contact-detail">
      <div className="contact-name">{details.name}</div>
      <div>
        <div className="delete-btn">
        <FontAwesomeIcon icon={faTrashAlt} /> 
        </div>
      </div>
    </div>
  );
}

function Note({ details }) {
  return (
    <div className="contact-detail">
      <div className="contact-name">{details.noteDescription}</div>
      <div>
        <div className="delete-btn">
        <FontAwesomeIcon icon={faTrashAlt} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
