import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT": {
      let newState = [...state, { name: action.name }];
      return newState;
    }

    case "DELETE_CONTACT": {
      let newState = [...state];
      newState.pop();
      return newState;
    }

    default:
      console.log("UNKNOWN");
      return state;
  }
};

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      let newState = [...state, { noteDescription: action.noteDescription }];
      return newState;
    }

    case "DEPOSIT_MONEY": {
      let newState = [...state, { name: action.name }];
      return newState;
    }

    default:
      console.log("UNKNOWN");
      return state;
  }
};

const reducer = combineReducers({ contactsReducer, notesReducer });

export const store = createStore(reducer, {});
console.log(store.getState());
const render = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);
