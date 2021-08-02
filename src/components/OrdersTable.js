import React, { useState } from "react";
import HeadSection from "./Layout/HeadSection";
import SevkConsumer from "../store/context";
import PicturePreview from "./Layout/PicturePreview";
import DocumentPreview from "./Layout/DocumentPreview";
import FilesComponent from "./ComponentFiles/ComponentFiles";
import WayBillList from "./WayBillList";
import Edit from "./ProductModal/Edit";
import LayoutRight from "./LayoutRight";
import LayoutNotes from "./LayoutNotes";
import Out from "./ProductModal/Out";
import CreateIcon from "./Tools/CreateIcon";
function TableHead() {
  return (
    <thead>
      <tr className=" cellName-112">
        <td>Adet</td>
        <td>Ölçü</td>
        <td>Renk</td>
        <td>Tip</td>
        <td>#</td>
      </tr>
    </thead>
  );
}
export default function OrdersTable() {
  const [OrderVisible, setOrderVisible] = useState(true);
  const toggleOrderList = () => {
    setOrderVisible(!OrderVisible);
  };
  return (
    <SevkConsumer>
      {(value) => {
        const { Orders,DetailActive,ArticelName,isMobile,dispatch,toggleVtype,Vtype,} = value;
        const toggleEdit = (Order) => {
          dispatch({
            type: "toggleEdit",
            payload: { statu: true, Order: Order },
          });
        };
        const Mouse_Position = (e, Order) => {
          dispatch({
            type: "Mouse_Position",
            payload: { x: e.pageY + "px", y: e.pageX + "px", Order: Order },
          });
        };
        return DetailActive ? (
          <div>
            <HeadSection
              click={toggleOrderList}
              text={ArticelName}
              isVisible={OrderVisible}
            />
            <table className={OrderVisible ? "table table-hover" : "hide"}>
              {TableHead()}
              <tbody>
                {Orders.map((o) => (
                  <tr key={o.id} id={"Order" + o.id}>
                    <td className="cpointer" onClick={(e) => Mouse_Position(e, o)}>
                      {o.Piece} {o.Metrics}
                    </td>
                    <td>{o.Dimensions}</td>
                    <td className={isMobile ? "minifont" : ""}>{o.Color}</td>
                    <td>{o.ProductTypeName}</td>
                    <td>
                      <CreateIcon click={() => toggleEdit(o)} symbol="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <FilesComponent/>
            <WayBillList />
            <PicturePreview />
            <DocumentPreview />           
            <LayoutRight />
            <LayoutNotes />
            <Edit />
            <Out />
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}