import React from "react";
import Form from "../components/form-component.js"


import autoBind from "react-autobind";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      price: ""
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Form handleAdd={this.props.addInfo} handleChange={this.handleChange} input={this.state}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
