import React, { useState } from "react";
import HeadSection from "./Layout/HeadSection";
import SevkConsumer from "../store/context";
function TableHead(isMobile) {
  return (
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
  );
}
export default function WayBillList() {
  const [WayBillVisible, setWayBillVisible] = useState(true);
  const toggleWayBillList = () => {
    setWayBillVisible(!WayBillVisible);
  };
  const GetWayBillPhoto = (dispatch, Path) => {
    dispatch({
      type: "GetWayBillPhoto",
      payload: Path,
    });
  };
  return (
    <SevkConsumer>
      {(value) => {
        const { isMobile, Waybill, dispatch } = value;
        return Waybill.length === 0 ? null : (
          <div>
            <HeadSection
              click={toggleWayBillList}
              text="İrsaliyeler"
              isVisible={WayBillVisible}
            />
            <table
              className={
                WayBillVisible ? "MotionDetails table table-hover " : "hide"
              }
            >
              {TableHead()}
              <tbody aria-live="polite">
                {Waybill.map((w) => (
                  <tr key={w.id}>
                    <td> {w.Piece} </td>
                    <td> {w.Weight} </td>
                    <td> {w.Dimensions} </td>
                    <td className={isMobile ? "minifont " : ""}>{w.Color}</td>
                    <td>
                      <span
                        className="pointer"
                        onClick={GetWayBillPhoto.bind(
                          this,
                          dispatch,
                          w.WayBillId
                        )}
                      >
                        {w.CreatedDate}
                        <span className={isMobile ? "pointer" : "hide"}>
                          {w.WayBillId}
                        </span>
                      </span>
                    </td>
                    <td className={isMobile ? "hide" : "pointer"}>
                      <span
                        onClick={GetWayBillPhoto.bind(
                          this,
                          dispatch,
                          w.WayBillId
                        )}
                      >
                        {w.WayBillId}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }}
    </SevkConsumer>
  );
}