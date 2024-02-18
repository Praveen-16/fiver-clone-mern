import React from "react";
import "./CatCard.scss";

function CatCard({ dese, src }) {
  console.log(dese);
  return (
    <div className="catCard">
      <img src={src} alt="" />

      <span className="title">{dese}</span>
    </div>
  );
}
export default CatCard;
