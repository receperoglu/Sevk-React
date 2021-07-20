import React from "react";

export default function Files(props) {
  const File = (f) => {
    return (
      <div
        data-ext={f.ext}
        key={f.id}
        className="FileIco   text-center col-md-2 padd0 cpointer  filepreview"
        style={{ height: "130px" }}
      >
        <div
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundImage: `url(http://recep.space/abi/css/img/${f.ext.substring(
              1
            )}.png)`,
          }}
          className=" padd0   filepreview "
        >
          <a
            style={{
              position: "absolute",
              bottom: "10px",
              display: "inline-flex",
              width: "100%",
              left: "0",
            }}
            className="FileLink"
            href={`https://view.officeapps.live.com/op/embed.aspx?src=http://recep.space/abi/dosyalar/${f.Path}`}
            target="blank"
          >
            <span style={{ textAlign: "center", width: "100%" }}>
              {f.FileName.substring(0, 12)}
            </span>
          </a>
          <a
            style={{
              position: "absolute",
              right: "0px",
              top: "10px",
            }}
            href={`http://recep.space/abi/dosyalar/${f.Path}`}
            target="blank"
          >
            <span style={{ textAlign: "right", width: "100%" }}>
              <i
                data-icon-name="Download"
                aria-hidden="true"
                className="fright ms-Button-icon icon-73"
              >
                
              </i>
            </span>
          </a>
        </div>
      </div>
    );
  };
  const Picture = (f) => {
    return (
      <div
        key={f.id}
        data-url={f.Path}
        data-ext={f.ext}
        style={{ height: "130px" }}
        className=" FileIco text-center col-md-2 padd0 cpointer  filepreview"
      >
        <div
          onClick={() => {
            props.showPicturePreview(
              `http://recep.space/abi/dosyalar/${
                f.Path + "?" + new Date().getTime()
              }`,
              f.Path + "?" + new Date().getTime()
            );
          }}
          style={{
            backgroundImage: `url(http://recep.space/thumbs/${f.Path})`,
          }}
          className="PictureDiv"
        ></div>
        <a
          className="FileLink"
          href={`http://recep.space/abi/dosyalar/${f.Path}`}
          target="blank"
        >
          {f.FileName.substring(0, 12)}
        </a>
      </div>
    );
  };

  return (
    <div className={props.FilesVisible ? "padd5" : "hide"}>
      <div className="padd5">
        {props.Files.map((f) =>
          f.FileType === "Picture" ? Picture(f) : <div></div>
        )}
      </div>
      <div className="padd5">
        {props.Files.map((f) =>
          f.FileType === "Document" ? File(f) : <div></div>
        )}
      </div>
    </div>
  );
}
