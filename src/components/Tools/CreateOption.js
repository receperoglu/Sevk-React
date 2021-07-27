import React from "react";

export default function CreateOption({Json,change}) {
  return (
    <select
      className="ms-TextField-field"
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
