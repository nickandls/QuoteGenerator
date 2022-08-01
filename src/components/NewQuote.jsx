import React from "react";
import Quote from "../components/Quotes";
import Author from "../components/Author";
import Twitter from "@mui/icons-material/Twitter";

const colorPallete = ["#CA4E79", "#FFC18E", "#7A4069", "#513252"];
var styles = {
  backgroundColor: "#77b1a9"
};

function NewQuote(props) {
  var newQuote = props.newQuote;
  const [item, setItem] = React.useState(newQuote);
  const [bgColor, setBgColor] = React.useState(styles);

  function handleClick(event) {
    var generator = Math.round(Math.random() * 3);

    styles = {
      backgroundColor: colorPallete[item]
    };

    setItem(generator);
    setBgColor(styles);
    document.body.style.backgroundColor = colorPallete[item];
  }

  return (
    <div id="quote-box">
      <Quote id="text" quoteItem={item} />
      <Author id="author" authorItem={item} />
      <a
        href="twitter.com/intent/tweet"
        target="_blank"
        style={bgColor}
        id="tweet-quote"
      >
        <Twitter />
      </a>
      <button id="new-quote" style={bgColor} onClick={handleClick}>
        New Quote
      </button>
    </div>
  );
}

export default NewQuote;
