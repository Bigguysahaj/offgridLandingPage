import React, { useEffect } from "react";

const Goofball = () => {
  useEffect(() => {
    const goofball = document.getElementById("goofball");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      goofball.style.left = `${clientX}px`;
      goofball.style.top = `${clientY}px`;
    };
  }, []);

  return <div id="goofball"></div>;
};

export default Goofball;
