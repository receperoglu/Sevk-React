import React from "react";
import SevkConsumer from "../../store/context";
export default function CreateOption({ Json, val, name}) {
  return (
    <SevkConsumer>
      {(value) => {
        const { dispatch } = value;
        const SelectChange = (e) => {
           dispatch({ type: "Change" + e.target.name, payload: e.target.value });
        };
        return (
          <select
            className="ms-TextField-field"
            name={name}
            value={val}
            onChange={SelectChange}           
           >
            {Json.map((p) => (
              <option key={p.id} value={p.id}>
                {p.Name}
              </option>
            ))}
          </select>
        );
      }}
    </SevkConsumer>
  );
}