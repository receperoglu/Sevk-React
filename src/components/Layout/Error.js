import React from "react";
import SevkConsumer from "../../store/context";
export default function Error() {
  return (
    <SevkConsumer>
      {(value) => {
        const { isError, Error } = value;
        return isError ? (
          <div style={{ top: 0, right: 0 }} className="ms-ContextualHost Error">
            <div className="ms-ContextualHost-main">
              <div className="ms-Callout  ms-Callout--OOBE">
                <div className="ms-Callout-header">
                  <div className="ms-Callout-title">
                    İşlem Tamamlanamıyor. <br />
                    {Error}
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
