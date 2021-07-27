import React from "react";
import ProgressBar from "./Tools/ProgressBar";
import CancelBtn from "./Tools/CancelBtn";
import BlueButton from "./Tools/BlueButton";
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
  return IsCreateArticelShow ? (
    <div id="ProductModal" className="ms-Layer ms-Layer--fixed layer-351">
      <div className="root-345">
        <div className="ms-Dialog-main  main-412">
          <CancelBtn click={CancelCreateArticel} />
          <div className="ProductModalSub ProductOut">
            <h4>Yeni Artikel Oluştur</h4>
            <br />
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
              <ProgressBar isVisible={isShowCreateArticel} />
              {isShowCreateArticel ? null : (
                <BlueButton click={SaveArticel} text="Kaydet" />
              )}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
