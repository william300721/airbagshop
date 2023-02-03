import React from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBack from "../../icons/ArrowBack";

const Header = ({ url, image }) => {
  const history = useHistory();
  
  return (
    <div className=" w-full flex items-center justify-between">
      <Link
        className="h-[48px] w-[48px] border border-[#CED8E3] rounded-full flex items-center justify-center cursor-pointer"
        to={url}
        onClick={()=> history.goBack()}
      >
        <ArrowBack />
      </Link>
      <p className="text-center font-bold text-3xl">Maak je keuze</p>
      <div className="w-[48px] h-[48px] bg-white border border-[#CED8E3] rounded-full flex items-center justify-center">
        <img className="h-[32px] w-[32px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default Header;
