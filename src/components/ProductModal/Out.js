import React from "react";
import BlueButton from "../Tools/BlueButton";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
import CreateInput from "./../Tools/CreateInput";
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
        return ShowProductOut ? (
          <div className="ms-Layer ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleOut} />
                {Orders[0].id === 0 ? (
                  <h1>Sipariş boş bu işlem tamamlanamaz</h1>
                ) : (
                  <div>
                    <h4>Ürün Çıkışı</h4>
                    <CreateInput type="number" name="WayBillId" />
                    {Orders.map((o) => (
                      <div key={o.id} className="col-xs-12 padd0 OrderRow">
                        <div className="col-xs-6 padd0  fleft">
                          <b> {o.Piece} AD</b> {o.Dimensions} {o.Color}
                          {o.ProductTypeName}
                        </div>
                        <div className="col-xs-2 padd0 fleft">
                          <CreateInput type="number" name="Piece" />
                        </div>
                        <div className="col-xs-2 padd0 fleft">
                          <CreateInput type="number" name="Weight" />
                        </div>
                        <div className="col-xs-2 padd0 text-center fleft">
                          <BlueButton
                            click={() => SaveProductOut(o.id)}
                            text="Kaydet"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
