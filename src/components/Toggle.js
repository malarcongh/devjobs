import React from "react";
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';

function Toggle(){

  return (
    <div className="toggle-container">
      <img className="icon-sun"  src={iconSun} alt="" />
      <button className="active"/>
      <img className="icon-moon" src={iconMoon} alt=""/>
    </div>
  );
}

export default Toggle;