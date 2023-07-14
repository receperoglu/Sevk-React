import React from "react";
import SevkConsumer from "../../store/context";
export default function CreateInput({ val, name, type, placeholder, style, process, orderId }) {
  return (
    <SevkConsumer>
      {(value) => {
        const { dispatch } = value;
        const InputChange = (input) => {
          console.log(input.target.value)
          if (process === "productOut") {
            dispatch({
              type: "handleOut",
              payload: {
                "name": input.target.name,
                "value": input.target.value,
                "id":orderId
              }
            });
          }
          else {
            dispatch({
              type: "Change" + input.target.name,
              payload: input.target.value,
            });
          }

        };
        return (
          <input
            type={type ? type : "text"}
            name={name}
            defaultValue={val}
            onChange={InputChange}
            className="ms-TextField-field"
            placeholder={placeholder}
            style={style}
          />
        );
      }}
    </SevkConsumer>
  );
}
