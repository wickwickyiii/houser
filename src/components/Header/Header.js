import React from "react";

export default function Header() {
  let style = {
    backgroundColor: "#519872",
    color: "white",
    width: "100%",
    height: "100px",
    marginBottom: "15px"
  };

  return (
    <div style={style}>
      <header>
        <img src="v02h16.jpg" alt="" />
        <h2>Houser</h2>
      </header>
    </div>
  );
}
