import React, { Component } from "react";
import Arrow from "./Tools/Arrow";

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FilesVisible: true,
    };
    this.toggleFiles = this.toggleFiles.bind(this);
  }

  toggleFiles() {
    this.setState({ FilesVisible: !this.state.FilesVisible });
  }

  render() {
    return (
      <div
        className={
          this.props.Files.length === 0 ? "hide" : "col-xs-12 col-md-12"
        }
      >
        <div
          onClick={() => {
            this.toggleFiles();
          }}
          className="PartHead"
        >
          Dökümanlar
          <Arrow Direction={this.state.FilesVisible} />
        </div>
        <div className={this.state.FilesVisible ? "padd5" : "hide"}>
          <div className="padd5">
            {this.props.Files.map((f) =>
              f.FileType === "Picture" ? (
                <div
                  key={f.id}
                  data-url={f.Path}
                  data-ext={f.ext}
                  style={{ height: "130px" }}
                  className=" FileIco text-center col-md-2 col-xs-6 padd0 cpointer  filepreview"
                >
                  <div
                    onClick={() => {
                      this.props.showPicturePreview(
                        `http://recep.space/abi/dosyalar/${f.Path}`,
                        f.Path
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
              ) : (
                <div
                  data-ext={f.ext}
                  key={f.id}
                  className="FileIco   text-center col-md-2 col-xs-6 padd0 cpointer  filepreview"
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
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Files;
