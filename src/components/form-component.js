import React from "react";



class Form extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <input className="form-control" onChange={(event) => {this.props.handleChange("title", event);}} value={this.props.input.title} placeholder="Item to do"/>
            </div>
            <div className="col-md-3">
              <input className="form-control" onChange={(event) => {this.props.handleChange("desc", event);}} value={this.props.input.desc} placeholder="Description"/>
            </div>
            <div className="col-md-3">
              <input className="form-control" type="number" onChange={(event) => {this.props.handleChange("price", event);}} value={this.props.input.price} placeholder="Price"/>
            </div>
            <div className="col-md-3">
              <button className="form-control btn btn-danger btn-sm" onClick={() => {this.props.handleAdd(this.props.input);}}>Submit</button>
            </div>
          </div>
        </div>
    )
  }
}
export default Form;
