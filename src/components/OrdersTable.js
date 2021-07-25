import React, { useState } from "react";
import Arrow from "./Tools/Arrow";
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
      <div
        onClick={() => toggleOrderList()}
        className="ArticelNameHead SSOrder text-capitalize PartHead"
      >
        {ArticelName}
        <Arrow Direction={OrderVisible} />
      </div>
      {Orders.length === 0 ? (
        ""
      ) : (
        <table
          className={
            OrderVisible ? "pointer OrderDetailTable table table-hover" : "hide"
          }
        >
          <thead>
            <tr className="alert alert-success">
              <td>Adet</td>
              <td>Ölçü</td>
              <td>Renk</td>
              <td>Tip</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody aria-live="polite">
            {Orders.map((o) => (
              <tr key={o.id} id={"Order" + o.id}>
                <td>
                  <div onClick={CallOutonMouseMove.bind(this)}>
                    <span
                      onClick={() =>
                        GetWaybillforOrder(
                          o.id,
                          o.Dimensions,
                          o.Color,
                          o.ProductTypeName,
                          this
                        )
                      }
                    >
                      {o.Piece} {o.Metrics}
                    </span>
                  </div>
                </td>
                <td>{o.Dimensions}</td>
                <td className={isMobile ? "minifont" : ""}>{o.Color}</td>
                <td>{o.ProductTypeName}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  ) : null;
}
