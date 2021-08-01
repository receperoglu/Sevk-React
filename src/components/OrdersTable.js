import React, { useState } from "react";
import HeadSection from "./Layout/HeadSection";
import SevkConsumer from "../store/context";
import PicturePreview from "./Layout/PicturePreview";
import DocumentPreview from "./Layout/DocumentPreview";
import FilesComponent from "./FilesComponent/Index";
import WayBillList from "./WayBillList";
import Edit from "./ProductModal/Edit";
import LayoutRight from "./LayoutRight";
import LayoutNotes from "./LayoutNotes";
import Out from "./ProductModal/Out";
function TableHead() {
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
export default function OrdersTable() {
  const [OrderVisible, setOrderVisible] = useState(true);
  const toggleOrderList = () => {
    setOrderVisible(!OrderVisible);
  };
  return (
    <SevkConsumer>
      {(value) => {
        const {
          Orders,
          DetailActive,
          ArticelName,
          isMobile,
          dispatch,
          toggleVtype,
          Vtype,
        } = value;
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
            <table
              className={OrderVisible ? "pointer table table-hover" : "hide"}
            >
              {TableHead()}
              <tbody aria-live="polite">
                {Orders.map((o) => (
                  <tr key={o.id} id={"Order" + o.id}>
                    <td>
                      <div onClick={(e) => Mouse_Position(e, o)}>
                        {o.Piece} {o.Metrics}
                      </div>
                    </td>
                    <td>{o.Dimensions}</td>
                    <td className={isMobile ? "minifont" : ""}>{o.Color}</td>
                    <td>{o.ProductTypeName}</td>
                    <td>
                      <i
                        onClick={() => {
                          toggleEdit(o);
                        }}
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
            <FilesComponent toggleVtype={toggleVtype} Vtype={Vtype} />
            <WayBillList />
            <PicturePreview />
            <DocumentPreview />
            <Edit />
            <LayoutRight />
            <LayoutNotes />
            <Out />
       
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}