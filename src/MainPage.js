import React from "react";
import SevkConsumer from "./store/context";
import Error from "./components/Layout/Error";
import TopBar from "./components/TopBar/TopBar";
import Out from "./components/ProductModal/Out";
import Confirm from "./components/Layout/Confirm";
import Edit from "./components/ProductModal/Edit";
import LayoutRight from "./components/LayoutRight";
import LayoutNotes from "./components/LayoutNotes";
import LayoutTheme from "./components/LayoutTheme";
import OrdersTable from "./components/OrdersTable";
import Callout from "./components/Layout/CallOut";
import NewModal from "./components/ProductModal/New";
import ArticelsTable from "./components/ArticelsTable";
import ProgressBar from "./components/Tools/ProgressBar";
import PicturePreview from "./components/Layout/PicturePreview";
import CreateArticelModal from "./components/CreateArticelModal";
import DocumentPreview from "./components/Layout/DocumentPreview";
import ShippmentModal from "./components/ShippmentModal";
export default function MainPage() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Loading, isMobile, ChangeView, DetailActive } = value;
        return (
          <div className="padd0 col-md-12">
            <TopBar />
            <ProgressBar isVisible={Loading} />
            <div className={isMobile && DetailActive ? "hide" : ""}>
              <div
                id="FirstScreen"
                className={ChangeView ? "hide" : "padd0 WizardArea col-md-12"}
              >
                <ArticelsTable isMobile={isMobile} />
              </div>
            </div>
            <div
              id="SecondScreen"
              className={
                isMobile
                  ? "col-xs-12 padd0 WizardArea"
                  : ChangeView
                    ? "col-md-12 padd0 WizardArea"
                    : "col-md-8 padd0 WizardArea"
              }
            >
              <OrdersTable />
            </div>
            <CreateArticelModal />
            <Callout />
            <NewModal />
            <Error />
            <PicturePreview />
            <DocumentPreview />
            <LayoutRight />
            <LayoutNotes />
            <LayoutTheme />
            <Edit />
            <Out />
            <Confirm />
            <ShippmentModal />

          </div>

        );
      }}
    </SevkConsumer>
  );
}
