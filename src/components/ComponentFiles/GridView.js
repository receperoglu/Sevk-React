import React from "react";
import SevkConsumer from "../../store/context";
import { ico, Thumb } from "./../Tools/Urls";
import Download from "./Download";
import moment from "moment";

function Grid(Delete, hideDelete, showDelete, F, showPreview, url, Type) {
  return (
    <div
      onMouseOut={() => hideDelete(F.Id)}
      onMouseOver={() => showDelete(F.Id)}
      className="Container_grid"
    >
      <div onClick={() => showPreview(F, Type)} className="Grid_Detail">
        <a className="LinkContainer">
          <div className="FileTypeIcon ImageContainer">
            <img className="FileTypeIcon-icon" alt="" src={url} />
          </div>
          <span className="FileNameContainer">
            <span>{F.FileName}</span>
          </span>
          <span className="DateContainer">
            {
              moment(F.CreatedDate).format('d.mm.yy hh:mm')
            }
          </span>
        </a>
      </div>
      <i
        id={`Delete${F.Id}`}
        onClick={() => Delete(F.Id)}
        className="Delete controlIcons"
      >
        
      </i>
      <Download File={F} />
    </div>
  );
}
export default function GridView() {
  return (
    <SevkConsumer>
      {(value) => {
        const { Files, Loading, dispatch } = value;
        const showDelete = (identity) => {
          let id = "Delete" + identity;
          let deletebtn = document.getElementById(id);
          deletebtn.style.display = "block";
        };
        const hideDelete = (identity) => {
          let id = "Delete" + identity;
          let deletebtn = document.getElementById(id);
          deletebtn.style.display = "none";
        };
        const showPreview = (File, type) => {
          dispatch({
            type: "show" + type + "Preview",
            payload: File,
          });
        };
        const Delete = (id) => {
          dispatch({
            type: "DeleteFile",
            payload: id,
          });
        };
        return (
          <div className="col-md-12">

            {Loading && Files.length === 0 && gridDivSkeleton()}
            {Files.map((F) => (

              <div key={F.Id} className="col-md-3 col-lg-2 col-xs-4 padd0">
                {F.Type === "Picture"
                  ? Grid(
                    Delete,
                    hideDelete,
                    showDelete,
                    F,
                    showPreview,
                    Thumb + F.Path,
                    "Picture"
                  )
                  : Grid(
                    Delete,
                    hideDelete,
                    showDelete,
                    F,
                    showPreview,
                    `${ico + F.ext}.png`,
                    "Document"
                  )}
              </div>
            ))}
          </div>
        );
      }}
    </SevkConsumer>
  );
}

function gridDivSkeleton() {
  const numItems = 5; // Toplam öğe sayısı

  const skeletonItems = Array.from({ length: numItems }, (_, index) => (
    <div key={index} className="col-md-3 col-lg-2 col-xs-4 padd0 loadingData">
      <div className="Container_grid">
        <div className="Grid_Detail">
          <a className="LinkContainer">
            <div className="FileTypeIcon ImageContainer">
              <img
                className="FileTypeIcon-icon"
                alt=""
                src="https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201207.001/assets/item-types/256/pdf.png"
              />
            </div>
            <span className="FileNameContainer blur-text">
              <span>Teknolojik Degisim ve Baskinin Ustesinden Gelmek</span>
            </span>
            <span className="DateContainer blur-text">5.06.2023 07:06</span>
          </a>
        </div>
       
          <i data-icon-name="Download" className="FabricMDL2Icons">
            
          </i>
      
      </div>
    </div>
  ));

  return <React.Fragment>{skeletonItems}</React.Fragment>;
}
