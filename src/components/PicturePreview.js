import React, { useState } from "react";
export default function PicturePreview({
  isRotating,
  isShowPicturePreview,
  Path,
  Articel,
  hidePicturePreview
}) {
  const [rotation, setrotation] = useState(0);
  const rotate = () => {
    let newRotation = rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setrotation(newRotation);
  };

  return (
    <div
      className={isShowPicturePreview ? "ma5-imgbox PicturePreview" : "hide"}
    >
      <div
        className={
          isRotating ? "show ProgressSpinnerFlat PictureLoading" : "hide"
        }
        role="progressbar"
      >
        <div aria-hidden="true">•</div>
        <div aria-hidden="true">•</div>
        <div aria-hidden="true">•</div>
        <div aria-hidden="true">•</div>
        <div aria-hidden="true">•</div>
        <div aria-hidden="true">•</div>
        <div aria-hidden="true">•</div>
      </div>
      <img
        id="FullScreen"
        src={Path}
        width="100"
        style={{ transform: `rotate(${rotation}deg)` }}
        alt="Resim"
      />

      <div className="resources-action-bar resources-action-bar_visible resources-action-bar_fixed resources-action-bar_delay resources-action-bar_theme_black js-prevent-deselect ufo-resources-action-bar OpenedPictureTool">
        <div className="resources-action-bar__body">
          <div className="resources-action-bar__side-left">
            <div className="resources-info-dropdown">
              <div className="resources-info-dropdown__icon-wrap">
                <span className="hover-dropdown">
                  <div className="hover-tooltip__tooltip-anchor">
                    <div className="button2 button2_view_classic button2_size_n button2_theme_clear-inverse">
                      <span className="ufo-icon ufo-icon_size_n icon button2__icon resources-info-dropdown__icon">
                        <svg
                          className="ufo-icon__icon"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path
                              fill="currentColor"
                              d="M7 7h2v5H7zM7 4h2v2H7z"
                            ></path>
                            <circle
                              cx="8"
                              cy="8"
                              r="7"
                              stroke="currentColor"
                              strokeWidth="2"
                            ></circle>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className="resources-info-dropdown__text-wrap">
                <span className="hover-dropdown">
                  <div className="hover-tooltip__tooltip-anchor">
                    <span className="resources-info-dropdown__name">
                      <span className="clamped-text">{Articel}</span>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="resources-action-bar__side-right">
            <span>
              <a
                className="BaseDriveContainer fleft  col-xs-4 col-md-4 ShareMail"
                href={`mailto:receperoglu1@hotmail.com?subject=${Articel}&body=${Path}`}
              >
                <div
                  className="button2 button2_view_default button2_tone_transparent button2_size_n button2_theme_normal button2_type_check ufo-resources-action-bar__primary-button ufo-resources-action-bar__primary-button_desktop ufo-resources-action-bar__primary-button_action_publish"
                  type="button"
                >
                  <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
                    <div className="BaseDrive fleft">
                      <span className="ms-Icon--OutlookLogo DriveIcon ms-svg-Icon"></span>
                    </div>
                  </span>
                  <span className="button2__text">E-Posta</span>
                </div>
              </a>
            </span>
            <span>
              <a
                className="BaseDriveContainer  col-xs-4 col-md-4 sidepre ShareWhatsapp"
                href={`https://api.whatsapp.com/send?text=${Path}`}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="button2 button2_view_default button2_tone_transparent button2_size_n button2_theme_normal button2_type_check ufo-resources-action-bar__primary-button ufo-resources-action-bar__primary-button_desktop ufo-resources-action-bar__primary-button_action_publish"
                  type="button"
                >
                  <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
                    <div className="BaseDrive fleft">
                      <span className="ms-Icon--WordLogo DriveIcon ms-svg-Icon "></span>
                    </div>
                  </span>
                  <span className="button2__text">Whatsapp</span>
                </div>
              </a>
            </span>
            <div className="groupable-buttons">
              <div className="groupable-buttons__visible-buttons">
                <span className="hover-dropdown">
                  <div className="hover-tooltip__tooltip-anchor">
                    <button
                      className="button2 button2_view_classic button2_size_n button2_theme_clear-inverse groupable-buttons__visible-button groupable-buttons__visible-button_name_delete "
                      type="button"
                    >
                      <span className="ufo-icon ufo-icon_size_n icon button2__icon button2__icon_side_left">
                        <svg
                          className="ufo-icon__icon"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.809 3.243c.094-.392.268-1.123.432-1.243l3.551-.016c.167.136.346.877.443 1.275.054.23.116.484.194.741H5.611c.083-.269.144-.53.198-.757zM12.583 4c-.151-.171-.309-.814-.404-1.21C11.911 1.679 11.505 0 9.817 0H6.241c-1.716 0-2.13 1.741-2.377 2.78-.092.385-.262 1.103-.406 1.22H1v2h2v7.985C3 15.098 3.887 16 5 16h5.985A2.015 2.015 0 0 0 13 13.985V6h2V4h-2.417z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
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
                      className="button2 button2_view_classic button2_size_n button2_theme_clear-inverse groupable-buttons__visible-button groupable-buttons__visible-button_name_copy "
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
                    <button
                      onClick={() => {
                        hidePicturePreview();
                      }}
                      className="button2 button2_view_classic button2_size_n button2_theme_clear-inverse resources-action-bar__close"
                      type="button"
                    >
                      <span className="ufo-icon ufo-icon_size_n icon button2__icon">
                        <svg
                          className="ufo-icon__icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21 5.421L19.579 4 12.5 11.079 5.421 4 4 5.421l7.079 7.079L4 19.579 5.421 21l7.079-7.079L19.579 21 21 19.579 13.921 12.5z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
