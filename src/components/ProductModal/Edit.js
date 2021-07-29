import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
import SevkConsumer from "../../store/context";
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
        const ChangePiece = (input) => {
          dispatch({ type: "ChangePiece", payload: input.target.value });
        };
        const ChangeDimensions = (input) => {
          dispatch({ type: "ChangeDimensions", payload: input.target.value });
        };
        const ChangeColor = (input) => {
          dispatch({ type: "ChangeColor", payload: input.target.value });
        };
        const ChangeProductType = (input) => {
          dispatch({ type: "ChangeProductType", payload: input });
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
                    <input
                      type="number"
                      value={Order.Piece}
                      className="Piece ms-TextField-field"
                      onChange={ChangePiece}
                    />
                  </div>
                  <div className="col-md-2 fleft">
                    <span>Ölçü</span>
                  </div>
                  <div className="col-md-10 fleft">
                    <input
                      type="text"
                      defaultValue={Order.Dimensions}
                      onChange={ChangeDimensions}
                      className="Dim ms-TextField-field"
                    />
                  </div>
                  <div className="col-md-2 fleft">
                    <span>Renk</span>
                  </div>
                  <div className="col-md-10 fleft">
                    <input
                      type="text"
                      defaultValue={Order.Color}
                      onChange={ChangeColor}
                      className="Color ms-TextField-field"
                    />
                  </div>
                  <div className="col-md-2 fleft">
                    <span>Tip</span>
                  </div>
                  <select
                    className="ms-TextField-field"
                    onChange={ChangeProductType}
                    value={Order.ProductTypeId}
                  >
                    {ProductTypes.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.Name}
                      </option>
                    ))}
                  </select>
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
