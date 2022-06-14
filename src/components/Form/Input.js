import React from "react";

import { colors } from "../styles/colors";

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
  const styles = {
    backgroundColor: colors[bgColor],
    color: colors[color],
    borderRadius: borderRadius,
    border: `${borderSize} solid ${borderColor}`,
    padding: 10,
    margin: "10px 0px",
    display: "flex",
  };
  return <input style={styles} type="text" placeholder="Your text"></input>;
}

export default Input;
