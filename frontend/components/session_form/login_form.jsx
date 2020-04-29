import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.setState({
        email: "",
        password: ""
      }))
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map( (error, idx) => {
          return (
            <li 
              className="errors"
              key={idx}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="login-page">
          <div className="login-img">
            Image Here.
          </div>

          <form 
            className="login-form"
            onSubmit={this.handleSubmit}
          >

            <h2>Welcome To Splitwise</h2>
            {this.renderErrors() ? this.renderErrors() : ""}

            <div className="login-form-label">
              Email address
              <input 
                type="text"
                className="login-form-input"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
            </div>

            <div className="login-form-label">
              Password
              <input 
                type="password"
                className="login-form-input"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </div>

            <input 
              type="submit"
              className="login-button"
              value={this.props.formType}
            />
          </form>

        </div>

      </div>

    )
  }
}

export default LoginForm;