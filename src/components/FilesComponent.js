import React, { useEffect, useState } from "react";
import HeadSection from "./Layout/HeadSection";
import MenuItem from "./Layout/MenuItem";

export const BaseUrl = "https://recep.space/abi/dosyalar/";
export const ThumbUrl = "https://recep.space/thumbs/";
export const icoUrl =
  "https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201207.001/assets/item-types/64/";

export default function FilesComponent({
  Files,
  showPicturePreview,
  showDocumentPreview,
  toggleVtype,
  Vtype,
}) {
  const [FilesVisible, setFilesVisible] = useState(true);
  const [documents, setdocuments] = useState([]);
  const [pictures, setpictures] = useState([]);

  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  useEffect(() => {
    setdocuments(Files.filter((f) => f.FileType === "Document"));
    setpictures(Files.filter((f) => f.FileType === "Picture"));
  }, [Files]);
  return (
    <div className={Files.length === 0 ? "hide" : "col-xs-12 col-md-12"}>
      <HeadSection
        click={toggleView}
        text="Dökümanlar"
        isVisible={FilesVisible}
      />
      <div className={FilesVisible ? "effect" : "hide"}>
        {ChangeView(toggleVtype)}
        {Vtype ? (
          <div>
            {Pictures(pictures, showPicturePreview)}
            {Documents(documents, showDocumentPreview)}
          </div>
        ) : (
          <div className="od-ItemContent-list">
            {ListViewHeader}
            {ListViewRender(Files, showPicturePreview, showDocumentPreview)}
          </div>
        )}
      </div>
    </div>
  );
}

function ListViewHeader() {
  return (
    <div className="css-53 ms-DetailsHeader root-76">
      <div className="root-109 cellName-112 flex_half"></div>
      <div className="root-109 cellName-112 flex_fold">Dosya Adı</div>
      <div className="root-109 cellName-112 flex_one">Tarih</div>
      <div className="root-109 cellName-112 flex_half">İndir</div>
    </div>
  );
}
function ListViewRender(Files, showPicturePreview, showDocumentPreview) {
  return Files.map((file) => (
    <div key={file.id} className="effect   ms-DetailsRow">
      <div className="displayflex">
        <div className="flex_half">
          <img
            className="FileTypeIcon-icon"
            alt=""
            onClick={() => {
              file.FileType === "Picture"
                ? showPicturePreview(BaseUrl + file.Path, file.Path)
                : showDocumentPreview(file);
            }}
            src={
              file.FileType === "Picture"
                ? `${icoUrl}/photo.png`
                : `${icoUrl + file.ext.substring(1)}.png`
            }
          />
        </div>
        <div className="flex_fold">
          <span className="flex1">{file.FileName}</span>
        </div>
        <div className="flex1">{file.CreatedDate}</div>
        <div className="flex_half text-right">
          {DownloadBtn(BaseUrl + file.Path)}
        </div>
      </div>
    </div>
  ));
}

function Documents(documents, showDocumentPreview) {
  return document.length === 0 ? null : (
    <div>
      <h2 className="padd0 col-xs-12">Belgeler</h2>
      {documents.map((f) => (
        <div
          key={f.id}
          className="DocumentContainerDiv effect col-md-2 col-xs-4"
        >
          <div className="FileBorder">
            <div
              style={{
                backgroundImage: `url(${icoUrl + f.ext.substring(1)}.png)`,
              }}
              className="padd0 filepreview "
            >
              {FileName(showDocumentPreview, f)}
              {DownloadBtn(BaseUrl + f.Path)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function DownloadBtn(Link) {
  return (
    <a href={Link} target="blank">
      <i data-icon-name="Download" class="FabricMDL2Icons">
        
      </i>
    </a>
  );
}
function FileName(view, f) {
  return (
    <span
      className="FileLink "
      onClick={() => {
        view(f);
      }}
    >
      {f.FileName.substring(0, 12)}
    </span>
  );
}
function Pictures(pictures, showPicturePreview) {
  return pictures.length === 0 ? null : (
    <div>
      <h2 className="padd0 col-xs-12"> Resimler</h2>
      {pictures.map((f) => (
        <div
          key={f.id}
          className="DocumentContainerDiv effect col-md-2 col-xs-4"
        >
          <div className="FileBorder">
            <div
              onClick={() => {
                showPicturePreview(BaseUrl + f.Path, f.Path);
              }}
              style={{
                backgroundImage: `url(${ThumbUrl + f.Path})`,
              }}
              className="PictureDiv"
            ></div>
            {DownloadBtn(BaseUrl + f.Path)}
            {FileName(showPicturePreview, f)}
          </div>
        </div>
      ))}
    </div>
  );
}
function ChangeView(toggleVtype) {
  return (
    <div className="col-md-12 text-center">
      <MenuItem
        click={toggleVtype}
        icon="FullScreen"
        text=""
        symbol=""
        iconclassname="icon-144s"
      />
    </div>
  );
}
