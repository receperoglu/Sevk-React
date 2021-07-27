import React from "react";
export default function ArticelsTable({ Articels, GetOrders, isMobile }) {
  return (
    <div>
      {isMobile ? Mobile(Articels, GetOrders) : Desktop(Articels, GetOrders)}
    </div>
  );
}
function Mobile(Articels, GetOrders) {
  return (
    <table className="Articels table table-hover">
      <thead className=" cellName-112">
        <tr>
          <td className="col-md-12">
            Firma<br></br>Articel / Sipariş
          </td>
        </tr>
      </thead>
      <tbody>{MobileRender(Articels, GetOrders)}</tbody>
    </table>
  );
}
function MobileRender(Articels, GetOrders) {
  return Articels.map((a) => (
    <tr
      className="ArticelRow "
      id={"Articel" + a.id}
      key={a.id}
      onClick={() => GetOrders(a.id, a.CorpId, a.ArticelName, a.CustomerName)}
    >
      <td style={{ whiteSpace: "break-spaces" }}>
        {a.CustomerName}
        <br></br>
        <span className="ArticelId">AT-{a.id}</span>
        {a.ArticelName}
      </td>
    </tr>
  ));
}
function Desktop(Articels, GetOrders) {
  return (
    <table className="Articels table table-hover">
      <thead>
        <tr className=" ms-DetailsHeader-cellName cellName-112">
          <td className="col-md-6">Firma</td>
          <td className="col-md-6">Articel / Sipariş</td>
        </tr>
      </thead>
      <tbody>{DesktopRender(Articels, GetOrders)}</tbody>
    </table>
  );
}
function DesktopRender(Articels, GetOrders) {
  return Articels.map((a) => (
    <tr
      className="ArticelRow"
      id={"Articel" + a.id}
      key={a.id}
      onClick={() => GetOrders(a.id, a.CorpId, a.ArticelName, a.CustomerName)}
    >
      <td style={{ whiteSpace: "break-spaces" }}>{a.CustomerName}</td>
      <td>
        <span className="ArticelId">AT-{a.id}</span>
        {a.ArticelName}
      </td>
    </tr>
  ));
}
