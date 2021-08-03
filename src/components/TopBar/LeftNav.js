import React from "react";
import SevkConsumer from "../../store/context";
import CreateIcon from "../Tools/CreateIcon";
import BlueButton from "../Tools/BlueButton";
export default function LeftNav() {
  return (
    <SevkConsumer>
      {(value) => {
        const { dispatch, Menu } = value;
        const CreateArticelShow = () => {
          dispatch({ type: "toggleCreateArticel", payload: true });
        };
        return Menu ? (
          <nav className="od-BasePage-leftNav">
            <div className="LeftNav-fadient text-center">
              <br />
              <BlueButton click={CreateArticelShow} text=" + Sipariş Oluştur" />
            </div>
            <div className="LeftNav-linkGroupContainer">
              <a className="LeftNav-subLink ms-font-m activelink" href="/">
                <span className="LeftNav-fadient">
                  <CreateIcon symbol="" iconname="Inbox" />
                  Siparişler
                </span>
              </a>
              <a className="LeftNav-subLink ms-font-m " href="firmalar.aspx">
                <span className="LeftNav-fadient">
                  <CreateIcon symbol="" iconname="Archive" />
                  Firmalar
                </span>
              </a>
              <a className="LeftNav-subLink ms-font-m" href="iplikler.aspx">
                <span className="LeftNav-linkText">İplikler</span>
              </a>
              <a className="LeftNav-subLink ms-font-m" href="irsaliyeler.aspx">
                <span className="LeftNav-linkText">İrsaliyeler</span>
              </a>
            </div>
          </nav>
        ) : null;
      }}
    </SevkConsumer>
  );
}