import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
import CreateOption from "../Tools/CreateOption";
export default function Edit({
  isShowProductEdit,
  Typeid,
  Dimensions,
  Piece,
  ChangeProductType,
  ChangePiece,
  ChangeDimensions,
  ChangeColor,
  CancelEdit,
  UpdateOrder,
  Color,
  ProductTypes,
  isShow,
}) {
  return isShowProductEdit ? (
    <div className="ms-Layer ms-Layer--fixed effect layer-351">
      <div className="root-345">
        <div className="ms-Dialog-main  main-412">
          <CancelBtn click={CancelEdit} />
          <h4>Ürün Düzenleme</h4>
          <div className="clearfix OrderRow">
            <div className="col-md-2 fleft">
              <span>Adet</span>
            </div>
            <div className="col-md-10 fleft">
              <input
                type="number"
                value={Piece}
                className="Piece ms-TextField-field"
                onChange={(e) => ChangePiece(e.target.value)}
              />
            </div>
            <div className="col-md-2 fleft">
              <span>Ölçü</span>
            </div>
            <div className="col-md-10 fleft">
              <input
                type="text"
                defaultValue={Dimensions}
                onChange={(e) => ChangeDimensions(e.target.value)}
                className="Dim ms-TextField-field"
              />
            </div>
            <div className="col-md-2 fleft">
              <span>Renk</span>
            </div>
            <div className="col-md-10 fleft">
              <input
                type="text"
                defaultValue={Color}
                onChange={(e) => ChangeColor(e.target.value)}
                className="Color ms-TextField-field"
              />
            </div>
            <div className="col-md-2 fleft">
              <span>Tip</span>
            </div>
            <CreateOption
              Json={ProductTypes}
              value={Typeid}
              change={ChangeProductType}
            />
            {Proccess(isShow, UpdateOrder)}
          </div>
          <hr />
        </div>
      </div>
    </div>
  ) : null;
}
function Proccess(isShow, UpdateOrder) {
  return (
    <div className="col-md-12 text-right fleft">
      {isShow ? (
        <ProgressBar isVisible={isShow} />
      ) : (
        <BlueButton text="Güncelle" click={UpdateOrder} />
      )}
    </div>
  );
}
