import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import CancelBtn from "./CancelBtn";
export default function PicturePreview({
  isRotating,
  isShowPicturePreview,
  Path,
  Articel,
  hidePicturePreview,
}) {
  const [rotation, setrotation] = useState(0);
  const rotate = () => {
    let newRotation = rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setrotation(newRotation);
  };
  return isShowPicturePreview ? (
    <div className="ma5-imgbox PicturePreview">
      <ProgressBar isVisible={isRotating} />
      <img
        id="FullScreen"
        src={Path}
        width="100"
        style={{ transform: `rotate(${rotation}deg)` }}
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
                <span className="clamped-text">{Articel}</span>
              </div>
            </div>
          </div>
          <div className="resources-action-bar__side-right">
            {Btn(
              "E-posta",
              `mailto:receperoglu1@hotmail.com?subject=${Articel}&body=$
      {Path}`,
              "OutlookLogo"
            )}
            {Btn(
              "Whatsapp",
              `https://api.whatsapp.com/send?text=${Path}`,
              "WordLogo"
            )}{" "}
            <div className="groupable-buttons">
              <div className="groupable-buttons__visible-buttons">
                <span className="hover-dropdown">
                  <div className="hover-tooltip__tooltip-anchor">
                    <button
                      className="button2 button2_view_classic button2_size_n button2_theme_clear-inverse groupable-buttons__visible-button groupable-buttons__visible-button_name_delete "
                      type="button"
                    >
                      <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
                        <i data-icon-name="Delete" className="FabricMDL2Icons">
                          
                        </i>
                      </span>
                      <span className="button2__text">Sil</span>
                    </button>
                  </div>
                </span>
                <span
                  onClick={() => {
                    rotate();
                  }}
                  className="hover-dropdown"
                >
                  <div className="hover-tooltip__tooltip-anchor">
                    <button
                      className="button2  button2_size_n button2_theme_clear-inverse   "
                      type="button"
                    >
                      <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
                        <i className="fa fa-repeat"></i>
                      </span>
                      <span className="button2__text">Döndür</span>
                    </button>
                  </div>
                </span>
              </div>
              <div className="groupable-buttons__more-button-wrap">
                <span className="hover-dropdown">
                  <div className="hover-tooltip__tooltip-anchor">
                    <CancelBtn click={hidePicturePreview} />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
function Btn(text, url, icon) {
  return (
    <span>
      <a
        className="BaseDriveContainer fleft  col-xs-4 col-md-4 ShareMail"
        href={url}
      >
        <div
          className="button2 button2_view_default button2_tone_transparent button2_size_n button2_theme_normal "
          type="button"
        >
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
