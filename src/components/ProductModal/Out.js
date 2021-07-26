import React from "react";
import CancelBtn from "../Tools/CancelBtn";
export default function Out({
  isShowProductOut,
  CancelProduct,
  ChangeWayBillId,
  ChangePiece,
  OrderList,
  ChangeWeight,
  SaveProductOut,
}) {
  return isShowProductOut ? (
    <div className="ms-Layer ms-Layer--fixed  effect layer-351">
      <div className="root-345">
        <div className="ms-Dialog-main  main-412">
          <CancelBtn click={CancelProduct} />
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
  ) : null;
}
