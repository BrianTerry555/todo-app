import React from "react";


import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
import TodoList from "../components/todo-list-component.js";

class TodoListContainer extends React.Component {
  componentWillMount() {
    this.props.loadInfo();
  }

  render() {
    return (
      <TodoList handleUpdate={this.props.updateInfo} handleRemove={this.props.removeInfo} items={this.props.items}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
