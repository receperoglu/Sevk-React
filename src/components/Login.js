import React, { Component } from "react";

import Cookies from "js-cookie";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      result: "",
    };

    this.LoginProccess = this.LoginProccess.bind(this);
  }

  async LoginProccess() {
    const response = await fetch("https://api.recep.space/token", {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      body:
        "grant_type=password&username=" +
        this.state.name +
        "&password=" +
        this.state.pass,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": "https://api.recep.space/token",
      },
    });
    this.setState({ result: await response.json() });
    setTimeout(() => this.chechlogin(), 10);
  }
  chechlogin() {
    [this.state.result].map((postData) => {
      Cookies.set("Auth", postData.access_token);
      window.location.reload();
    });
  }
  ChangeName(value) {
    this.setState({ name: value });
  }
  ChangePass(value) {
    this.setState({ pass: value });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./back.svg)",
          height: "100vh",
          marginTop: "0px",
        }}
      >
        <span></span>
        <br />
        <br />
        <div
          style={{
            width: "350px",
            margin: "0 auto",
          }}
          className="effect"
        >
          <div>
            <div
              id="Page"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h2>Giriş Yap</h2>
              </div>
              <b>E-posta</b>{" "}
              <div style={{ clear: "both" }}>
                <br />
              </div>
              <input
                type="email"
                className="form-control ltr_override input ext-input text-box ext-text-box"
                onChange={(e) => this.ChangeName(e.target.value)}
                defaultValue={this.state.name}
              />
              <br />
              <b>Şifre</b>
              <div style={{ clear: "both" }}>
                <br />
              </div>
              <input
                type="password"
                className="form-control ltr_override input ext-input text-box ext-text-box"
                onChange={(e) => this.ChangePass(e.target.value)}
                defaultValue={this.state.pass}
              />
              <div style={{ textAlign: "center" }}>
                <br />
                <span
                  className="Transfer TransferBTN ms-Button ms-Button--primary"
                  onClick={() => this.LoginProccess()}
                >
                  Giriş Yap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}
}

export default Login;
