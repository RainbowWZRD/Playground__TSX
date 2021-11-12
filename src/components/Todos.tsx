import React from "react";

type TTodoProps = {
  items: string[];
  children: React.ReactNode;
}


//THIS IS A PATTERN WICH CAN OMIT THE REACT FC
const Todos= ({children, items}: TTodoProps ) => {
  return <ul>
    {items.map((item) => {
      return <li key={item}>{item}</li>
    })}
  </ul>
}

export default Todos;