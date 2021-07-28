import React, { useState } from "react";
import HeadSection from "./Layout/HeadSection";
export default function OrdersTable({
  ArticelName,
  Orders,
  CallOutonMouseMove,
  GetWaybillforOrder,
  isMobile,
  GetOrderEdit,
  isDetailActive,
}) {
  const [OrderVisible, setOrderVisible] = useState(true);
  const toggleOrderList = () => {
    setOrderVisible(!OrderVisible);
  };
  return isDetailActive ? (
    <div>
      <HeadSection
        click={toggleOrderList}
        text={ArticelName}
        isVisible={OrderVisible}
      />
      {Orders.length === 0 ? (
        ""
      ) : (
        <table className={OrderVisible ? "pointer table table-hover" : "hide"}>
          {OrderHead}
          <tbody aria-live="polite">
            {Orders.map((o) => (
              <tr key={o.id} id={"Order" + o.id}>
                <td>
                  <div onClick={CallOutonMouseMove.bind(this)}>
                    {GetCallOut(GetWaybillforOrder, o)}
                  </div>
                </td>
                <td>{o.Dimensions}</td>
                <td className={isMobile ? "minifont" : ""}>{o.Color}</td>
                <td>{o.ProductTypeName}</td>
                <td> {EditBtn(o, GetOrderEdit)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  ) : null;
}
function OrderHead() {
  return (
    <thead>
      <tr className="ms-DetailsHeader-cellName cellName-112">
        <td>Adet</td>
        <td>Ölçü</td>
        <td>Renk</td>
        <td>Tip</td>
        <td>#</td>
      </tr>
    </thead>
  );
}
function EditBtn(o, GetOrderEdit) {
  return (
    <i
      onClick={() =>
        GetOrderEdit(
          o.id,
          o.Dimensions,
          o.Color,
          o.Piece,
          o.ProductTypeName,
          o.Typeid
        )
      }
      data-icon-name="Edit"
      role="presentation"
      className="ms-Button-icon fleft icon-73"
    >
      
    </i>
  );
}
function GetCallOut(GetWaybillforOrder, o) {
  return (
    <span
      onClick={() =>
        GetWaybillforOrder(o.id, o.Dimensions, o.Color, o.ProductTypeName, this)
      }
    >
      {o.Piece} {o.Metrics}
    </span>
  );
}
