import React from "react";
import MenuItem from "./MenuItem";
import SevkConsumer from "../../store/context";
export default function Menus() {
  const PrintNow = (ArticelId, CorpName) => {
    var PrintUrl =
      "https://recep.space/abi/js/PrintOrder.html?ArticelId=" +
      ArticelId +
      "&CorpName=" +
      CorpName;
    const newWindow = window.open(PrintUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <SevkConsumer>
      {(value) => {
        const {
          ShowTopBar,
          isMobile,
          LayoutNoteShow,
          ActiveArticel,
          CorpName,
          dispatch,
        } = value;
        const toggleView = () => {
          dispatch({ type: "toggleView", payload: null });
        };
        const closeTopBar = () => {
          dispatch({
            type: "closeTopBar",
            payload: null,
          });
        };
        const toggleNote = () => {
          dispatch({
            type: "toggleNote",
            payload: true,
          });
        };
        const toggleShare = () => {
          dispatch({
            type: "toggleShare",
            payload: true,
          });
        };
        const toggleAddProduct = () => {
          dispatch({ type: "toggleAddProduct", payload: true });
        };
        const toggleOut = () => {
          dispatch({ type: "toggleOut", payload: { statu: true, Order: [] } });
        };
        const chooseFile = (type) => {
          dispatch({ type: "chooseFile", payload: type });
        };
        return ShowTopBar ? (
          <div className="fright padd0">
            <div className="css-74 ms-CommandBar root-79">
              <div className="TopBarCommandLeft">
                {isMobile ? null : (
                  <MenuItem
                    click={toggleView}
                    icon="FullScreen"
                    text=""
                    symbol=""
                    iconclassname="icon-144s"
                  />
                )}
                <MenuItem
                  click={toggleAddProduct}
                  icon="Add"
                  text="Ekle"
                  symbol=""
                  iconclassname="ButtonIcon icon-93"
                />
                <MenuItem
                  click={() => {
                    PrintNow(ActiveArticel, CorpName);
                  }}
                  icon="Print"
                  text="Yazdır"
                  symbol=""
                  iconclassname="ms-Button-icon icon-144s"
                />
                <MenuItem
                  click={toggleShare}
                  icon="Share"
                  text="Paylaş"
                  symbol=""
                  iconclassname="ButtonIcon icon-93"
                />
                <MenuItem
                  click={toggleNote}
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
                  click={toggleOut}
                  icon="Tag"
                  text="Çıkış Yap"
                  symbol=""
                  iconclassname="ButtonIcon icon-93"
                />
                <MenuItem
                  click={() => chooseFile("Document")}
                  icon="Attach"
                  text="Belge Ekle"
                  symbol=""
                  iconclassname=" ms-Button-icon  Paylas"
                />
                <MenuItem
                  click={() => chooseFile("Picture")}
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
        ) : null;
      }}
    </SevkConsumer>
  );
}