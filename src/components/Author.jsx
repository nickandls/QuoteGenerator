import React from "react";

const authorList = [
  "Benjamin Franklin",
  "Eric Hoffer",
  "Mark Twain",
  "Oscar Wilde"
];

function Author(props) {
  return <p>{authorList[props.authorItem]}</p>;
}

export default Author;
