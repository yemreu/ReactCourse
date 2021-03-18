import alertify from "alertifyjs";
import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "", city: ""};

  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value});
  };

  onSubmitHandler = (event) => {
      event.preventDefault();
      alertify.success(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input type="text" name="userName" onChange={this.onChangeHandler}/>
          <h3>User name is {this.state.userName}.</h3>
          <h3>City</h3>
          <input type="text" name="city" onChange={this.onChangeHandler}/>
          <h3>City is {this.state.city}.</h3>
          <input type="submit" value="save" />
        </form>
      </div>
    );
  }
}
