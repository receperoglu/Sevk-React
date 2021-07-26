import React, { useState } from "react";
import Arrow from "./Layout/Arrow";
export default function WayBillList({ isMobile, Waybill }) {
  const [WayBillVisible, setWayBillVisible] = useState(true);
  const toggleWayBillList = () => {
    setWayBillVisible(!WayBillVisible);
  };
  return Waybill.length === 0 ? null : (
    <div>
      <div onClick={() => toggleWayBillList()} className="PartHead">
        İrsaliyeler
        <Arrow Direction={WayBillVisible} />
      </div>
      <table
        className={WayBillVisible ? "MotionDetails table table-hover " : "hide"}
      >
        <thead>
          <tr className="alert alert-success">
            <td>Adet</td>
            <td>KG</td>
            <td>Ölçü</td>
            <td>Renk</td>
            <td>
              Tarih <br />
            </td>
            <td className={isMobile ? "hide" : ""}>
              İrsaliye <br />
            </td>
          </tr>
        </thead>
        <tbody aria-live="polite">
          {Waybill.map((w) => (
            <tr key={w.id}>
              <td> {w.Piece} </td>
              <td> {w.Weight} </td>
              <td> {w.Dimensions} </td>
              <td className={isMobile ? "minifont" : ""}>{w.Color}</td>
              <td className="pointer">
                <span>
                  {w.CreatedDate}
                  <span className={isMobile ? "" : "hide"}>
                    ( {w.WayBillId} )
                  </span>
                </span>
              </td>
              <td className={isMobile ? "hide" : ""}>
                <span> {w.WayBillId} </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
