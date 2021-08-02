import React from "react";
import SevkConsumer from "../store/context";
function TableHead(isMobile) {
  return (
    <thead className="cellName-112">
      {isMobile ? (
        <tr>
          <td className="col-md-12">
            Firma
            <br />
            Articel / Sipariş
          </td>
        </tr>
      ) : (
        <tr className="flex_one">
          <td className="flex_one">Firma</td>
          <td className="flex_one">Articel / Sipariş</td>
        </tr>
      )}
    </thead>
  );
}
export default function ArticelsTable() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Articels, isMobile, dispatch } = value;
        const GetOrder = (Order) => {
          dispatch({ type: "Get_Order", payload: Order });
        };
        return (
          <table className="Articels table table-hover">
            {TableHead(isMobile)}
            <tbody>
              {Articels.map((a) => (
                <tr
                  className="ArticelRow flex_one"
                  id={"Articel" + a.id}
                  key={a.id}
                  onClick={() => GetOrder(a)}
                >
                  {isMobile ? (
                    <td className="break-spaces">
                      {a.CustomerName}
                      <br />
                      <span className="ArticelId">AT-{a.id}</span>
                      {a.ArticelName}
                    </td>
                  ) : (
                    <td className="flex_one break-spaces">
                      <div className="flex_one">{a.CustomerName}</div>
                      <div className="flex_one">
                        <span className="ArticelId">AT-{a.id}</span>
                        {a.ArticelName}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        );
      }}
    </SevkConsumer>
  );
}
