import React from "react";

export default function ProductOutModal(props) {
  return (
    <div
      id="ProductModal"
      className="ms-Layer ms-Layer--fixed  effect layer-351"
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
                    onClick={() => props.CancelProduct()}
                    role="presentation"
                    aria-hidden="true"
                    className="pointer ms-Button-icon icon-73"
                  >
                    
                  </i>
                </div>
                <div className="ProductModalSub ProductOut">
                  <div>
                    <h4>Ürün Çıkışı</h4>
                    <h4 className="ProductName padd0 text-left col-md-12">
                      {props.ArticelName}
                    </h4>
                    <br />
                    <input
                      type="text"
                      onChange={(e) => props.ChangeWayBillId(e.target.value)}
                      placeholder="İrsaliye No"
                      className="irsaliyeno col-md-1 form-control OneDriveInput"
                    />
                    <br />
                  </div>
                  <hr />
                  <div className="ProductOutList col-md-12">
                    {props.OrderList.map((o) => (
                      <div key={o.id}>
                        <div className="clearfix OrderRow">
                          <div className="col-md-2 fleft">
                            <input
                              type="text"
                              placeholder={o.Piece}
                              onChange={(e) =>
                                props.ChangePiece(e.target.value)
                              }
                              className="Piece form-control"
                            />
                          </div>
                          <div className="col-md-2 fleft">
                            <input
                              type="text"
                              placeholder="Ağırlık"
                              onChange={(e) =>
                                props.ChangeWeight(e.target.value)
                              }
                              className="Weight form-control"
                            />
                          </div>

                          <div className="col-md-6 fleft">
                            <span>
                              {o.Dimensions} {o.Color} {o.ProductTypeName}
                            </span>
                          </div>
                          <div className="col-md-1 text-right fleft">
                            <span className="btn btnoutlineprimary "></span>
                          </div>
                          <div className="col-md-1 text-right fleft">
                            <span className="Transfer TransferBTN ms-Button ms-Button--primary">
                              <span
                                onClick={() => props.SaveProductOut(o.id)}
                                className="transfersavetext"
                              >
                                Kaydet
                              </span>{" "}
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
