import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";
//import css
import "./css/index.css";
//import containers
import Header from "./components/header.js";
import TodoListContainer from "./containers/todo-list-container.js";
import FormContainer from "./containers/form-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <FormContainer />
          <TodoListContainer/>
        </div>
      </div>
    )

  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
