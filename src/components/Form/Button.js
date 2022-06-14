import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { colors } from "../styles/colors";

function Button({ bgColor = "wisteria", color = "carrot", label }) {
  const styles = {
    backgroundColor: colors[bgColor],
    color: colors[color],
    width: 150,
    padding: 10,
    fontSize: "1.5rem",
    borderRadius: 30,
    border: "none",
  };
  return (
    <>
      <button style={styles}>
        <FontAwesomeIcon icon={faUser} />
        {label}
      </button>
    </>
  );
}

export default Button;
