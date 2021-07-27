import React from "react";

export default function CreateOption({Json,change,value}) {
  return (
    <select
      className="ms-TextField-field"
      value={value}
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
