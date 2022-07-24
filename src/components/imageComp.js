import React from "react";
import { banners } from "../constants/sharedConsts";
export default function ImageCont() {
  return (
    <div className="ImageCont">
      {banners.map((s, i) => (
        <img src={s} alt={`${i + "alt"}`} className="image-banner" />
      ))}
    </div>
  );
}
