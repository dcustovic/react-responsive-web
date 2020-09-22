import React from "react";
import "./Button.css";

const COLORS = ["primary", "blue", "red", "green"];
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--mobile", "btn--medium", "btn--large", "btn--wide"];

export const Button = ({
  buttonStyle,
  buttonSize,
  buttonColor,
  type,
  onClick,
  children,
}) => {
  const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : null;
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
