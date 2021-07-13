import React from "react";

export default function Files(props) {
  return (
    <div style={{lineHeight:"100px"}}>
      {props.Files.map((f) => (
        <div
          key={f.id}
          data-url={f.Path}
          data-ext=".ini"
          className="col-md-12 ini padd0 File"
        >
          <div
            style={{
              backgroundImage: `url(${f.Path})`,
              backgroundSize: "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="col-md-1 padd0 FileIco filepreview col-xs-2"
          ></div>

          <div className="col-md-11 col-xs-10 text-left">
            <a
              className="FileLink"
              href={f.Path}
              target="blank"
              
            >
              {f.FileName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
