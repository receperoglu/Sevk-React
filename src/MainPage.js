import React from "react";
import CreateArticelModal from "./components/CreateArticelModal";
import Callout from "./components/Layout/CallOut";
import ProgressBar from "./components/Tools/ProgressBar";
import ArticelsTable from "./components/ArticelsTable";
import NewModal from "./components/ProductModal/New";
import OrdersTable from "./components/OrdersTable";
import TopBar from "./components/Layout/TopBar";
import Error from "./components/Layout/Error";
import SevkConsumer from "./store/context";
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
          </div>
        );
      }}
    </SevkConsumer>
  );
}
