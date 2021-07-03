import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import ChessBoard from "./chessBoard/ChessBoard";
import MemeCard from "./memeCard/MemeCard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChessBoard />
    <MemeCard />
  </StrictMode>,
  rootElement
);
