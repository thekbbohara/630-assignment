import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <aside>sidebar</aside>
      {children}
    </div>
  );
};

export default layout;
