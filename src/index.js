import React from "react";
import ReactDOM from "react-dom";
import {div,h} from "react-hyperscript-helpers";

const Index = () => {
  return div( "Hello React!" );
};

ReactDOM.render( h(Index), document.getElementById("index"));
