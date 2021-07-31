import React from "react";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
export default function Callout() {
  return (
    <SevkConsumer>
      {(value) => {
        const {
          OneWaybill,
          Order,
          ShowCallOut,
          x,
          y,
          waybillPiece,
          waybillWeight,
          LoopCount,
          dispatch,
        } = value;
        const GetWayBillPhoto = (Path) => {
          dispatch({
            type: "GetWayBillPhoto",
            payload: Path,
          });
        };
        const CancelCallOut = () => {
          dispatch({
            type: "CancelCallOut",
            payload: null,
          });
        };
        return ShowCallOut ? (
          <div style={{ top: x, left: y }} className="ms-ContextualHost ">
            <div className="ms-ContextualHost-main">
              <div className="ms-Callout  ms-Callout--OOBE">
                <CancelBtn cssclass="CallOutClose" click={CancelCallOut} />
                <div className="ms-Callout-header">
                  <div className="ms-Callout-title">
                    {waybillPiece === 0 ? (
                      "Henüz Sevkiyat Yapılmamış"
                    ) : (
                      <span>
                        {LoopCount} Kez Sevk Edildi.
                        <br />
                        {waybillPiece} Adet.
                        <br />
                        {waybillWeight} KG
                        <br />
                        {Order.Dimensions} {Order.Color} <br />
                        {Order.ProductTypeName}
                      </span>
                    )}
                  </div>
                </div>
                {waybillPiece === 0 ? null : (
                  <table className="table padd0">
                    {TableHead()}
                    <tbody>
                      {OneWaybill.map((w) => (
                        <tr key={w.id}>
                          <td>{w.Piece} AD</td>
                          <td>{w.Weight} KG </td>
                          <td> {w.CreatedDate} </td>
                          <td
                            className="cpointer"
                            onClick={() => GetWayBillPhoto(w.WayBillId)}
                          >
                            {w.WayBillId}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
function TableHead() {
  return (
    <thead>
      <tr className=" ms-DetailsHeader-cellName cellName-112">
        <td>Adet</td>
        <td>Ağırlık</td>
        <td>Tarih</td>
        <td>İrsaliye</td>
      </tr>
    </thead>
  );
}
