import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
export default function New({
  SaveOrder,
  ProductNewLoading,
  ChangeColor,
  ChangePiece,
  IsNewProductShow,
  CancelNewProduct,
  ProductTypes,
  ChangeProductType,
  ChangeDimensions,
}) {
  return IsNewProductShow ? (
    <div className="ms-Layer ms-Layer--fixed effect layer-351">
      <div className="ms-Fabric ms-Layer-content content-120">
        <div className="root-345">
          <div className="ms-Dialog-main  main-412">
            <CancelBtn click={CancelNewProduct} />
            <h4>Yeni Ürün Ekle</h4>
            <hr />
            <div className="col-md-12">
              <div className="clearfix OrderRow">
                <div className="col-xs-12 fleft">
                  <select
                    className="ms-TextField-field"
                    onChange={(e) => ChangeProductType(e.target.value)}
                  >
                    {ProductTypes.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.Name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-xs-12 fleft">
                  <span>Adet</span>
                  <input
                    type="number"
                    onChange={(e) => ChangePiece(e.target.value)}
                    className="Piece ms-TextField-field"
                  />
                </div>
                <div className="col-xs-12 fleft">
                  <span>Ölçü</span>
                  <input
                    type="text"
                    onChange={(e) => ChangeDimensions(e.target.value)}
                    className="Dim ms-TextField-field"
                  />
                </div>
                <div className="col-xs-12 fleft">
                  <span>Renk</span>
                  <input
                    type="text"
                    onChange={(e) => ChangeColor(e.target.value)}
                    className="Color ms-TextField-field"
                  />
                </div>
                <ProgressBar isVisible={ProductNewLoading} />
                {ProductNewLoading ? null : (
                  <BlueButton text="Kaydet" click={SaveOrder} />
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
