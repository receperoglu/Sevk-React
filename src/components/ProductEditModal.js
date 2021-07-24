import React from "react";

export default function ProductEditModal({
  isShowProductEdit,
  Typeid,
  Dimensions,
  Piece,
  ChangeProductType,
  CancelEdit,
  UpdateOrder,
  Color,
  ProductTypes
}) {
  return (
    <div
      id="ProductModal"
      className={
        isShowProductEdit ? "ms-Layer ms-Layer--fixed effect layer-351" : "hide"
      }
    >
      <div className="ms-Fabric ms-Layer-content content-120">
        <div role="dialog">
          <div className="ms-Modal is-open root-345">
            <div className="ms-Overlay ms-Overlay--dark root-414"></div>
            <div className="ms-Dialog-main   main-412">
              <i
                data-icon-name="Cancel"
                onClick={() => CancelEdit()}
                className="pointer ms-Button-icon icon-73 fright"
              >
                
              </i>
              <div>
                <h4>Ürün Düzenleme</h4>
                <br />
              </div>
              <hr />
              <div className="clearfix OrderRow">
                <div className="col-md-2 fleft">
                  <span>Adet</span>
                </div>
                <div className="col-md-10 fleft">
                  <input
                    type="number"
                    value={Piece}
                    className="Piece ms-TextField-field"
                    onChange={(e) => ChangeProductType(e.target.value)}
                  />
                </div>
                <div className="col-md-2 fleft">
                  <span>Ölçü</span>
                </div>
                <div className="col-md-10 fleft">
                  <input
                    type="text"
                    defaultValue={Dimensions}
                    onChange={(e) => ChangeProductType(e.target.value)}
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
                    onChange={(e) => ChangeProductType(e.target.value)}
                    className="Color ms-TextField-field"
                  />
                </div>

                <div className="col-md-12 fleft">
                  <select
                    key={Typeid}
                    className="ms-TextField-field"
                    onChange={(e) => ChangeProductType(e.target.value)}
                    value={Typeid}
                    id="ProductType"
                  >
                    {ProductTypes.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.Name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12 text-right fleft">
                  <span className="Transfer TransferBTN ms-Button ms-Button--primary">
                    <span
                      onClick={() => UpdateOrder()}
                      className="transfersavetext"
                    >
                      Kaydet
                    </span>
                  </span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
