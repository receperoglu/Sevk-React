import React from "react";
import CancelBtn from "./../Tools/CancelBtn";
import SevkConsumer, { BaseUrl } from "../../store/context";

function RightBar(ArticelName, Path, hidePicturePreview) {
  return (
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
                  <i data-icon-name="Delete" className="FabricMDL2Icons">
                    
                  </i>
                </span>
                <span className="button2__text">Sil</span>
              </button>
            </div>
          </span>
          {Rotate()}
        </div>
        <div className="groupable-buttons__more-button-wrap">
          <span className="hover-dropdown">
            <div className="hover-tooltip__tooltip-anchor">
              <CancelBtn click={ hidePicturePreview} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
function Rotate() {
  return (
    <span className="hover-dropdown">
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
export default function PicturePreview() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowPicturePreview, Path, ArticelName, File, dispatch } = value;
        const hidePicturePreview = () => {
          dispatch({
            type: "hidePicturePreview",
            payload: null,
          });
        };
        return ShowPicturePreview ? (
          <div className="ma5-imgbox PicturePreview">
            <img
              id="FullScreen"
              src={BaseUrl + File.Path}
              width="100"
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
                {RightBar(ArticelName, Path, hidePicturePreview)}
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}