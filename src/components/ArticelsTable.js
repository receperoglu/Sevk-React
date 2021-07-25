import React from "react";
export default function ArticelsTable({ Articels, GetOrders, isMobile }) {
  return <div>{isMobile ? Mobile(Articels,GetOrders) : Desktop(Articels,GetOrders)}</div>;
}
function Mobile(Articels,GetOrders) {
  return (
    <table className="Articels table table-hover">
      <thead>
        <tr className="tablehead">
          <td className="col-md-12">
            Firma<br></br>Articel / Sipariş
          </td>
        </tr>
      </thead>
      <tbody>
        {Articels.map((a) => (
          <tr
            className="ArticelRow"
            id={"Articel" + a.id}
            key={a.id}
            onClick={() =>
              GetOrders(a.id, a.CorpId, a.ArticelName, a.CustomerName)
            }
          >
            <td style={{ whiteSpace: "break-spaces" }}>
              {a.CustomerName}
              <br></br>
              <span className="ArticelId">AT-{a.id}</span>
              {a.ArticelName}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
function Desktop(Articels,GetOrders) {
  return (
    <table className="Articels table table-hover">
      <thead>
        <tr className="tablehead">
          <td className="col-md-6">Firma</td>
          <td className="col-md-6">Articel / Sipariş</td>
        </tr>
      </thead>
      <tbody>
        {Articels.map((a) => (
          <tr
            className="ArticelRow"
            id={"Articel" + a.id}
            key={a.id}
            onClick={() =>
              GetOrders(a.id, a.CorpId, a.ArticelName, a.CustomerName)
            }
          >
            <td style={{ whiteSpace: "break-spaces" }}>{a.CustomerName}</td>
            <td>
              <span className="ArticelId">AT-{a.id}</span>
              {a.ArticelName}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
