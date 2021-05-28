import onBoardWrapper from "./src/onBoardWrapper";
import onBoardComponent from "./src/onBoardComponent";

const EasyOnBoard = { Screen: onBoardWrapper, Component: onBoardComponent };

export default EasyOnBoard;
export { default as useOnBoard } from "./src/useOnBoard";
