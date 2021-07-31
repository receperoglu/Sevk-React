import React from "react";
import ProgressBar from "./Tools/ProgressBar";
import CancelBtn from "./Tools/CancelBtn";
import BlueButton from "./Tools/BlueButton";
 import SevkConsumer from "../store/context";
export default function CreateArticelModal() {
  return (
    <SevkConsumer>
      {(value) => {
        const { SalesTypes, Corps, NewArticelCreate, dispatch, Loading } =
          value;
        const toggleCreateArticel = (dispatch) => {
          dispatch({ type: "toggleCreateArticel", payload: false });
        };       
        const SaveArticel = () => {
          dispatch({ type: "SaveArticel", payload: null });
        };
        const SelectChange = (input) => {
          dispatch({
            type: "Change" + input.target.name,
            payload: input.target.value,
          });
        };
        const InputChange = (input) => {
          dispatch({
            type: "Change" + input.target.name,
            payload: input.target.value,
          });
        };
        return NewArticelCreate ? (
          <div id="ProductModal" className="ms-Layer ms-Layer--fixed layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleCreateArticel} />
                <div className="ProductModalSub ProductOut">
                  <h4>Yeni Artikel Oluştur</h4>
                  <hr />
                  <select
                    className="ms-TextField-field"
                    name="CorpId"
                    onChange={SelectChange}
                  >
                    {Corps.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.Name}
                      </option>
                    ))}
                  </select>
                  <div className="padd0 col-xs-12 fleft">
                    <span> Tipi</span>
                    <select
                      className="ms-TextField-field"
                      name="SalesType"
                      onChange={SelectChange}
                    >
                      {SalesTypes.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="padd0 col-xs-12 ">
                    <span>Artikel </span>
                    <input
                      type="text"
                      name="ArticelName"
                      onChange={InputChange}
                      className="ms-TextField-field"
                    />
                  </div>
                  <div className="padd0 col-xs-12 text-right fleft">
                    <ProgressBar isVisible={Loading} />
                    {Loading ? null : (
                      <BlueButton click={SaveArticel} text="Kaydet" />
                    )}
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
