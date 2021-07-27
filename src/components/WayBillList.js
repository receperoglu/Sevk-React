import React, { useState } from "react";
import HeadSection from "./Layout/HeadSection";
export default function WayBillList({ isMobile, Waybill, GetWayBillPhoto }) {
  const [WayBillVisible, setWayBillVisible] = useState(true);
  const toggleWayBillList = () => {
    setWayBillVisible(!WayBillVisible);
  };
  return Waybill.length === 0 ? null : (
    <div>
      <HeadSection
        click={toggleWayBillList}
        text="İrsaliyeler"
        isVisible={WayBillVisible}
      />
      <table
        className={WayBillVisible ? "MotionDetails table table-hover " : "hide"}
      >
        <thead>
          <tr className=" ms-DetailsHeader-cellName cellName-112">
            <td>Adet</td>
            <td>KG</td>
            <td>Ölçü</td>
            <td>Renk</td>
            <td>Tarih</td>
            <td className={isMobile ? "hide" : ""}>İrsaliye</td>
          </tr>
        </thead>
        <tbody aria-live="polite">
          {TrRender(GetWayBillPhoto, isMobile, Waybill)}
        </tbody>
      </table>
    </div>
  );
}
function TrRender(GetWayBillPhoto, isMobile, Waybill) {
  return Waybill.map((w) => (
    <tr key={w.id}>
      <td> {w.Piece} </td>
      <td> {w.Weight} </td>
      <td> {w.Dimensions} </td>
      <td className={isMobile ? "minifont " : ""}>{w.Color}</td>
      <td>
        <span
          className="pointer"
          onClick={() => {
            GetWayBillPhoto(w.WayBillId);
          }}
        >
          {w.CreatedDate}
          <span className={isMobile ? "pointer" : "hide"}>{w.WayBillId}</span>
        </span>
      </td>
      <td className={isMobile ? "hide" : "pointer"}>
        <span
          onClick={() => {
            GetWayBillPhoto(w.WayBillId);
          }}
        >
          {w.WayBillId}
        </span>
      </td>
    </tr>
  ));
}
