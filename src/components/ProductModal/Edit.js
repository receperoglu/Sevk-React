import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
import SevkConsumer from "../../store/context";
import CreateOption from "../Tools/CreateOption";
import CreateInput from "../Tools/CreateInput";
export default function Edit() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowProductEdit, dispatch, Order,ProductTypeId, ProductTypes, Loading } =
          value;
        const UpdateOrder = () => {
          dispatch({ type: "UpdateOrder" });
        };
        const toggleEdit = () => {
          dispatch({
            type: "toggleEdit",
          });
        };
        return ShowProductEdit ? (
          <div className="ms-Layer animate ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleEdit} />
                <h4>Ürün Düzenleme</h4>
                <div className="clearfix OrderRow">
                  <div className="col-md-12 fleft">
                    <span>Tip</span>
                  </div>
                  <div className="col-md-12 fleft">
                    <CreateOption
                      Json={ProductTypes}
                      name="ProductType"
                      val={ProductTypeId}
                     />
                  </div>
                  <div className="col-md-12 fleft">
                    <span>Adet</span>
                  </div>
                  <div className="col-md-12 fleft">
                    <CreateInput type="number" name="Piece" val={Order.Piece} />
                  </div>
                  <div className="col-md-12 fleft">
                    <span>Ölçü</span>
                  </div>
                  <div className="col-md-12 fleft">
                    <CreateInput name="Dimensions" val={Order.Dimensions} />
                  </div>
                  <div className="col-md-12 fleft">
                    <span>Renk</span>
                  </div>
                  <div className="col-md-12 fleft">
                    <CreateInput name="Color" val={Order.Color} />
                  </div>
                  <div className="col-md-12 text-center fleft">
                    <br />
                    <ProgressBar isVisible={Loading} />
                    {!Loading &&
                      <BlueButton text="Güncelle" click={UpdateOrder} />
                    }
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
