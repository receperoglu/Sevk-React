import React, { useState } from "react";
import LeftNav from "./LeftNav";
import MenuItem from "./Tools/MenuItem";
export default function TopBar({
  ArticelId,
  CorpName,
  CreateArticelShow,
  isShowTopBar,
  CorpSearch,
  isMobile,
  toggleView,
  NewProductShow,
  LayoutRightShow,
  LayoutNoteShow,
  productOutShow,
  chooseFile,
  closeTopBar,
  choosePicture,
}) {
  const [MenuStatu, setMenuStatu] = useState(false);
  const MenuToggler = () => {
    setMenuStatu(!MenuStatu);
  };
  const PrintNow = () => {
    var PrintUrl =
      "https://recep.space/abi/js/PrintOrder.html?ArticelId=" +
      ArticelId +
      "&CorpName=" +
      CorpName;
    const newWindow = window.open(PrintUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="od-BasePage-suiteNav od-BasePage-suiteNav--reactShell">
      <div className="od-SuiteNav od-SuiteNav-react">
        <span className="od-SuiteNav-reactShell-diamond Icon css-41"></span>
        <div className="ThemeBase o365cst o365spo o365sx-navbar o365sx-search">
          <div className="_2kc0c9nP-qti6fefMCFonk">
            <div className="Mm _3FLRgiFtGLuaFraVW49btd">
              <button
                onClick={() => MenuToggler()}
                className="riRHDuln2VrIU8dSpyxJ2 o365sx-button  o365sx-waffle"
                type="button"
              >
                <span className="menuicons ms-Icon--WaffleOffice365 ms-icon-font-size-16"></span>
              </button>
            </div>
            <div onClick={() => MenuToggler()} className="Mobiles">
              <button
                className="MenuSlicer MainMenu o365sx-button o365sx-highContrastButton"
                type="button"
              >
                <span className="menuicons ms-Icon--WaffleOffice365 ms-icon-font-size-16"></span>
              </button>
            </div>
            <div className="">
              <span className="_3oXfC-h0HSTdxztdO_F4_A o365sx-appName o365cs-o365logo Mm _3FLRgiFtGLuaFraVW49btd _3odjF_1ZcGTHwuaL30ia2J"></span>
              <a className="m5-kje_HEdyN8cPiq-Sp0 o365sx-appName" href="/">
                <span className="_1yZIUhrPA4l6_cQWV3l3O- o365sx-appName">
                  Sevk
                </span>
              </a>
            </div>
          </div>
          <div className="QiA1DX84m4l79Lx_jjDtW">
            <div className="MobileCommandOptions hide">
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
          </div>
        </div>
      </div>
      <div className="od-BasePage-topBar">
        <div className="od-TopBar">
          <div
            className={
              isShowTopBar
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
                    onChange={(event) => CorpSearch(event)}
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
                    className="ms-Button-icon FabricMDL2Icons"
                  >
                    
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="od-TopBar-item od-TopBar-commandBar od-BasePage-commandBar">
            <div className={isShowTopBar ? "fright" : "opaq0 hide"}>
              <div className="col-md-6 padd0">
                <div className="ms-FocusZone css-74 ms-CommandBar root-79">
                  <div className="ms-OverflowSet TopBarCommandLeft primarySet-82">
                    <div
                      className={
                        isMobile ? "hide" : "ms-OverflowSet-item  TopBarObject "
                      }
                    >
                      <MenuItem
                        click={toggleView}
                        icon="FullScreen"
                        text=""
                        symbol=""
                        iconclassname="icon-144s"
                      />
                    </div>

                    <MenuItem
                      click={NewProductShow}
                      icon="Add"
                      text="Ekle"
                      symbol=""
                      iconclassname="ButtonIcon icon-93"
                    />
                    <MenuItem
                      click={PrintNow}
                      icon="Print"
                      text="Yazdır"
                      symbol=""
                      iconclassname="ms-Button-icon icon-144s"
                    />
                    <MenuItem
                      click={LayoutRightShow}
                      icon="Share"
                      text="Paylaş"
                      symbol=""
                      iconclassname="ButtonIcon icon-93"
                    />
                    <MenuItem
                      click={LayoutNoteShow}
                      icon="StackIndicator"
                      text="Notlar"
                      symbol=""
                      iconclassname="nott fleft icon-68"
                    />
                    <MenuItem
                      click={LayoutNoteShow}
                      icon="OpenInNewWindow"
                      text="Yeni Sekme"
                      symbol=""
                      iconclassname="ms-Button-icon fleft   iconnewWindow"
                    />
                    <MenuItem
                      click={productOutShow}
                      icon="Tag"
                      text="Çıkış Yap"
                      symbol=""
                      iconclassname="ButtonIcon icon-93"
                    />
                    <MenuItem
                      click={choosePicture}
                      icon="Attach"
                      text="Belge Ekle"
                      symbol=""
                      iconclassname=" ms-Button-icon  Paylas"
                    />
                    <MenuItem
                      click={chooseFile}
                      icon="Photo2Add"
                      text="Resim Ekle"
                      symbol=""
                      iconclassname="ms-Button-icon FabricMDL2Icons-13"
                    />
                    <MenuItem
                      click={closeTopBar}
                      icon="Cancel"
                      text="Kapat"
                      symbol=""
                      iconclassname="ms-Button-icon FabricMDL2Icons"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeftNav CreateArticelShow={CreateArticelShow} MenuStatu={MenuStatu} />
    </div>
  );
}
