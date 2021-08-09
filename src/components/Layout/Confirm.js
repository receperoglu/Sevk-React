import React from "react";
import SevkConsumer from "../../store/context";
import BlueButton from "../Tools/BlueButton";
import ProgressBar from "../Tools/ProgressBar";
import CreateIcon from  "./../Tools/CreateIcon"
export default function Confirm() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Loading, dispatch, ShowConfirm,Error } = value;
        const ConfirmAccept = () => {
          dispatch({
            type: "ConfirmAccept"
          });
        };
        const ConfirmToggle = () => {
          dispatch({ type: "ConfirmToggle", payload: false });
        };
        return ShowConfirm ? (
          <div className="ms-Layer  ms-Layer--fixed effect layer-351">
            <div className="root-345">
              <div className="ms-Dialog-main  main-412">
                <div className="ms-Dialog-header header-390">
                  <div className="ms-Dialog-title title-393">
                  <CreateIcon attr="FabricMDL2Icons-0"  symbol="" />
                   Emin misiniz ?
                  </div>
                </div>
                <div className="ms-Dialog-inner inner-391">
                  <div className="ms-Dialog-content innerContent-392">
                    <p className="ms-Dialog-subText subText-389">
                      {Loading ? (
                        <span>Lütfen Bekleyin</span>
                      ) : (
                        <span>
                        {Error}
                        </span>
                      )}
                    </p>
                  </div>
                  <ProgressBar isVisible={Loading} />
                  {Loading ? null : (
                    <div className="text-center">
                      <span className="action-396">
                        <BlueButton text="Evet" click={ConfirmAccept} />
                      </span>
                      <span className="action-396">
                        <button
                          onClick={ConfirmToggle}
                          type="button"
                          className="root-376"
                        >
                          Vazgeç
                        </button>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
