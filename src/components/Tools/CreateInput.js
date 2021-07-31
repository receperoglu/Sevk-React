import React from "react";
import SevkConsumer from "../../store/context";
export default function CreateOption({ val, name, type }) {
  return (
    <SevkConsumer>
      {(value) => {
        const { dispatch } = value;
        const InputChange = (input) => {
          dispatch({
            type: "Change" + input.target.name,
            payload: input.target.value,
          });
        };
        return (
          <input
            type={type ? type : "text"}
            name={name}
            value={val}
            onChange={InputChange}
            className="ms-TextField-field"
          />
        );
      }}
    </SevkConsumer>
  );
}
