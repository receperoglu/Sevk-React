import React, { useState,Fragment } from "react";
import HeadSection from "../Layout/HeadSection";
import MenuItem from "../Layout/MenuItem";
import SevkConsumer from "../../store/context";
import GridView from "./GridView";
import ListViewBody from "./ListViewBody";
import ListViewHeader from "./ListViewHeader";
export default function Index() {
  const [FilesVisible, setFilesVisible] = useState(true);
  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  return (
    <div>
      <SevkConsumer>
        {(value) => {
          const { Files, Vtype, dispatch } = value;
          const toggleVtype = () => {
            dispatch({ type: "toggleVtype", payload: null });
          };

          return (
            <div className="col-xs-12 col-md-12">
              <HeadSection
                click={toggleView}
                text="Dökümanlar"
                isVisible={FilesVisible}
              />
              <div className={FilesVisible ? "effect" : "hide"}>
                <div className="col-md-12 text-center">
                  <div className="col-md-12 text-center">
                    {Files.length === 0 ? (
                      " Dosya Eklenmemiş"
                    ) : (
                      <MenuItem
                        click={toggleVtype}
                        icon="FullScreen"
                        text=""
                        symbol=""
                        iconclassname="icon-144s"
                      />
                    )}
                  </div>
                </div>
                {Vtype ? (
                  <GridView />
                ) : (
                  <div className="od-ItemContent-list">
                    {Files.length === 0 ? null : (
                     <Fragment>
                        <ListViewHeader /> <ListViewBody />
                      </Fragment>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </SevkConsumer>
    </div>
  );
}