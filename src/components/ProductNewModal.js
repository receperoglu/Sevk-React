import React from "react";
export default function ProductNewModal({
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
  return (
    <div     
      className={
        IsNewProductShow ? "ms-Layer ms-Layer--fixed effect layer-351" : "hide"
      }
    >
      <div className="ms-Fabric ms-Layer-content content-120">
        <div className="root-345">
          <div className="ms-Dialog-main  main-412">
            <i
              data-icon-name="Cancel"
              onClick={() => CancelNewProduct()}
              className="pointer fright ms-Button-icon icon-73"
            >
              
            </i>
            <div>
              <h4>Yeni Ürün Ekle</h4>
              <br />
            </div>
            <hr />
            <div className="col-md-12 fleft">
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
            <div className="col-md-12">
              <div className="clearfix OrderRow">
                <div className="col-md-2 fleft">
                  <span>Adet</span>
                </div>
                <div className="col-md-10 fleft">
                  <input
                    type="number"
                    onChange={(e) => ChangePiece(e.target.value)}
                    className="Piece ms-TextField-field"
                  />
                </div>
                <div className="col-md-2 fleft">
                  <span>Ölçü</span>
                </div>
                <div className="col-md-10 fleft">
                  <input
                    type="text"
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
                    onChange={(e) => ChangeColor(e.target.value)}
                    className="Color ms-TextField-field"
                  />
                </div>
                <div className="col-md-12 text-right fleft">
                  <div
                    className={
                      ProductNewLoading
                        ? "show ProgressSpinnerFlat"
                        : "opaq0 ProgressSpinnerFlat"
                    }
                    role="progressbar"
                  >
                    <div aria-hidden="true">•</div>
                    <div aria-hidden="true">•</div>
                    <div aria-hidden="true">•</div>
                    <div aria-hidden="true">•</div>
                    <div aria-hidden="true">•</div>
                    <div aria-hidden="true">•</div>
                    <div aria-hidden="true">•</div>
                  </div>
                  <span
                    className={
                      ProductNewLoading
                        ? "hide"
                        : "Transfer TransferBTN ms-Button ms-Button--primary"
                    }
                  >
                    <span
                      onClick={() => SaveOrder()}
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
