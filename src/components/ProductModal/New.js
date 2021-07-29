import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
import CreateOption from "../Tools/CreateOption";
import SevkConsumer from "../../store/context";
export default function New() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ProductTypes, NewProductShow, dispatch, Loading } = value;
        const toggleAddProduct = () => {
          dispatch({ type: "toggleAddProduct", payload: false });
        };
        const SaveOrder = () => {
          dispatch({ type: "SaveOrder", payload: null });
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
        return NewProductShow ? (
          <div className="ms-Layer ms-Layer--fixed effect layer-351">
            <div className="ms-Fabric ms-Layer-content content-120">
              <div className="root-345">
                <div className="ms-Dialog-main  main-412">
                  <CancelBtn click={toggleAddProduct} />
                  <h4>Yeni Ürün Ekle</h4>
                  <hr />
                  <div className="col-md-12">
                    <div className="clearfix OrderRow">
                      <div className="col-xs-12 fleft">
                        <CreateOption
                          change={ChangeProductType}
                          Json={ProductTypes}
                        />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Adet</span>
                        <input
                          type="number"
                          onChange={ChangePiece}
                          className="Piece ms-TextField-field"
                        />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Ölçü</span>
                        <input
                          type="text"
                          onChange={ChangeDimensions}
                          className="Dim ms-TextField-field"
                        />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Renk</span>
                        <input
                          type="text"
                          onChange={ChangeColor}
                          className="Color ms-TextField-field"
                        />
                      </div>
                      <ProgressBar isVisible={Loading} />
                      {Loading ? null : (
                        <BlueButton text="Kaydet" click={SaveOrder} />
                      )}
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
