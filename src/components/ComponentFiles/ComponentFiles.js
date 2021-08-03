import React, { useState, Fragment } from "react";
import HeadSection from "../Layout/HeadSection";
import MenuItem from "../TopBar/MenuItem";
import SevkConsumer from "../../store/context";
import GridView from "./GridView";
import ListViewBody from "./ListViewBody";
import ListViewHeader from "./ListViewHeader";
export default function ComponentFiles() {
  const [FilesVisible, setFilesVisible] = useState(true);
  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  return (
       <SevkConsumer>
        {(value) => {
          const { Files, Vtype, dispatch } = value;
          const toggleVtype = () => {
            dispatch({ type: "toggleVtype", payload: null });
          };

          return (
            <Fragment>
              <HeadSection
                click={toggleView}
                text="Dökümanlar"
                isVisible={FilesVisible}
              />
              <div className={FilesVisible ? "effect" : "hide"}>              
                  <div className="col-md-12 text-center">
                    {Files.length === 0 ? (
                      " Dosya Eklenmemiş"
                    ) : (
                      <MenuItem
                        click={toggleVtype}
                        text=""
                        symbol=""
                        iconclassname="FabricMDL2Icons-0"
                      />
                    )}
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
            </Fragment>
          );
        }}
      </SevkConsumer>
   );
}