import React, { useEffect, useState } from "react";
import Arrow from "./Tools/Arrow";

export default function FilesComponent({ Files, showPicturePreview }) {
  const [FilesVisible, setFilesVisible] = useState(true);
  const [documents, setdocuments] = useState([]);
  const [pictures, setpictures] = useState([]);

  const BaseUrl = "http://recep.space/abi/dosyalar/";
  const ThumbUrl = "http://recep.space/thumbs/";
  const icoUrl = "http://recep.space/abi/css/img/";
  const DocumentViewUrl =
    "https://view.officeapps.live.com/op/embed.aspx?src=http://recep.space/abi/dosyalar/";
  const toggleView = () => {
    setFilesVisible(!FilesVisible);
  };
  
  useEffect(() => {
     setdocuments(Files.filter((f) => "Document" == f.FileType));
     setpictures(Files.filter((f) => "Picture" == f.FileType));

   }, [Files]);

  return (
    <div className={Files.length === 0 ? "hide" : "col-xs-12 col-md-12"}>
      <div
        className="PartHead"
        onClick={() => {
          toggleView();
        }}
      >
        Dökümanlar
        <Arrow Direction={FilesVisible} />
      </div>
      <div className={FilesVisible ? "effect" : "hide"}>
        
      <h2 className="padleft5">Resimler</h2>

          {pictures.map((f) => (
            <div
              key={f.id}
              className="DocumentContainerDiv col-md-2 col-xs-4  "
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
                <a href={BaseUrl + f.Path} target="blank">
                  {f.FileName.substring(0, 12)}
                </a>
              </div>
            </div>
          ))}
          <h2 className="padleft5">Belgeler</h2>
          {documents.map((f) => (
            <div key={f.id} className="DocumentContainerDiv col-md-2 col-xs-4">
              <div className="FileBorder">
                <div
                  style={{
                    backgroundImage: `url(${icoUrl + f.ext.substring(1)}.png)`,
                  }}
                  className="padd0 filepreview "
                >
                  <a
                    className="FileLink "
                    href={DocumentViewUrl + f.Path}
                    target="blank"
                  >
                    {f.FileName.substring(0, 12)}
                  </a>
                  <a
                    className="DownloadBtn"
                    href={BaseUrl + f.Path}
                    target="blank"
                  >
                    <i data-icon-name="Download" className="FabricMDL2Icons">
                      
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
       
       
      </div>
    </div>
  );
}
