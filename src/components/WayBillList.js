import React from "react";

export default function WayBillList(props) {
  return (
    <table className="MotionDetails table table-hover ">
   <thead>
      <tr className="alert alert-success">
         <td >Adet</td>
         <td  >Ağırlık</td>
         <td  >Ölçü</td>
         <td  >Renk</td>
         <td  >Tarih</td>
         <td  >İrsaliye</td>
      </tr>
   </thead>
   <tbody aria-live="polite">
   {props.Waybill.map((w) => (
      <tr key= {w.id}  >
         <td> {w.Piece} </td>
         <td  >  {w.Weight}  KG </td>
         <td> {w.Dimensions} </td>
         <td> {w.Color} </td>
         <td> {w.CreatedDate} </td>
         <td className="pointer"><span  >  {w.WayBillId}  </span></td>
      </tr>
      ))}
   </tbody>
</table>
  );
}
