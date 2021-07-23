import React, {  useState } from "react";

import Cookies from "js-cookie";

export default function  Login ()  {
   
  const [name,setname]=useState("");
  const [pass,setpass]=useState("");
  const [result,setresult]=useState("");


  const LoginProccess=async()=> {
    const response = await fetch("https://api.bymomani.com/token", {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      body:
        "grant_type=password&username=" +
         name +
        "&password=" +
         pass,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": "https://api.bymomanic.com/token",
      },
    });
    setresult( response.json());
    setTimeout(() => chechlogin(), 10);
  }
 const chechlogin=()=> {
    [result].map((authData) => {
      Cookies.set("Auth", authData.access_token);
      return window.location.reload();
    });
   }
 const ChangeName=(value)=> {
     setname(value);
  }
  const ChangePass=(value)=> {
setpass(value);  }

 
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
                onChange={(e) => ChangeName(e.target.value)}
                defaultValue={name}
              />
              <br />
              <b>Şifre</b>
              <div style={{ clear: "both" }}>
                <br />
              </div>
              <input
                type="password"
                className="form-control ltr_override input ext-input text-box ext-text-box"
                onChange={(e) => ChangePass(e.target.value)}
                defaultValue={pass}
              />
              <div style={{ textAlign: "center" }}>
                <br />
                <span
                  className="Transfer TransferBTN ms-Button ms-Button--primary"
                  onClick={() => LoginProccess()}
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