import React from "react";
export default function ProductOutModal({
  isShowProductOut,
  CancelProduct,
  ChangeWayBillId,
  ChangePiece,
  OrderList,
  ChangeWeight,
  SaveProductOut,
}) {
  return (
    <div
      id="ProductModal"
      className={
        isShowProductOut ? "ms-Layer ms-Layer--fixed  effect layer-351" : "hide"
      }
      data-portal-element="true"
    >
      <div className="ms-Fabric ms-Layer-content content-120">
        <div role="dialog">
          <div className="ms-Modal is-open root-345">
            <div className="ms-Overlay ms-Overlay--dark root-414"></div>
            <div className="ms-Dialog-main HudldIlvnIFz-AVg_Bopj main-412">
              <div
                className="ms-Modal-scrollableContent scrollableContent-413"
                data-is-scrollable="true"
              >
                <div>
                  <i
                    data-icon-name="Cancel"
                    onClick={() => CancelProduct()}
                    role="presentation"
                    aria-hidden="true"
                    className="pointer fright ms-Button-icon icon-73"
                  >
                    
                  </i>
                </div>
                <div className="ProductModalSub ProductOut">
                  <div>
                    <h4>Ürün Çıkışı</h4>
                    <input
                      type="text"
                      onChange={(e) => ChangeWayBillId(e.target.value)}
                      placeholder="İrsaliye No"
                      className="irsaliyeno col-md-1  ms-TextField-field w80"
                    />
                    <br />
                  </div>
                  <hr />
                  <div className="ProductOutList col-md-12">
                    {OrderList.map((o) => (
                      <div key={o.id}>
                        <div className="col-md-12 OrderRow">
                          <div className="col-md-2 fleft">
                            <input
                              type="text"
                              placeholder={o.Piece}
                              onChange={(e) => ChangePiece(e.target.value)}
                              className="Piece ms-TextField-field w80"
                            />
                          </div>
                          <div className="col-md-2 fleft">
                            <input
                              type="text"
                              placeholder="Ağırlık"
                              onChange={(e) => ChangeWeight(e.target.value)}
                              className="Weight ms-TextField-field w80"
                            />
                          </div>

                          <div className="col-md-6 fleft">
                            <span>
                              {o.Dimensions} {o.Color} {o.ProductTypeName}
                            </span>
                          </div>

                          <div className="col-md-2 text-right fleft">
                            <span className="Transfer TransferBTN ms-Button ms-Button--primary">
                              <span
                                onClick={() => SaveProductOut(o.id)}
                                className="transfersavetext"
                              >
                                Kaydet
                              </span>
                            </span>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
