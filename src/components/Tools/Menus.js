import React from "react";
import MenuItem from "./MenuItem";

export default function ({
  isMobile,
  toggleView,
  NewProductShow,
  LayoutRightShow,
  LayoutNoteShow,
  productOutShow,
  chooseFile,
  closeTopBar,
  choosePicture,
  isShowTopBar,
  ArticelId,
  CorpName,
}) {
  const PrintNow = () => {
    var PrintUrl =
      "https://recep.space/abi/js/PrintOrder.html?ArticelId=" +
      ArticelId +
      "&CorpName=" +
      CorpName;
    const newWindow = window.open(PrintUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return isShowTopBar ? (
    <div className="fright">
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
  ) : null;
}
