import React from "react";
import TodoItemsContainer from "../containers/todo-items-container.js";

class TodoList extends React.Component {
  createItems() {
    return this.props.items.map((item, index) => {
      return <TodoItemsContainer handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} key={item.name + index} item={item}/>
    })
  }
  render() {
    return (
      <div className="list">
        {this.createItems()}
      </div>

    );
  }
}

export default TodoList;
