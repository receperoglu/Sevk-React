import React from "react";

export default function CreateOption({ Json, change, value, name }) {
  return (
    <select
      className="ms-TextField-field"
      value={value}
      name={name}
      onChange={(e) => change(e.target.value)}
    >
      {Json.map((p) => (
        <option key={p.id} value={p.id}>
          {p.Name}
        </option>
      ))}
    </select>
  );
}
