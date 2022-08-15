import React, { Fragment } from "react";
import LeftNav from "./LeftNav";
import Menus from "./Menus";
import SevkConsumer from "../../store/context";

export default function TopBar() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowTopBar, dispatch,Loading, Articels } = value;
        const ToggleMenu = () => {
          dispatch({ type: "ToggleMenu", payload: true });
        };
        const uploadFile = () => {
          dispatch({ type: "uploadFile", payload: null });
        };
        const Search = (e) => {
          dispatch({ type: "Search", payload: e });
        };
        const toggleTheme = () => {
          dispatch({ type: "toggleTheme" ,payload:null});
        };
        return (
          <Fragment>
            <div className="od-SuiteNav od-SuiteNav-react">
              <span
                onClick={ toggleTheme}
                role="presentation"
                className="settings"
              >
                
              </span>
              <div className="ThemeBase o365sx-navbar o365sx-search">
                <div className="_2kc0c9nP-qti6fefMCFonk">
                  <div className="Mm _3FLRgiFtGLuaFraVW49btd">
                    <button
                      onClick={ToggleMenu}
                      className="riRHDuln2VrIU8dSpyxJ2 o365sx-button  o365sx-waffle"
                      type="button"
                    >
                      <span className="menuicons ms-Icon--WaffleOffice365" />
                    </button>
                  </div>
                  <div onClick={ToggleMenu} className="Mobiles">
                    <button
                      className="MenuSlicer   o365sx-button "
                      type="button"
                    >
                      <span className="menuicons ms-Icon--WaffleOffice365" />
                    </button>
                  </div>
                  <div className="">
                    <span className="_3oXfC-h0HSTdxztdO_F4_A o365sx-appName  Mm _3FLRgiFtGLuaFraVW49btd _3odjF_1ZcGTHwuaL30ia2J" />
                    <a
                      className="m5-kje_HEdyN8cPiq-Sp0 o365sx-appName"
                      href="/"
                    >
                      <span className="_1yZIUhrPA4l6_cQWV3l3O- o365sx-appName">
                        Sevk
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="od-BasePage-topBar">
              <div className="od-TopBar">
                <div
                  className={
                    ShowTopBar
                      ? "hide"
                      : "od-TopBar-item od-TopBar-search  fleft"
                  }
                >
                  <div className="od-SearchBox">
                    <span
                      style={{ width: "100%" }}
                      className="od-SearchBox-search"
                    >
                      <input
                        className="SearchInput"
                        type="text"
                        onChange={(e) => Search(e.target.value)}
                        placeholder="Her şeyi ara"
                      />
                      <div
                        className={ !Loading && Articels.length === 0 ? "noresult" : "hide"}
                      >
                        Sonuç Yok
                      </div>
                      <span className="od-SearchBox-iconWrapper od-SearchBox-iconArrowWrapper">
                        <span className="Icon SearchIcon css-42" />
                      </span>
                    </span>
                    <span className="od-SearchBox-iconWrapper od-SearchBox-iconSearchWrapper">
                      <span className="Icon SearchIcon css-43" />
                    </span>
                  </div>
                </div>
                <div className="od-TopBar-item od-TopBar-commandBar od-BasePage-commandBar">
                  <Menus />
                </div>
              </div>
            </div>
            <LeftNav />
            <input
              type="file"
              id="FileNew"
              className="hide hidden opaq0"
              name="UploadArea[]"
              onChange={uploadFile}
              multiple
            />
          </Fragment>
        );
      }}
    </SevkConsumer>
  );
}
