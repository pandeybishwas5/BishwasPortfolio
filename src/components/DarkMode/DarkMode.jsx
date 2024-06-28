import React from "react";
import { ReactSVG } from "react-svg";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <ReactSVG src={Sun} />
        <ReactSVG src={Moon} />
      </label>
    </div>
  );
};

export default DarkMode;
