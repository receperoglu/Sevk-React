import React, { Component } from "react";
import ProgressBar from "./../Tools/ProgressBar";
import CancelBtn from "./../Tools/CancelBtn";
import SevkConsumer,{BaseUrl} from "../../store/context";
export class PicturePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0,
      isRotating: false,
    };
    this.toggleOrderList = this.toggleOrderList.bind(this);
  }
  toggleOrderList = () => {
    this.setState({ OrderVisible: !this.state.OrderVisible });
  };
  render() {
    const rotate = () => {
      let newRotation = this.state.rotation + 90;
      if (newRotation >= 360) {
        newRotation = -360;
      }
      this.setState({ rotatin: newRotation });
    };
    const hidePicturePreview = (dispatch) => {
      dispatch({
        type: "hidePicturePreview",
        payload: null,
      });
    };
    return (
      <SevkConsumer>
        {(value) => {
          const { ShowPicturePreview, Path, ArticelName, dispatch,File } = value;
          return ShowPicturePreview ? (
            <div className="ma5-imgbox PicturePreview">
              <ProgressBar isVisible={this.state.isRotating} />
              <img
                id="FullScreen"
                src={BaseUrl+File.Path}
                width="100"
                style={{ transform: `rotate(${this.state.rotation}deg)` }}
                alt="Resim"
              />
              <div className="resources-action-bar">
                <div className="resources-action-bar__body">
                  <div className="resources-action-bar__side-left">
                    <div className="resources-info-dropdown">
                      <i data-icon-name="Info" className="FabricMDL2Icons">
                        
                      </i>
                      <div className="resources-info-dropdown__text-wrap">
                        <span className="clamped-text">{ArticelName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="resources-action-bar__side-right">
                    {Btn(
                      "E-posta",
                      `mailto:receperoglu1@hotmail.com?subject=${ArticelName}&body=${Path}`,
                      "OutlookLogo"
                    )}
                    {Btn(
                      "Whatsapp",
                      `https://api.whatsapp.com/send?text=${Path}`,
                      "WordLogo"
                    )}
                    <div className="groupable-buttons">
                      <div className="groupable-buttons__visible-buttons">
                        <span className="hover-dropdown">
                          <div className="hover-tooltip__tooltip-anchor">
                            <button className="button2 " type="button">
                              <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
                                <i
                                  data-icon-name="Delete"
                                  className="FabricMDL2Icons"
                                >
                                  
                                </i>
                              </span>
                              <span className="button2__text">Sil</span>
                            </button>
                          </div>
                        </span>
                        {Rotate(rotate)}
                      </div>
                      <div className="groupable-buttons__more-button-wrap">
                        <span className="hover-dropdown">
                          <div className="hover-tooltip__tooltip-anchor">
                            <CancelBtn
                              click={hidePicturePreview.bind(this, dispatch)}
                            />
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </SevkConsumer>
    );
  }
}
export default PicturePreview;
function Rotate(rotate) {
  return (
    <span
      onClick={() => {
        rotate();
      }}
      className="hover-dropdown"
    >
      <div className="hover-tooltip__tooltip-anchor">
        <button className="button2   " type="button">
          <span className="ufo-icon   icon  ">
            <i className="fa fa-repeat"></i>
          </span>
          <span className="button2__text">Döndür</span>
        </button>
      </div>
    </span>
  );
}

function Btn(text, url, icon) {
  return (
    <span>
      <a
        className="BaseDriveContainer fleft  col-xs-4 col-md-4 ShareMail"
        href={url}
      >
        <div className="button2" type="button">
          <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
            <div className="BaseDrive fleft">
              <span className={`DriveIcon ms-svg-Icon ms-Icon--${icon}`}></span>
            </div>
          </span>
          <span className="button2__text">{text}</span>
        </div>
      </a>
    </span>
  );
}
