import { useState, useEffect } from "react";

function fakeFetchColors() {
  return Promise.resolve(["red", "green", "blue"]);
}

function AsyncColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fakeFetchColors().then((data) => setColors(data));
  }, []);

  const renderedColors = colors.map((color) => <li key={color}>{color}</li>);

  return <ul>{renderedColors}</ul>;
}

export default AsyncColorList;
