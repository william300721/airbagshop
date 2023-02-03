import React from "react";
import { Link } from "react-router-dom";
import ArrowForward from "../../icons/ArrowForward";

const DataBox = ({ id, name, image, url = "", textClass = "" }) => {
  return (
    <div className="bg-white rounded border border-[#CED8E3] py-8 px-10 flex w-100 items-center">
      <img src={image} alt="" />
      <p className={`ml-14 text-2xl ${textClass}`}>{name}</p>
      <Link
        className="h-[48px] w-[48px] border border-[#CED8E3] rounded-full ml-auto flex items-center justify-center cursor-pointer"
        to={url}
      >
        <ArrowForward />
      </Link>
    </div>
  );
};

export default DataBox;
