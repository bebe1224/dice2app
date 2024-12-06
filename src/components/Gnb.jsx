import React from "react";

function Gnb() {
  const menuData = ["Home", "Project", "Work", "UI/UX", "Coding"];
  return (
    <div>
      <ul>
        {menuData.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Gnb;
