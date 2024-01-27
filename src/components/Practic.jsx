import React from "react";
import { useState, useEffect } from "react";

const Practic = () => {
  const [dogImage, setDogImage] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);
  return (
    <div>
      {/* 5. Using dogImage as the src for our image*/}
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>
  );
};

export default Practic;
