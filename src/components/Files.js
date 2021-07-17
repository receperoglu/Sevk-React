import React from "react";

export default function Files(props) {
  return (
    <div className="col-md-12">
      {props.Files.map((f) => (
        <div
          key={f.id}
          data-url={f.Path}
          data-ext={f.Ext}
          className="text-center col-md-4 padd0 cpointer FileIco filepreview col-xs-2"
        >
          <div
            onClick={() => {
              props.showPicturePreview(
                `http://recep.space/abi/dosyalar/${f.Path}`,f.Path
              );
            }}
            style={{
              backgroundImage: `url(http://recep.space/abi/dosyalar/${f.Path})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "200px",
            }}
          >
            {" "}
          </div>
          <a
            className="FileLink"
            href={`http://recep.space/abi/dosyalar/${f.Path}`}
            target="blank"
          >
            {f.FileName}
          </a>
        </div>
      ))}
    </div>
  );
}
