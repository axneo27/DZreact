import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/index.jsx";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-button">
    <button onClick={() => toggleTheme()}>{theme}</button>
    </div>
  );
};

export default ButtonTheme;