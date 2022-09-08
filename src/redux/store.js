import { createStore } from "redux";

const initialStore = {
    contacts: {
          items: [],
          filter: ''
        }
        
      }
// addContact()

const reducer = (state = initialStore) => {
return state;
};

const store = createStore(reducer, window.___REDUX_DEVTOOLS_EXTENCION__&& Window.___REDUX_DEVTOOLS_EXTENCION__());

export default store;
