import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text, PanResponder } from "react-native";
import Indicator from "./indicator";
import styles from "./styles";

const onBoardWrapper = ({
  children,
  onFinish,
  nextButtonText = "Next",
  nextButtonStyle = styles.nextButton,
  nextTextStyle = styles.textStyle,
  backButtonText = "Back",
  backButtonStyle = styles.backButton,
  backTextStyle = styles.textStyle,
  indicator = false,
  swipeable = false,
  indicatorColor = styles.indicatorStyle.backgroundColor,
  selectedIndicatorColor = styles.selectedIndicatorStyle.backgroundColor,
  finishButtonText = "Finish",
}) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const gestureEvent = (_, gestureState) => {
    if (gestureState.dx < 0) {
      currentScreen == children.length - 1
        ? onFinish()
        : setCurrentScreen(currentScreen + 1);
    } else if (gestureState.dx > 0 && currentScreen != 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const startingPanResponder = useCallback((_, _gestureState) => true, []);

  const PanResponderObject = {
    onStartShouldSetPanResponder: startingPanResponder,
    onPanResponderRelease: gestureEvent,
  };

  const innerResponder = PanResponder.create(PanResponderObject);

  const onNextPressed = () => {
    currentScreen == children.length - 1
      ? onFinish()
      : setCurrentScreen(currentScreen + 1);
  };

  const onBackPressed = () => setCurrentScreen(currentScreen - 1);

  return (
    <View
      style={styles.wrapper}
      {...(swipeable && { ...innerResponder.panHandlers })}
    >
      {children[currentScreen]}

      {currentScreen == 0 ? null : (
        <TouchableOpacity onPress={onBackPressed} style={backButtonStyle}>
          <Text style={backTextStyle}>{backButtonText}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onNextPressed} style={nextButtonStyle}>
        <Text style={nextTextStyle}>
          {currentScreen == children.length - 1
            ? finishButtonText
            : nextButtonText}
        </Text>
      </TouchableOpacity>

      {!!indicator && (
        <Indicator
          length={children.length}
          currentIndex={currentScreen}
          indicatorColor={indicatorColor}
          selectedColor={selectedIndicatorColor}
          onPress={setCurrentScreen}
        />
      )}
    </View>
  );
};

export default onBoardWrapper;
