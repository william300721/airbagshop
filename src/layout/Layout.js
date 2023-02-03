import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#EFF3F8] text-[#193451]">
      <div className="p-10 max-w-[1366px] m-auto">{children}</div>
    </div>
  );
};

export default Layout;
