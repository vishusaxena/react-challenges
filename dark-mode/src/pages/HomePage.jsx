import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-screen h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      HomePage
      <button className="border border-blue-700" onClick={toggleTheme}>
        Dark Mode
      </button>
      theme:{theme}
    </div>
  );
};

export default HomePage;
