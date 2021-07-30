import React from "react";
import CreateArticelModal from "./components/CreateArticelModal";
import DocumentPreview from "./components/Layout/DocumentPreview";
import PicturePreview from "./components/Layout/PicturePreview";
import FilesComponent from "./components/FilesComponent";
import ProgressBar from "./components/Tools/ProgressBar";
import ArticelsTable from "./components/ArticelsTable";
import EditModal from "./components/ProductModal/Edit";
import NewModal from "./components/ProductModal/New";
import OutModal from "./components/ProductModal/Out";
import LayoutRight from "./components/LayoutRight";
import OrdersTable from "./components/OrdersTable";
import WayBillList from "./components/WayBillList";
import LayoutNote from "./components/LayoutNotes";
import CallOut from "./components/Layout/CallOut";
import TopBar from "./components/Layout/TopBar";
import Error from "./components/Layout/Error";
import SevkConsumer from "./store/context";
export default function MainPage() {
  return (
    <SevkConsumer>
      {(value) => {
        const {
          Loading,
          isMobile,
          ChangeView,
          DetailActive,
          toggleVtype,
          Vtype,
          isError,
        } = value;
        return (
          <div className="padd0 col-md-12">
            <TopBar />
            <ProgressBar isVisible={Loading} />
            <div className={isMobile && DetailActive ? "hide" : ""}>
              <div
                id="FirstScreen"
                className={ChangeView ? "hide" : "padd0 col-md-12"}
              >
                <ArticelsTable isMobile={isMobile} />
              </div>
            </div>
            <div
              id="SecondScreen"
              className={
                isMobile
                  ? "col-xs-12 padd0"
                  : ChangeView
                  ? "col-md-12 padd0"
                  : "col-md-8 padd0"
              }
            >
              <OrdersTable />
              <FilesComponent toggleVtype={toggleVtype} Vtype={Vtype} />
              <WayBillList />
            </div>
            <LayoutRight />
            <LayoutNote />
            <CreateArticelModal />
            <NewModal />
            <EditModal />
            <OutModal />
            <CallOut />
            <Error isError={isError} />
            <PicturePreview />
            <DocumentPreview />
          </div>
        );
      }}
    </SevkConsumer>
  );
}
