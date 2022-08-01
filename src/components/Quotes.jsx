import React from "react";

const quoteList = [
  "Wish not so much to live long as to live well.",
  "It is when power is wedded to chronic fear that it becomes formidable.",
  "Most people are bothered by those passages of Scripture they do not understand, but the passages that bother me are those I do understand.",
  "Arguments are to be avoided; they are always vulgar and often convincing."
];
function Quote(props) {
  return <h1>{quoteList[props.quoteItem]}</h1>;
}

export default Quote;
