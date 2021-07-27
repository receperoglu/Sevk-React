import React from "react";
export default function ArticelsTable({ Articels, GetOrders, isMobile }) {
  return (
    <table className="Articels table table-hover">
      <thead className=" cellName-112">
        {isMobile ? (
          <tr>
            <td className="col-md-12">
              Firma<br></br>Articel / Sipariş
            </td>
          </tr>
        ) : (
          <tr className="flex_one">
            <td className="flex_one">Firma</td>
            <td className="flex_one">Articel / Sipariş</td>
          </tr>
        )}
      </thead>
      <tbody>
        {Articels.map((a) => (
          <tr
            className="ArticelRow flex_one"
            id={"Articel" + a.id}
            key={a.id}
            onClick={() =>
              GetOrders(a.id, a.CorpId, a.ArticelName, a.CustomerName)
            }
          >
            {isMobile ? (
              <td style={{ whiteSpace: "break-spaces" }}>
                {a.CustomerName}
                <br></br>
                <span className="ArticelId">AT-{a.id}</span>
                {a.ArticelName}
              </td>
            ) : (
              <td className="flex_one" style={{ whiteSpace: "break-spaces" }}>
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
}
