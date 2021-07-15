import React, { Component } from "react";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          className={
            this.props.MenuStatu ? "BasePage-leftNav-Container" : "hide"
          }
        >
          <nav className="od-BasePage-leftNav">
            <div className="LeftPane LeftPane--hasNotifications">
              <div className="LeftPane-sections">
                <div className="LeftNav">
                  <div className="LeftNav-linkArea">
                    <span className="LeftNav-subLink ms-font-m" href="#">
                      <span className="LeftNav-fadient">
                        <span
                          onClick={() => this.props.CreateArticelShow()}
                          className="LeftNav-linkText NewArt padd10"
                        >
                          <br></br>
                          <span className="padd10">Yeni Sipariş Oluştur</span>
                        </span>
                      </span>
                    </span>
                    <div className="LeftNav-linkGroupContainer">
                      <div className="LeftNav-linkGroup is-expanded">
                        <div className="LeftNav-subLinksClip">
                          <div className="LeftNav-subLinks">
                            <a
                              className="LeftNav-subLink ms-font-m"
                              href="iplikler.aspx"
                            >
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  İplikler
                                </span>
                              </span>
                            </a>
                            <a
                              className="LeftNav-subLink ms-font-m "
                              href="firmalar.aspx"
                            >
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  Firmalar
                                </span>
                              </span>
                            </a>
                            <a className="LeftNav-subLink ms-font-m" href="/">
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  Siparişler
                                </span>
                              </span>
                            </a>
                            <a
                              className="LeftNav-subLink ms-font-m"
                              href="irsaliyeler.aspx"
                            >
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  İrsaliyeler
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default LeftNav;
