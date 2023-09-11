import React from "react";
import keyConceptsImage from "../../assets/images/key-concepts.png";

const ConceptItem = ({ image, title, description }) => {
  return (
    <>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default ConceptItem;
