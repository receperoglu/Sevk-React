import React from "react";
import ProgressBar from "./Tools/ProgressBar";
import CancelBtn from "./Tools/CancelBtn";
import BlueButton from "./Tools/BlueButton";
import CreateOption from "./Tools/CreateOption";
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
        const ChangeCorpId = (input) => {
          dispatch({ type: "ChangeCorpId", payload: input });
        };
        const ChangeSalesType = (input) => {
          dispatch({ type: "ChangeSalesType", payload: input });
        };
        const ChangeArticelName = (input) => {
          dispatch({ type: "ChangeArticelName", payload: input });
        };
        const SaveArticel = () => {
          dispatch({ type: "ChangeWeight", payload: null });
        };
        return NewArticelCreate ? (
          <div id="ProductModal" className="ms-Layer ms-Layer--fixed layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleCreateArticel} />
                <div className="ProductModalSub ProductOut">
                  <h4>Yeni Artikel Oluştur</h4>
                  <hr />
                  <CreateOption change={ChangeCorpId} Json={Corps} />
                  <div className="padd0 col-xs-12 fleft">
                    <span> Tipi</span>
                    <CreateOption change={ChangeSalesType} Json={SalesTypes} />
                  </div>
                  <div className="padd0 col-xs-12 ">
                    <span>Artikel </span>
                    <input
                      type="text"
                      onChange={ChangeArticelName}
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
