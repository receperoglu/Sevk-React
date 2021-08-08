import React from "react";
import LayoutHead from "./Layout/LayoutHead";
import SevkConsumer from "../store/context";
export default function LayoutTheme() {
  return (
    <SevkConsumer>
      {(value) => {
        const { ShowLayoutTheme, dispatch } = value;
        const toggleTheme = () => {
          dispatch({
            type: "toggleTheme",
            payload: false,
          });
        };
        const changeTheme = (color) => {
          dispatch({
            type: "changeTheme",
            payload: color,
          });
        };
        return ShowLayoutTheme ? (
          <div className="ms-Layer  animate  ms-Layer--fixed effect layer-351">
            <div className="BaseDrive effect RightLayout">
              <LayoutHead click={toggleTheme} text="Tema Seçin" />
              <div className="themeContainer">
                <div
                  onClick={()=>changeTheme("blue")}
                  className="blue col-xs-2"
                ></div>
                <div
                  onClick={()=>changeTheme("opaqblue")}
                  className="opaqblue col-xs-2"
                ></div>
                <div
                  onClick={()=>changeTheme("navy")}
                  className="navy col-xs-2"
                ></div>
                <div
                  onClick={()=>changeTheme("orange")}
                  className="orange col-xs-2"
                ></div>
                <div
                  onClick={()=>changeTheme("opaqorange")}
                  className="opaqorange col-xs-2"
                ></div>
                <div
                  onClick={()=>changeTheme("green")}
                  className="green col-xs-2"
                ></div>
              </div>
            </div>
          </div>
        ) : null;
      }}
    </SevkConsumer>
  );
}
