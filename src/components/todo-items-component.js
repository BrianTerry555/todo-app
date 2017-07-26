import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="item">
        <h3 style={{display: this.props.input.edit ? "none":"inherit"}}>{this.props.item.title}</h3>
        <input style={{display: this.props.input.edit ? "inherit":"none"}} onChange={(event) => {this.props.handleChange("title", event);}} value={this.props.title}/>

        <p style={{display: this.props.input.edit ? "none":"inherit"}}>{this.props.item.description}</p>
        <input style={{display: this.props.input.edit ? "inherit":"none"}} onChange={(event) => {this.props.handleChange("description", event);}} value={this.props.description}/>

        <p style={{display: this.props.input.edit ? "none":"inherit"}}>{this.props.item.price}</p>
        <input style={{display: this.props.input.edit ? "inherit":"none"}} onChange={(event) => {this.props.handleChange("price", event);}} value={this.props.price}/>

        <button onClick={()=>{this.props.handleRemove(this.props.item._id);}} className="delete">X</button>
        <button onClick={()=>{this.props.toggleEdit();}} style={{display: this.props.input.edit ? "none":"inherit"}} className="edit">Edit</button>
        <button onClick={()=>{this.props.handleUpdate(this.props.item._id, this.props.input); this.props.toggleEdit();}} style={{display: this.props.input.edit ? "inherit":"none"}} className="save">Save</button>
      </div>
    )
  }
}

export default TodoItem;
