import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ChessBoard from "./chessBoard/ChessBoard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChessBoard />
  </StrictMode>,
  rootElement
);
