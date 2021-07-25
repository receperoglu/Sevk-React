import React from "react";
export default function ProductOutModal({
  isShowProductOut,
  CancelProduct,
  ChangeWayBillId,
  ChangePiece,
  OrderList,
  ChangeWeight,
  SaveProductOut
}) {
  return (
    <div
      id="ProductModal"
      className={
        isShowProductOut ? "ms-Layer ms-Layer--fixed  effect layer-351" : "hide"
      }
    >
      <div className="ms-Fabric ms-Layer-content content-120">
        <div className="ms-Modal is-open root-345">
          <div className="ms-Overlay ms-Overlay--dark root-414"></div>
          <div className="ms-Dialog-main   main-412">
            <div>
              <i
                data-icon-name="Cancel"
                onClick={() => CancelProduct()}
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
                  className="irsaliyeno col-xs-1 paddleft2 ms-TextField-field"
                />
                <br />
              </div>
              <hr />
              <div className="ProductOutList padd0 col-xs-12">
                {OrderList.map((o) => (
                  <div key={o.id}>
                    <div className="col-xs-12 padd0 OrderRow">
                      <div className="col-xs-6 padd0 padd0 fleft">
                        <span className="minifont">
                          <b> {o.Piece} AD</b> {o.Dimensions} {o.Color}{" "}
                          {o.ProductTypeName}
                        </span>
                      </div>
                      <div className="col-xs-2 padd0 fleft">
                        <input
                          type="text"
                          placeholder="Adet"
                          onChange={(e) => ChangePiece(e.target.value)}
                          className="Piece ms-TextField-field w60"
                        />
                      </div>
                      <div className="col-xs-2 padd0 fleft">
                        <input
                          type="text"
                          placeholder="KG"
                          onChange={(e) => ChangeWeight(e.target.value)}
                          className="Weight ms-TextField-field w60"
                        />
                      </div>
                      <div className="col-xs-2 padd0 text-center fleft">
                        <span
                          title="Kaydet"
                          onClick={() => SaveProductOut(o.id)}
                          className="TransferBTN ms-Button w60 ms-Button--primary"
                        >
                          <i
                            data-icon-name="StatusCircleCheckmark "
                            className="FabricMDL2Icons"
                          >
                            
                          </i>
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
  )
}
