import React from "react";
import BlueButton from "../Tools/BlueButton";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
export default function Out() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Orders, dispatch, ShowProductOut } = value;
        const toggleOut = () => {
          dispatch({ type: "toggleOut", payload: { statu: false, Order: [] } });
        };
        const SaveProductOut = (input) => {
          dispatch({ type: "SaveProductOut", payload: input });
        };
        const InputChange = (input) => {
          dispatch({
            type: "Change" + input.target.name,
            payload: input.target.value,
          });
        };
        return ShowProductOut ? (
          <div className="ms-Layer ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleOut} />
                <div className="col-xs-12">
                  {Orders[0].id === 0 ? (
                    <h1>Sipariş boş bu işlem tamamlanamaz</h1>
                  ) : (
                    <div>
                      <h4>Ürün Çıkışı</h4>
                      <input
                        type="text"
                        name="WayBillId"
                        onChange={InputChange}
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
                              name="Piece"
                              onChange={InputChange}
                              className="Piece ms-TextField-field w60"
                            />
                          </div>
                          <div className="col-xs-2 padd0 fleft">
                            <input
                              type="text"
                              placeholder="KG"
                              name="Weight"
                              onChange={InputChange}
                              className="Weight ms-TextField-field w60"
                            />
                          </div>
                          <div className="col-xs-2 padd0 text-center fleft">
                            <BlueButton click={SaveProductOut} text="Kaydet" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
