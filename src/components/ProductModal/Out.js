import React from "react";
import BlueButton from "../Tools/BlueButton";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
export default function Out() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Orders, dispatch, ShowProductOut } = value;
        const toggleOut = (dispatch) => {
          dispatch({ type: "toggleOut", payload: { statu: false, Order: [] } });
        };
        const ChangeWayBillId = (input) => {
          dispatch({ type: "ChangeWayBillId", payload: input });
        };
        const ChangePiece = (input) => {
          dispatch({ type: "ChangePiece", payload: input });
        };
        const SaveProductOut = (input) => {
          dispatch({ type: "SaveProductOut", payload: input });
        };
        const ChangeWeight = (input) => {
          dispatch({ type: "ChangeWeight", payload: input });
        };

        return ShowProductOut ? (
          <div className="ms-Layer ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleOut} />
                <div className="col-xs-12">
                  <h4>Ürün Çıkışı</h4>
                  <input
                    type="text"
                    onChange={ChangeWayBillId}
                    placeholder="İrsaliye No"
                    className="irsaliyeno col-xs-1 paddleft2 ms-TextField-field"
                  />
                  {Orders.map((o) => (
                    <div key={o.id} className="col-xs-12 padd0 OrderRow">
                      <div className="col-xs-6 padd0 padd0 fleft">
                        <b> {o.Piece} AD</b> {o.Dimensions} {o.Color}
                        {o.ProductTypeName}
                      </div>
                      <div className="col-xs-2 padd0 fleft">
                        <input
                          type="text"
                          placeholder="Adet"
                          onChange={ChangePiece}
                          className="Piece ms-TextField-field w60"
                        />
                      </div>
                      <div className="col-xs-2 padd0 fleft">
                        <input
                          type="text"
                          placeholder="KG"
                          onChange={ChangeWeight}
                          className="Weight ms-TextField-field w60"
                        />
                      </div>
                      <div className="col-xs-2 padd0 text-center fleft">
                        <BlueButton click={SaveProductOut} text="Kaydet" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
