import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const DotlottieLoad = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <dotlottie-player
          src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default DotlottieLoad;
