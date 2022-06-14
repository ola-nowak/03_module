import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

import shrimp from "../assets/shrimp.jpg";

function Card({ title, intro, content }) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = (e) => {
    setShowMore(!showMore);
    e.preventDefault();
  };
  const date = new Date(2016, 8, 14).toDateString();

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{date}</p>
      <img id="paella" alt="paella" src={shrimp} />
      <p>{intro}</p>

      <button onClick={handleClick} className="card-btn">
        {showMore ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </button>
      <p>{showMore && content}</p>
    </div>
  );
}

export default Card;
