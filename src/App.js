import React, { Component } from "react";
import Cookies from "js-cookie";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      result: "",
      showButton: false,
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
    setTimeout(() => this.chechlogin(), 1000);
  }
  chechlogin() {
    [this.state.result].map((postData) => {
      Cookies.set("Auth", postData.access_token);
    });
    setTimeout(() => this.checkCookie(), 1000);
  }
  checkCookie() {
    if (Cookies.get("Auth")) {
      this.setState({ showButton: false });
      window.location.reload();
    } else {
      this.setState({ showButton: true });
    }
  }
  ChangeName(value) {
    this.setState({ name: value });
  }
  ChangePass(value) {
    this.setState({ pass: value });
  }

  render() {
    const { showButton } = this.state;

    return (
      <div>
        {showButton ? <Login /> : null}
        {showButton ? null : <MainPage />}
      
      </div>
    );
  }

  componentDidMount() {
    if (Cookies.get("Auth")) {
      this.setState({ showButton: false });
    } else {
      this.setState({ showButton: true });
    }
  }

  componentWillUnmount() {}
}

export default App;
