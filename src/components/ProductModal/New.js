import React from "react";
import ProgressBar from "../Tools/ProgressBar";
import CancelBtn from "../Tools/CancelBtn";
import BlueButton from "../Tools/BlueButton";
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
        const InputChange = (input) => {
          dispatch({
            type: "Change" + input.target.name,
            payload: input.target.value,
          });
        };
        const SelectChange = (e) => {
          dispatch({ type: "Change" + e.target.name, payload: e.target.value });
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
                        <select
                          className="ms-TextField-field"
                          name="ProductType"
                          onChange={SelectChange}
                        >
                          {ProductTypes.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.Name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Adet</span>
                        <input
                          type="number"
                          name="Piece"
                          onChange={InputChange}
                          className="Piece ms-TextField-field"
                        />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Ölçü</span>
                        <input
                          type="text"
                          name="Dimensions"
                          onChange={InputChange}
                          className="Dim ms-TextField-field"
                        />
                      </div>
                      <div className="col-xs-12 fleft">
                        <span>Renk</span>
                        <input
                          type="text"
                          name="Color"
                          onChange={InputChange}
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
