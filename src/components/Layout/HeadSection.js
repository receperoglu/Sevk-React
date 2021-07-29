import React from "react";
import Arrow from "./Arrow";
export default function HeadSection({ click, text, isVisible }) {
  return (
    <div onClick={() => click()} className="PartHead">
      {text}
      <Arrow Direction={isVisible} />
    </div>
  );
}
