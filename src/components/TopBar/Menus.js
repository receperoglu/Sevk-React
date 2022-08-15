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
          ChangeView,
          ActiveArticel,
          CorpName,
          dispatch,
        } = value;

        const toggleView = () => {
          dispatch({ type: "toggleView" });
        };
        const closeTopBar = () => {
          dispatch({
            type: "closeTopBar",
          });
        };
        const toggleLayout = (Type) => {
          dispatch({
            type: "toggle" + Type,
            payload: true,
          });
        };
        const Delete = () => {
          dispatch({ type: "ConfirmToggle", payload: true });
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
                {!isMobile &&
                  <MenuItem
                    click={toggleView}
                    text={ChangeView ? "Küçük Görünüm" : "Tam Ekran"}
                    symbol=""
                    iconclassname="FabricMDL2Icons-0"
                  />
                }
                <MenuItem
                  click={toggleAddProduct}
                  text="Ekle"
                  symbol=""
                  iconclassname="FabricMDL2Icons"
                />
                <MenuItem
                  click={() => {
                    PrintNow(ActiveArticel, CorpName);
                  }}
                  text="Yazdır"
                  symbol=""
                  iconclassname="FabricMDL2Icons-0"
                />
                <MenuItem
                  click={() => toggleLayout("Share")}
                  text="Paylaş"
                  symbol=""
                  iconclassname="FabricMDL2Icons"
                />
                <MenuItem
                  click={() => toggleLayout("Note")}
                  text="Notlar"
                  symbol=""
                  iconclassname="FabricMDL2Icons-1"
                />
                <MenuItem
                  click={PrintNow}
                  text="Yeni Sekme"
                  symbol=""
                  iconclassname="controlIcons"
                />
                <MenuItem
                  click={toggleOut}
                  text="Çıkış Yap"
                  symbol=""
                  iconclassname="FabricMDL2Icons"
                />
                <MenuItem
                  click={() => chooseFile("Document")}
                  text="Belge Ekle"
                  symbol=""
                  iconclassname="FabricMDL2Icons"
                />
                <MenuItem
                  click={() => chooseFile("Picture")}
                  text="Resim Ekle"
                  symbol=""
                  iconclassname="FabricMDL2Icons-13"
                />
                <MenuItem
                  click={Delete}
                  text="Sil"
                  symbol=""
                  iconclassname="controlIcons"
                />
                <MenuItem
                  click={closeTopBar}
                  text="Kapat"
                  symbol=""
                  iconclassname="FabricMDL2Icons"
                />
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
