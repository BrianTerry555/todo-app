import React from "react";
import TodoItem from "../components/todo-items-component.js";
import autoBind from "react-autobind";

class TodoItemContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        ...this.props.item,
        edit: false
      };
      autoBind(this)
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    return (
      <TodoItem input={this.state} toggleEdit={this.toggleEdit} handleUpdate={this.props.handleUpdate} handleChange={this.handleChange} handleRemove={this.props.handleRemove} item={this.props.item}/>
    )
  }
}

export default TodoItemContainer;
