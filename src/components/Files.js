import React from "react";

export default function Files(props) {
  const File = (f) => {
    return (
      <div
        key={f.id}
        className="text-center col-md-2 padd0 cpointer FileIco filepreview" style={{  height: "130px"}}     >
        <div
          style={{
            backgroundImage: `url(http://recep.space/abi/css/img/${f.ext.substring(
              1
            )}.png)`,
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            height: "100%",
          }}
          className=" padd0 FileIco filepreview "
        >
          <a
           style={{position:"absolute",bottom:"10px",display:"inline-flex",width:"100%",left:"0"}}
            className="FileLink"
            href={`https://view.officeapps.live.com/op/embed.aspx?src=http://recep.space/abi/dosyalar/${f.Path}`}
            target="blank"
          ><span style={{textAlign:"center",width:"100%"}}>
            {f.FileName}
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
        className="text-center col-md-2 padd0 cpointer FileIco filepreview"
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
            backgroundImage: `url(http://recep.space/abi/dosyalar/${f.Path})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
          }}
        ></div>
        <a
          className="FileLink"
          href={`http://recep.space/abi/dosyalar/${f.Path}`}
          target="blank"
        >
          {f.FileName}
        </a>
      </div>
    );
  };
  const Exts = [
    ".jpg",
    ".png",
    ".JPG",
    ".JPEG",
    ".jpeg",
    ".png",
    ".PNG",
    ".gif",
  ];
  function chechk(data) {
    for (let i = 0; i < Exts.length; i++) {
      if (data === Exts[i]) {
        return Exts[i];
      }  
    }
  }

  return (
    <div>
      <div className="col-md-12">
        {props.Files.map((f) => (f.ext === chechk(f.ext) ? Picture(f) :File(f)))}
      </div>
     
    </div>
  );
}
