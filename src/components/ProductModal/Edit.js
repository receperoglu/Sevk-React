import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
import SevkConsumer from "../../store/context";
import CreateOption from "../Tools/CreateOption";
import CreateInput from "../Tools/CreateInput"
export default function Edit() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowProductEdit, dispatch, Order, ProductTypes, Loading } =
          value;
        const UpdateOrder = () => {
          dispatch({ type: "UpdateOrder", payload: null });
        };
        const toggleEdit = () => {
          dispatch({
            type: "toggleEdit",
            payload: { statu: false, Order: [] },
          });
        };         
        return ShowProductEdit ? (
          <div className="ms-Layer ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleEdit} />
                <h4>Ürün Düzenleme</h4>
                <div className="clearfix OrderRow">
                  <div className="col-md-2 fleft">
                    <span>Adet</span>
                  </div>
                  <div className="col-md-10 fleft">
                    <CreateInput
                      type="number"
                      name="Piece"
                      value={Order.Piece}
                    />
                  </div>
                  <div className="col-md-2 fleft">
                    <span>Ölçü</span>
                  </div>
                  <div className="col-md-10 fleft">
                    <CreateInput name="Dimensions" value={Order.Dimensions} />
                  </div>
                  <div className="col-md-2 fleft">
                    <span>Renk</span>
                  </div>
                  <div className="col-md-10 fleft">
                    <CreateInput name="Color" value={Order.Color} />
                  </div>
                  <div className="col-md-2 fleft">
                    <span>Tip</span>
                  </div>
                  <CreateOption
                    name="ProductType"
                    Json={ProductTypes}
                    value={Order.ProductTypeId}
                    defaultValue={Order.ProductTypeId}
                  />
                  <div className="col-md-12 text-right fleft">
                    {Loading ? (
                      <ProgressBar isVisible={Loading} />
                    ) : (
                      <BlueButton text="Güncelle" click={UpdateOrder} />
                    )}
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
