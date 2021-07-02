import React from "react";

export default function ProductEditModal(props) {
  return (
    <div
      id="ProductModal"
      className="ms-Layer ms-Layer--fixed effect layer-351"
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
                    onClick={() => props.CancelEdit()}
                    role="presentation"
                    aria-hidden="true"
                    className="pointer ms-Button-icon icon-73"
                  >
                    
                  </i>
                </div>
                <div className="ProductModalSub ProductOut">
                  <div>
                    <h4>Ürün Düzenleme</h4>

                    <br />
                  </div>
                  <hr />
                  <div className="col-md-12">
                    <div className="clearfix OrderRow">
                      <div className="col-md-2 fleft">
                        <span>Adet</span>
                      </div>
                      <div className="col-md-10 fleft">
                        <input
                          type="number"
                          value={props.Piece}
                          className="Piece form-control"
                        />
                      </div>
                      <div className="col-md-2 fleft">
                        <span>Ölçü</span>
                      </div>
                      <div className="col-md-10 fleft">
                        <input
                          type="text"
                          defaultValue={props.Dimensions}
                          className="Dim form-control"
                        />
                      </div>
                      <div className="col-md-2 fleft">
                        <span>Renk</span>
                      </div>
                      <div className="col-md-10 fleft">
                        <input
                          type="text"
                          defaultValue={props.Color}
                          className="Color form-control"
                        />
                      </div>

                      <div className="col-md-12 fleft">
                        <select
                          key={props.Typeid}
                          className="OneDriveInput form-control"
                          onChange={(e) =>
                            props.ChangeProductType(e.target.value)
                          }
                          value={props.Typeid}
                          id="ProductType"
                        >
                          {props.ProductTypes.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.Name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-12 text-right fleft">
                        <span className="Transfer TransferBTN ms-Button ms-Button--primary">
                          <span
                            onClick={() => props.UpdateOrder()}
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
        </div>
      </div>
    </div>
  );
}
