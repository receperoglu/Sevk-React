import React, { useState } from "react";
import LeftNav from "./LeftNav";
import Menus from "./Menus";
export default function TopBar({
  ArticelId,
  CorpName,
  CreateArticelShow,
  isShowTopBar,
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
  return (
    <div className="od-BasePage-suiteNav od-BasePage-suiteNav--reactShell">
      <div className="od-SuiteNav od-SuiteNav-react">
        <span className="od-SuiteNav-reactShell-diamond Icon css-41"></span>
        {Nav(MenuToggler)}
      </div>
      <div className="od-BasePage-topBar">
        <div className="od-TopBar">
          {SearchArea(isShowTopBar)}
          <div className="od-TopBar-item od-TopBar-commandBar od-BasePage-commandBar">
            <Menus
              isMobile={isMobile}
              chooseFile={chooseFile}
              toggleView={toggleView}
              closeTopBar={closeTopBar}
              choosePicture={choosePicture}
              LayoutNoteShow={LayoutNoteShow}
              productOutShow={productOutShow}
              NewProductShow={NewProductShow}
              LayoutRightShow={LayoutRightShow}
              CreateArticelShow={CreateArticelShow}
              isShowTopBar={isShowTopBar}
              ArticelId={ArticelId}
              CorpName={CorpName}
            />
          </div>
        </div>
      </div>
      <LeftNav CreateArticelShow={CreateArticelShow} MenuStatu={MenuStatu} />
    </div>
  );
}
function Nav(MenuToggler) {
  return (
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
            <span className="_1yZIUhrPA4l6_cQWV3l3O- o365sx-appName">Sevk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
function SearchArea(isShowTopBar) {
  return isShowTopBar ? null : (
    <div className="od-TopBar-item od-TopBar-search od-BasePage-search fleft">
      <div className="od-Search">
        <div className="od-SearchBox">
          <span style={{ width: "200px" }} className="od-SearchBox-search">
            <input
              className="SearchInput"
              type="text"
              placeholder="Her şeyi ara"
            />
            <span className="od-SearchBox-iconWrapper od-SearchBox-iconArrowWrapper">
              <span className="Icon SearchIcon css-42"></span>
            </span>
          </span>
          <span className="od-SearchBox-iconWrapper od-SearchBox-iconSearchWrapper">
            <span className="Icon SearchIcon css-43"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
