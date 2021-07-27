import React, { useState, useEffect } from "react";
import CancelBtn from "../Tools/CancelBtn";
export default function CallOut({
  isShowCallOut,
  top,
  left,
  CancelCallOut,
  Dimensions,
  Color,
  ProductTypeName,
  OneWayBill,
  GetWayBillPhoto,
}) {
  const [totalPiece, settotalPice] = useState(0);
  const [LoopCount, setLoopCount] = useState(0);
  useEffect(() => {
    var waybillPiece = 0;
    OneWayBill.map((w) => (waybillPiece = +parseInt(w.Piece, 10)));
    settotalPice(waybillPiece);
    setLoopCount(OneWayBill.length);
  }, [OneWayBill]);
  return isShowCallOut ? (
    <div
      style={{ top: top, left: left }}
      className="ms-ContextualHost effect is-positioned ms-ContextualHost--arrowLeft is-open "
    >
      <div className="ms-ContextualHost-main">
        <div className="ms-Callout  ms-Callout--OOBE">
          <CancelBtn cssclass="CallOutClose" click={CancelCallOut} />
          <div className="ms-Callout-header">
            <div className="ms-Callout-title">
              {totalPiece === 0 ? (
                "Henüz Sevkiyat Yapılmamış"
              ) : (
                <span>
                  {totalPiece} Adet.
                  {LoopCount} Kez Sevk Edildi.
                  <br />
                  {Dimensions} {Color} <br />
                  {ProductTypeName}
                </span>
              )}
            </div>
          </div>
          {WayBillTable(OneWayBill, GetWayBillPhoto, totalPiece)}
        </div>
      </div>
    </div>
  ) : null;
}

function WayBillTable(OneWayBill, GetWayBillPhoto, totalPiece) {
  return totalPiece === 0 ? null : (
    <table className="table padd0  table-hover alert alert-primary">
      <thead>
        <tr className=" ms-DetailsHeader-cellName cellName-112">
          <td>Adet</td>
          <td>Ağırlık</td>
          <td>Tarih</td>
          <td>İrsaliye</td>
        </tr>
      </thead>
      <tbody>
        {OneWayBill.map((w) => (
          <tr key={w.id}>
            <td>
              <b> </b> {w.Piece}
            </td>
            <td>{w.Weight} KG </td>
            <td> {w.CreatedDate} </td>
            <td>
              <span onClick={() => GetWayBillPhoto(w.WayBillId)}>
                {w.WayBillId}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
