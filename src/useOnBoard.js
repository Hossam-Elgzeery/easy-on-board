import React from "react";
import EasyOnBoard from "../index";

/**
 *
 * @param {{text:string,imageSource}[]} children is an array of objects that populate onBoardComponents
 * @param {Function} onFinish function to be called on finish
 * @param {boolean} swipeable boolean value to determine allowing swipe gesture to change the current component or not
 * @param {boolean} indicator boolean value to determine showing indicator or not
 * @returns EasyOnBoardScreen Element
 */
const useOnBoard = ({ children, onFinish, swipeable, indicator }) => (
  <EasyOnBoard.Screen
    onFinish={onFinish}
    swipeable={swipeable}
    indicator={indicator}
  >
    {children.map((child, index) => (
      <EasyOnBoard.Component
        text={child.text}
        imageSource={child.imageSource}
        key={index}
      />
    ))}
  </EasyOnBoard.Screen>
);

export default useOnBoard;
