import React from "react";

import { colors } from "../styles/colors";

function Textarea({ bgColor, color, borderSize, borderRadius, borderColor }) {
  const styles = {
    backgroundColor: colors[bgColor],
    color: colors[color],
    borderRadius: borderRadius,
    border: `${borderSize} solid ${borderColor}`,
    padding: 10,
    margin: "10px 0px",
    display: "flex",
  };
  return <textarea style={styles} rows="5" cols="30"></textarea>;
}

export default Textarea;
