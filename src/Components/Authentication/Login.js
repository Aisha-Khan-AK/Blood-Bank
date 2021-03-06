import React, { Component } from "react";
import all from "../../Config/Fire";
import style from "./Login.module.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Card, Typography, TextField, Grid, Button } from "@material-ui/core";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  //   =============Login method==================//
  login(e) {
    e.preventDefault();

    all.fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        // console.log(u);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  //   =========Signup Method========/
  signup(e) {
    e.preventDefault();
    all.fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        // console.log(u);
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  //   ========Submit Method=========//
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="d-flex align-center justify-content-center mt-5 p-5">
        <Card variant="outlined" className={style.card}>
          <Typography gutterBottom color="textSecondary">
            <h1>Login</h1>
          </Typography>
          <Form>
            <FormGroup>
              <TextField
                type="email"
                id="email"
                value={this.state.email}
                label="Email"
                onChange={this.handleChange}
                name="email"
                helperText="@Example : John@abc.com"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                type="password"
                label="Password"
                name="password"
                value={this.state.password}
                id="password"
                onChange={this.handleChange}
                // onChange={(eve) =>
                //   this.setState({ password: eve.target.value })
                // }
                helperText="@Example : abcd1234@_"
              />
            </FormGroup>
            <br />
            <br />

            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={this.login}
              type="login"
              value="login"
            >
              Login
            </Button>
            <Button
              color="primary"
              type="signin"
              value="signin"
              onClick={this.signup}
              className={style.btnSign}
            >
              <i class="fas fa-user-plus"></i> Register
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
//======================================Redux Code-================================

export default Login;
