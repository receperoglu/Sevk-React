import React from "react";
import SevkConsumer from "../../store/context";
export default function CreateInput({ val, name, type,placeholder }) {
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
            placeholder={placeholder}
          />
        );
      }}
    </SevkConsumer>
  );
}
