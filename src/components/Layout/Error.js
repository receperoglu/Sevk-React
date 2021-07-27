import React, {  useEffect } from "react";
import CancelBtn from "../Tools/CancelBtn";
export default function Error({ isError, setisError }) {
  const CancelError = () => {
    setisError(false);
  };
  useEffect(() => {
    setTimeout(() => {
      CancelError();
    }, 2500);
  }, [isError]);
  return isError ? (
    <div
      style={{ top: 0, right: 0, position: "fixed" }}
      className="ms-ContextualHost effect is-positioned ms-ContextualHost--arrowLeft is-open "
    >
      <div className="ms-ContextualHost-main">
        <div className="ms-Callout  ms-Callout--OOBE">
          <CancelBtn cssclass="CallOutClose" click={CancelError} />
          <div className="ms-Callout-header">
            <div className="ms-Callout-title">
              Hata Oluştu,<br></br> Bu işlem Tamamlanamıyor
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
