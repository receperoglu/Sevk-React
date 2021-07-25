import React from "react";
import ProgressBar from "./ProgressBar";
export default function CreateArticelModal({
  IsCreateArticelShow,
  CancelCreateArticel,
  ChangeCorpId,
  ChangeSalesType,
  Corps,
  SalesTypes,
  ChangeArticelName,
  isShowCreateArticel,
  SaveArticel,
}) {
  return (
    <div
      id="ProductModal"
      className={
        IsCreateArticelShow ? "ms-Layer ms-Layer--fixed layer-351" : "hide"
      }
    >
      <div className="ms-Fabric ms-Layer-content content-120">
        <div role="dialog">
          <div className="ms-Modal is-open root-345">
            <div className="ms-Overlay ms-Overlay--dark root-414"></div>
            <div className="ms-Dialog-main HudldIlvnIFz-AVg_Bopj main-412">
              <div>
                <i
                  data-icon-name="Cancel"
                  onClick={() => CancelCreateArticel()}
                  role="presentation"
                  className="pointer fright ms-Button-icon icon-73"
                >
                  
                </i>
              </div>
              <div className="ProductModalSub ProductOut">
                <div>
                  <h4>Yeni Artikel Oluştur</h4>
                  <br />
                </div>
                <hr />
                <div className="padd0 col-xs-12 ">
                  <div className="padd0 col-xs-2 ">
                    <span>Firma</span>
                  </div>
                  <div className="padd0 col-xs-10 ">
                    <select
                      className="ms-TextField-field"
                      onChange={(e) => ChangeCorpId(e.target.value)}
                    >
                      {Corps.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="padd0 col-xs-12">
                  <div className="padd0 col-xs-2 fleft">
                    <span> Tipi</span>
                  </div>
                  <div className="padd0 col-xs-10 fleft">
                    <select
                      className="ms-TextField-field field-320"
                      onChange={(e) => ChangeSalesType(e.target.value)}
                    >
                      {SalesTypes.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="padd0 col-xs-12 ">
                    <div className="padd0 col-xs-2 fleft">
                      <span>Artikel </span>
                    </div>
                    <div className="padd0 col-xs-10 fleft">
                      <input
                        type="text"
                        onChange={(e) => ChangeArticelName(e.target.value)}
                        className="ms-TextField-field"
                      />
                    </div>
                  </div>
                </div>
                <div className="padd0 col-xs-12 text-right fleft">
                  <div
                    className={
                      isShowCreateArticel
                        ? "show ProgressSpinnerFlat"
                        : "opaq0 ProgressSpinnerFlat"
                    }
                    role="progressbar"
                  >
                    <ProgressBar />
                  </div>
                  <span
                    className={
                      isShowCreateArticel
                        ? "hide"
                        : "Transfer TransferBTN ms-Button ms-Button--primary"
                    }
                  >
                    <span
                      onClick={() => SaveArticel()}
                      className="transfersavetext"
                    >
                      Kaydet
                    </span>
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
