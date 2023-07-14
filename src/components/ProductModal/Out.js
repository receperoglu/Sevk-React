import React from "react";
import BlueButton from "../Tools/BlueButton";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
import CreateInput from "./../Tools/CreateInput";
import ProgressBar from "../Tools/ProgressBar";
export default function Out() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Orders, dispatch, ShowProductOut, isMobile, Loading } = value;
        const toggleOut = () => {
          dispatch({ type: "toggleOut", payload: { statu: false, Order: [] } });
        };
        const SaveProductOut = () => {
          dispatch({ type: "SaveProductOut" });
        };
        return ShowProductOut ? (
          <div className="ms-Layer animate ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleOut} />

                {Orders[0].id === 0 &&
                  <h1>Sipariş boş bu işlem tamamlanamaz</h1>
                }


                {Orders[0].id !== 0 &&
                  <div>
                    <h4>Ürün Çıkışı</h4>
                    <ProgressBar isVisible={Loading} />
                    <CreateInput type="number" name="WayBillId" placeholder="İrsaliye No" style={{ width: "200px" }} />
                    {Orders.map((o) => (
                      <div key={o.id} className="col-xs-12 padd0 OrderRow">
                        <div className="col-xs-6 padd0  fleft">
                          <span className={isMobile ? "minifont" : ""}>
                            <b> {o.Piece} AD</b> {o.Dimensions} {o.Color}
                            {o.ProductTypeName}
                          </span>
                        </div>
                        <div className="col-xs-2 padd0 fleft">
                          <CreateInput type="number" placeholder="Adet" name="Piece" process="productOut" orderId={o.id} style={{ maxWidth: "100px" }} />
                        </div>
                        <div className="col-xs-2 padd0 fleft">
                          <CreateInput type="number" placeholder="Ağırlık" name="Weight" process="productOut" orderId={o.id}  style={{ maxWidth: "100px" }} />
                        </div>

                      </div>
                    ))}

                  </div>
                }
                <div className=" padd0 text-center ">
                  {Orders.length > 0 &&
                    <div>

                      {
                        Loading === false && <BlueButton
                          click={() => SaveProductOut()}
                          text="Kaydet"
                        />
                      }

                    </div>

                  }

                </div>
              </div>

            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
