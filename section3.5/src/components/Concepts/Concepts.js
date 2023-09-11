import React from "react";
import ConceptItem from "./ConceptItem";

const Concepts = ({ data }) => {
  return (
    <ul id="concepts">
      {data.map((item, idx) => (
        <li className="concept" key={idx}>
          <ConceptItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default Concepts;
