import React from "react";
import ProgressBar from "./Tools/ProgressBar";
import CancelBtn from "./Tools/CancelBtn";
import BlueButton from "./Tools/BlueButton";
import SevkConsumer from "../store/context";
import CreateOption from "./Tools/CreateOption";
import CreateInput from "./Tools/CreateInput";
export default function CreateArticelModal() {
  return (
    <SevkConsumer>
      {(value) => {
        const { SalesTypes, Corps, CreateArticelShow, dispatch, Loading } =
          value;
        const toggleCreateArticel = () => {
          dispatch({ type: "toggleCreateArticel", payload: false });
        };
        const SaveArticel = () => {
          dispatch({ type: "SaveArticel", payload: null });
        };
        return CreateArticelShow ? (
          <div id="ProductModal" className="ms-Layer animate ms-Layer--fixed layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <CancelBtn click={toggleCreateArticel} />
                <div className="ProductModalSub ProductOut">
                  <h4>Yeni Artikel Oluştur</h4>
                  <hr />
                  <CreateOption name="CorpId" Json={Corps} />
                  <div className="padd0 col-xs-12 fleft">
                    <span> Tipi</span>
                    <CreateOption name="SalesTypes" Json={SalesTypes} />
                  </div>
                </div>
                <div className="padd0 col-xs-12 ">
                  <span>Artikel </span>
                  <CreateInput name="ArticelName" />
                </div>
                <div className="padd0 col-xs-12 text-right fleft">
                  <ProgressBar isVisible={Loading} />
                  {!Loading  && <BlueButton click={SaveArticel} text="Kaydet" /> }
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