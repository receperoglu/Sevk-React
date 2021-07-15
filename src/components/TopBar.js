import React from "react";
import "../css/Table.css";

export default function TopBar(props) {
  const PrintNow = () => {
    //window.print();
    var PrintUrl =
      "https://recep.space/abi/js/PrintOrder.html?ArticelId=" +
      props.ArticelId +
      "&CorpName=" +
      props.CorpName;
    const newWindow = window.open(PrintUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="od-BasePage-suiteNav od-BasePage-suiteNav--reactShell">
      <div className="od-SuiteNav od-SuiteNav-react">
        <span className="od-SuiteNav-reactShell-diamond Icon css-41"></span>
        <div className="_3amH8O5zhIe06K_vFGTuae  _242EiqwUQtpcOkmbnzLL3d   ThemeBase o365cst o365spo o365sx-navbar o365sx-search">
          <div
            onClick={() => props.MenuToggler()}
            className="_2kc0c9nP-qti6fefMCFonk"
          >
            <div className="Mm _3FLRgiFtGLuaFraVW49btd">
              <button
                className="riRHDuln2VrIU8dSpyxJ2 o365sx-button  o365sx-waffle"
                type="button"
              >
                <span class="menuicons ms-Icon--WaffleOffice365 ms-icon-font-size-16"></span>
              </button>
            </div>
            <div onClick={() => props.MenuToggler()} className="Mobiles  ">
              <button
                className="MenuSlicer MainMenu o365sx-button o365sx-highContrastButton"
                type="button"
              >
                asdasd
                <span class="menuicons ms-Icon--WaffleOffice365 ms-icon-font-size-16"></span>
              </button>
            </div>
            <div onClick={() => props.MenuToggler()} className="">
              <span className="_3oXfC-h0HSTdxztdO_F4_A o365sx-appName o365cs-o365logo Mm _3FLRgiFtGLuaFraVW49btd _3odjF_1ZcGTHwuaL30ia2J"></span>
              <a className="m5-kje_HEdyN8cPiq-Sp0 o365sx-appName" href="/">
                <span className="_1yZIUhrPA4l6_cQWV3l3O- o365sx-appName">
                  Sevk
                </span>
              </a>
            </div>
          </div>
          <div className="QiA1DX84m4l79Lx_jjDtW">
            <div className="MobileMenuMore Mobiles Mm ">
              <button className="MenuSlicer o365sx-button" type="button">
                <span className="Icon--More Icon-font-size-16"></span>
              </button>
            </div>
            <div className=" MobileCommandOptions hide">
              <button
                className="riRHDuln2VrIU8dSpyxJ2 ShellFabricMDL2Icons o365sx-button"
                type="button"
              >
                <div className="ThemeBase">
                  <span></span>
                </div>
              </button>
            </div>
            <div className="Mobiles MobileCommandOptions hide">
              <button
                className="riRHDuln2VrIU8dSpyxJ2 o365sx-waffle"
                type="button"
              >
                <span className="Icon--WaffleOffice365 Icon-font-size-16"></span>
              </button>
            </div>
            <div className="_3T6iq7Mut8tUPtyv-A9S6l">
              <button
                className="MenuSlicer o365sx-button o365sx-highContrastButton"
                type="button"
              >
                <span
                  data-html="true"
                  data-toggle="popover"
                  className="Icon--Settings  Icon-font-size-16"
                ></span>
              </button>
            </div>
            <div className="_3T6iq7Mut8tUPtyv-A9S6l">
              <button
                className="MenuSlicer o365sx-button o365sx-highContrastButton"
                type="button"
              >
                <span className="Icon--Help Icon-font-size-16"></span>
              </button>
            </div>
            <div className="Mobiles CloseMobileCommandOptions hide Mm MobileCommandOptions">
              <button className="MenuSlicer o365sx-button" type="button">
                <span className="Icon--ChromeClose  Icon-font-size-16"></span>
              </button>
            </div>
            <div className="">
              <button
                className="riRHDuln2VrIU8dSpyxJ2 _2aUXQf-eONv8YsEl8vjt5t o365sx-button o365sx-highContrastButton"
                type="button"
              >
                <div className="EVtx536X5dUgzXHm2qXs">
                  <div className="_3OhYOe1wotB0LNRbjEDfz9 _3FLRgiFtGLuaFraVW49btd">
                    <span>sdf</span>
                  </div>
                  <div className="riRHDuln2VrIU8dSpyxJ2 _3yeneo3QKaGGnZNVFmaZCF">
                    <div className="_1MAj-oaYBNuu8HgwBH0d6a">
                      <div className="_1fH43YlMAnPCr8RI9qH98P">
                        <div className="M_s6agPZfWvz2OH8iRoGk">
                          <span>R</span>
                        </div>
                        <div className="_14ggU2yZvNol5U91gfmYQA">
                          <img alt="R" title="Resim Bulunamadı" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="od-BasePage-topBar">
        <div className="od-TopBar">
          <div
            className={
              props.isShowTopBar
                ? "opaq0 hide"
                : "od-TopBar-item od-TopBar-search od-BasePage-search fleft"
            }
          >
            <div className="od-Search">
              <div className="od-SearchBox">
                <span
                  style={{ width: "200px" }}
                  className="od-SearchBox-search"
                >
                  <input
                    className="SearchInput"
                    type="text"
                    placeholder="Her şeyi ara"
                    name="Her şeyi ara"
                  />
                  <span className="od-SearchBox-iconWrapper od-SearchBox-iconArrowWrapper">
                    <span className="Icon SearchIcon css-42"></span>
                  </span>
                </span>

                <span className="od-SearchBox-iconWrapper od-SearchBox-iconSearchWrapper">
                  <span className="Icon SearchIcon css-43"></span>
                </span>
                <span className="od-SearchBox-iconWrapper  od-SearchBox-iconClearWrapper">
                  <i
                    data-icon-name="Cancel"
                    role="presentation"
                    aria-hidden="true"
                    className="ms-Button-icon delsearch icon-73"
                  >
                    
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="od-TopBar-item od-TopBar-commandBar od-BasePage-commandBar">
            <div className={props.isShowTopBar ? "fright" : "opaq0 hide"}>
              <div className="col-md-6 padd0 ">
                <div>
                  <div className="ms-FocusZone css-74 ms-CommandBar root-79">
                    <div className="ms-OverflowSet TopBarCommandLeft primarySet-82">
                      <div className="ms-OverflowSet-item  TopBarObject ">
                        <button
                          type="button"
                          onClick={() => {
                            props.toggleView();
                          }}
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div
                            className="ms-Button-flexContainer flexContainer-46"
                            data-automationid="splitbuttonprimary"
                          >
                            <i
                              data-icon-name="FullScreen"
                              aria-hidden="true"
                              className="ms-Button-icon icon-144s"
                            >
                              
                            </i>
                          </div>
                        </button>
                      </div>
                      <div
                        id="commandnew"
                        className="ms-OverflowSet-item  TopBarObject hide"
                      >
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="Add"
                              role="presentation"
                              className="ButtonIcon icon-93"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Yeni
                              </div>
                            </div>
                            <i
                              data-icon-name="ChevronDown"
                              className="ms-Button-menuIcon menuIcon-94"
                            >
                              
                            </i>
                          </div>
                        </button>
                      </div>
                      <div
                        onClick={() => props.NewProductShow()}
                        className="ms-OverflowSet-item commandadd SubTools TopBarObject"
                      >
                        <button
                          type="button"
                          name="Karşıya Yükle"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85"
                          data-is-focusable="true"
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              role="presentation"
                              data-icon-name="Add"
                              className="ButtonIcon icon-93"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Ekle
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="ms-OverflowSet-item commandprint TopBarObject SubTools ">
                        <button
                          onClick={() => {
                            PrintNow();
                          }}
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="Print"
                              role="presentation"
                              aria-hidden="true"
                              className="ms-Button-icon icon-144s"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Yazdır
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div
                        onClick={() => props.LayoutRightShow()}
                        className="SubTools commandshare ms-OverflowSet-item TopBarObject "
                      >
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="Share"
                              role="presentation"
                              aria-hidden="true"
                              className="ms-Button-icon Paylas"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Paylaş
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="SubTools commandnotes ms-OverflowSet-item TopBarObject">
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="StackIndicator"
                              role="presentation"
                              aria-hidden="true"
                              className="nott fleft icon-68"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Notlar
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="SubTools commandedit ms-OverflowSet-item TopBarObject ">
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="Edit"
                              role="presentation"
                              aria-hidden="true"
                              className="ms-Button-icon fleft icon-73"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Düzenle
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="SubTools commandoutproduct ms-OverflowSet-item TopBarObject">
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="OpenInNewWindow"
                              role="presentation"
                              aria-hidden="true"
                              className="ms-Button-icon fleft   iconnewWindow"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Yeni Sekme
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div
                        onClick={() => props.productOutShow()}
                        className="SubTools commandoutproduct ms-OverflowSet-item TopBarObject"
                      >
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="Tag"
                              role="presentation"
                              aria-hidden="true"
                              className="ms-Button-icon fleft icon-73"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Çıkış Yap
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="ms-OverflowSet-item ms-ContextualMenuExample commandfileadd SubTools TopBarObject">
                        <button
                          type="button"
                          name="Karşıya Yükle"
                          className="ms-Button ms-Button--commandBar  ms-CommandBarItem-link root-85"
                          data-is-focusable="true"
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              role="presentation"
                              data-icon-name="Upload"
                              className="ButtonIcon icon-93"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Dosya Ekle
                              </div>
                            </div>
                          </div>
                        </button>
                        <ul className="ms-ContextualMenu effect is-hidden">
                          <li className="ms-ContextualMenu-item ms-ContextualMenu-item--header">
                            Yükleme Tipi
                          </li>
                          <li className="ms-ContextualMenu-item">
                            <span
                              className="ms-ContextualMenu-link FileType"
                              data-type="Picture"
                              tabIndex="1"
                            >
                              Resimler
                            </span>
                            <i className="ms-Icon ms-Icon--Picture"></i>
                          </li>
                          <li className="ms-ContextualMenu-item">
                            <span
                              className="ms-ContextualMenu-link FileType"
                              data-type="WayBill"
                              tabIndex="2"
                            >
                              İrsaliye
                            </span>
                            <i className="ms-Icon ms-Icon--Money"></i>
                          </li>
                          <li className="ms-ContextualMenu-item">
                            <span
                              className="ms-ContextualMenu-link FileType"
                              data-type="Document"
                              tabIndex="3"
                            >
                              Sipariş Belgeleri
                            </span>
                            <i className="ms-Icon ms-Icon--Document"></i>
                          </li>
                        </ul>
                      </div>
                      <div
                        onClick={() => props.closeTopBar()}
                        className="ms-OverflowSet-item  CloseLayoutRight TopBarObject"
                      >
                        <button
                          type="button"
                          name="Yeni"
                          className="ms-Button ms-Button--commandBar ms-CommandBarItem-link root-85 "
                        >
                          <div className="ms-Button-flexContainer flexContainer-86">
                            <i
                              data-icon-name="Cancel"
                              role="presentation"
                              aria-hidden="true"
                              className="ms-Button-icon icon-73"
                            >
                              
                            </i>
                            <div className="ms-Button-textContainer textContainer-87">
                              <div className="ms-Button-label label-89">
                                Kapat
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
