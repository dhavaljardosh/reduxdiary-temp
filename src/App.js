import { useState } from "react";
import "./App.css";
import { store } from "./index";

function App() {
  const [contactName, setContactName] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="App">
      <div style={{ padding: "10px 80px 0px" }}>
        <div style={{ display: "flex" }}>
          <div className="box">
            <h1>Contacts</h1>
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
                className="btn-input"
                onChange={(e) => setContactName(e.target.value)}
              />
              <button className="bal-btn" type="submit">
                Add
              </button>
            </form>

            <div>
              {store.getState().contactsReducer.map((contact) => (
                <Contact details={contact} />
              ))}
            </div>
          </div>
          <div className="box">
            <h1>Notes</h1>
            <input
              className="btn-input"
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
            <div>
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
        <div className="delete-btn">Delete</div>
      </div>
    </div>
  );
}

function Note({ details }) {
  return (
    <div className="contact-detail">
      <div className="contact-name">{details.noteDescription}</div>
      <div>
        <div className="delete-btn">Delete</div>
      </div>
    </div>
  );
}

export default App;
