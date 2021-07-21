import React, { Component } from "react";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={this.props.MenuStatu ? "BasePage-leftNav-Container" : "hide"}
      >
        <nav className="od-BasePage-leftNav">
          <div className="LeftPane LeftPane--hasNotifications">
            <div className="LeftPane-sections">
              <div className="LeftNav">
                <div className="LeftNav-linkArea">
                  <span className="LeftNav-subLink ms-font-m" href="#">
                    <div className="LeftNav-fadient text-center">
                      <br />
                      <span className="Transfer TransferBTN ms-Button ms-Button--primary">
                        <span
                          onClick={() => this.props.CreateArticelShow()}
                          className="transfersavetext"
                        >
                          + Sipariş Oluştur
                        </span>
                      </span>
                    </div>
                  </span>
                  <div className="LeftNav-linkGroupContainer">
                    <div className="LeftNav-linkGroup is-expanded">
                      <div className="LeftNav-subLinksClip">
                        <a
                          className="LeftNav-subLink ms-font-m activelink"
                          href="/"
                        >
                          <span className="LeftNav-fadient">
                            <span className="LeftNav-linkText" id="">
                              <i
                                data-icon-name="Inbox"
                                aria-hidden="true"
                                className="controlicon"
                              >
                                
                              </i>
                              Siparişler
                            </span>
                          </span>
                        </a>
                        <div className="LeftNav-subLinks">
                          <a
                            className="LeftNav-subLink ms-font-m "
                            href="firmalar.aspx"
                          >
                            <span className="LeftNav-fadient">
                              <span className="LeftNav-linkText" id="">
                                <i
                                  data-icon-name="Archive"
                                  aria-hidden="true"
                                  className="controlicon"
                                >
                                  
                                </i>
                                Firmalar
                              </span>
                            </span>
                          </a>
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
    );
  }
}

export default LeftNav;
