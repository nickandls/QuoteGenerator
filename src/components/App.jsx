import "/public/styles.css";
import React from "react";

import NewQuote from "../components/NewQuote";

export default function App() {
  var generator = Math.round(Math.random() * 4);
  return <NewQuote newQuote={generator} />;
}
