import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
import SevkConsumer from "../../store/context";
import CreateOption from "../Tools/CreateOption";
import CreateInput from "../Tools/CreateInput"
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
        return NewProductShow ? (
          <div className="ms-Layer animate ms-Layer--fixed effect layer-351">
            <div className="ms-Fabric ms-Layer -content content-120">
              <div className="root-345">
                <div className="ms-Dialog-main  main-412">
                  <CancelBtn click={toggleAddProduct} />
                  <h4>Yeni Ürün Ekle</h4>
                  <hr />
                  <div className="col-md-12">
                    <div className="clearfix OrderRow">
                      <div className="col-xs-12 fleft">
                        <CreateOption name="ProductType" Json={ProductTypes} />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Adet</span>
                        <CreateInput type="number" name="Piece" />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Ölçü</span>
                        <CreateInput name="Dimensions" />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Renk</span>
                        <CreateInput name="Color" />
                      </div>
                      <ProgressBar isVisible={Loading} />
                      {!Loading &&
                        <BlueButton text="Kaydet" click={SaveOrder} />
                      }
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