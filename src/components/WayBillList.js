import React, { Fragment, useState } from "react";
import HeadSection from "./Layout/HeadSection";
import SevkConsumer from "../store/context";
function TableHead() {
  return (
    <thead>
      <tr className="  cellName-112">
        <td>Adet</td>
        <td>KG</td>
        <td>Ölçü</td>
        <td>Renk</td>
        <td className="text-center">Tarih - İrsaliye</td>
      </tr>
    </thead>
  );
}
export default function WayBillList() {
  const [WayBillVisible, setWayBillVisible] = useState(true);
  const toggleWayBillList = () => {
    setWayBillVisible(!WayBillVisible);
  };
  return (
    <SevkConsumer>
      {(value) => {
        const { isMobile, Waybill, dispatch } = value;
        const GetWayBillPhoto = (Path) => {
          dispatch({
            type: "GetWayBillPhoto",
            payload: Path,
          });
        };
        return Waybill.length === 0 ? null : (
          <Fragment>
            <HeadSection
              click={toggleWayBillList}
              text="İrsaliyeler"
              isVisible={WayBillVisible}
            />
            <table className={WayBillVisible && "table table-hover "}>
              {TableHead()}
              <tbody aria-live="polite">
                {Waybill.map((w) => (
                  <tr key={w.id}>
                    <td> {w.Piece} </td>
                    <td> {w.Weight} </td>
                    <td> {w.Dimensions} </td>
                    <td className={isMobile ? "minifont " : ""}>{w.Color}</td>
                    <td
                      className="text-center cpointer"
                      onClick={() => GetWayBillPhoto(w.WayBillId)}
                    >
                      {w.CreatedDate.substring(0,15)} <b> {w.WayBillId}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fragment>
        );
      }}
    </SevkConsumer>
  );
}