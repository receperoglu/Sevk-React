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
            <hr />
            {CorpList(ChangeCorpId, Corps)}
            {SalesType(ChangeSalesType, SalesTypes)}
            <div className="padd0 col-xs-12 ">
              <span>Artikel </span>
              <input
                type="text"
                onChange={(e) => ChangeArticelName(e.target.value)}
                className="ms-TextField-field"
              />
            </div>
            {Proccess(isShowCreateArticel, SaveArticel)}
            <hr />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
function Proccess(isShowCreateArticel, SaveArticel) {
  return (
    <div className="padd0 col-xs-12 text-right fleft">
      <ProgressBar isVisible={isShowCreateArticel} />
      {isShowCreateArticel ? null : (
        <BlueButton click={SaveArticel} text="Kaydet" />
      )}
    </div>
  );
}
function CorpList(ChangeCorpId, Corps) {
  return (
    <div className="padd0 col-xs-12 ">
      <span>Firma</span>
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
  );
}
function SalesType(ChangeSalesType, SalesTypes) {
  return (
    <div className="padd0 col-xs-12 fleft">
      <span> Tipi</span>
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
  );
}