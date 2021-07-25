import React, { useState, useEffect } from "react";
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
  return (
    <div
      style={{ top: top, left: left }}
      className={
        isShowCallOut
          ? "ms-ContextualHost effect is-positioned ms-ContextualHost--arrowLeft is-open "
          : "hide"
      }
    >
      <div className="ms-ContextualHost-main">
        <div className="ms-Callout  ms-Callout--OOBE">
          <i
            data-icon-name="Cancel"
            onClick={() => CancelCallOut()}
            className="pointer ms-Button-icon icon-73 fright cwhite"
          >
            
          </i>
          <div className="ms-Callout-header">
            <div className="ms-Callout-title">
              {totalPiece === 0 ? " Henüz Sevkiyat Yapılmamış" : ""}
              <div className={totalPiece === 0 ? "hide" : ""}>
                {totalPiece} Adet.
                {LoopCount} Kez Sevk Edildi.
                <br />
                {Dimensions} {Color} <br />
                {ProductTypeName}
              </div>
            </div>
          </div>
          {WayBillTable(OneWayBill, GetWayBillPhoto, totalPiece)}
        </div>
      </div>
    </div>
  )
}

function WayBillTable(OneWayBill, GetWayBillPhoto, totalPiece) {
  return (
    <table className="table padd0  table-hover alert alert-primary">
      <thead className={totalPiece === 0 ? "hide" : ""}>
        <tr className="alert alert-success">
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
  )
}
