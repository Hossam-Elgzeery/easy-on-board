import React from "react";
import EasyOnBoardScreen from "./onBoardWrapper";
import EasyOnBoardComponent from "./onBoardComponent";

/**
 *
 * @param {{text:string,imageSource}[]} children is an array of objects that populate onBoardComponents
 * @param {Function} onFinish function to be called on finish
 * @param {boolean} swipeable boolean value to determine allowing swipe gesture to change the current component or not
 * @param {boolean} indicator boolean value to determine showing indicator or not
 * @returns EasyOnBoardScreen Element
 */
const useOnBoard = ({ children, onFinish, swipeable, indicator }) => (
  <EasyOnBoardScreen
    onFinish={onFinish}
    swipeable={swipeable}
    indicator={indicator}
  >
    {children.map((child, index) => (
      <EasyOnBoardComponent
        text={child.text}
        imageSource={child.imageSource}
        key={index}
      />
    ))}
  </EasyOnBoardScreen>
);

export default useOnBoard;
