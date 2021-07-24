import React from "react";
export default function LeftNav({ CreateArticelShow, MenuStatu }) {
  return (
    <nav className={MenuStatu ? "od-BasePage-leftNav" : "hide"}>
      <div className="LeftNav-fadient text-center">
        <br />
        <span className="Transfer TransferBTN ms-Button ms-Button--primary">
          <span
            onClick={() => CreateArticelShow()}
            className="transfersavetext"
          >
            + Sipariş Oluştur
          </span>
        </span>
      </div>
      <div className="LeftNav-linkGroupContainer">
        <a className="LeftNav-subLink ms-font-m activelink" href="/">
          <span className="LeftNav-fadient">
            <i data-icon-name="Inbox" className="controlicon">
              
            </i>
            Siparişler
          </span>
        </a>
        <a className="LeftNav-subLink ms-font-m " href="firmalar.aspx">
          <span className="LeftNav-fadient">
            <i data-icon-name="Archive" className="controlicon">
              
            </i>
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
  );
}
