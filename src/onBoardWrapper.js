import React, { useState, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  I18nManager,
} from "react-native";
import Indicator from "./indicator";
import styles from "./styles";

const onBoardWrapper = ({
  children,
  onFinish,
  nextButtonText = "Next",
  nextButtonStyle = styles.nextButton,
  nextTextStyle = styles.textStyle,
  renderNextComponent = null,
  backButtonText = "Back",
  backButtonStyle = styles.backButton,
  backTextStyle = styles.textStyle,
  renderBackComponent = null,
  indicator = false,
  swipeable = false,
  indicatorColor = styles.indicatorStyle.backgroundColor,
  selectedIndicatorColor = styles.selectedIndicatorStyle.backgroundColor,
  finishButtonText = "Finish",
  finishButtonStyle = styles.nextButton,
  finishTextStyle = styles.textStyle,
  renderFinishComponent = null,
  startButtonText = "Next",
  startButtonStyle = styles.nextButton,
  startTextStyle = styles.textStyle,
  renderStartComponent = null,
}) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const gestureEvent = (_, gestureState) => {
    if (gestureState.dx < 0 && !I18nManager.isRTL) {
      currentScreen === children.length - 1
        ? onFinish()
        : setCurrentScreen(currentScreen + 1);
    } else if (gestureState.dx > 0 && I18nManager.isRTL) {
      currentScreen === children.length - 1
        ? onFinish()
        : setCurrentScreen(currentScreen + 1);
    } else if (
      gestureState.dx > 0 &&
      currentScreen !== 0 &&
      !I18nManager.isRTL
    ) {
      setCurrentScreen(currentScreen - 1);
    } else if (
      gestureState.dx < 0 &&
      currentScreen !== 0 &&
      I18nManager.isRTL
    ) {
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
    currentScreen === children.length - 1
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

      {currentScreen === 0 ? null : (
        <TouchableOpacity onPress={onBackPressed} style={backButtonStyle}>
          {renderBackComponent?.() ?? (
            <Text style={backTextStyle}>{backButtonText}</Text>
          )}
        </TouchableOpacity>
      )}

      {currentScreen === 0 ? (
        <TouchableOpacity onPress={onNextPressed} style={startButtonStyle}>
          {renderStartComponent?.() ?? (
            <Text style={startTextStyle}>{startButtonText}</Text>
          )}
        </TouchableOpacity>
      ) : currentScreen === children.length - 1 ? (
        <TouchableOpacity onPress={onNextPressed} style={finishButtonStyle}>
          {renderFinishComponent?.() ?? (
            <Text style={finishTextStyle}>{finishButtonText}</Text>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onNextPressed} style={nextButtonStyle}>
          {renderNextComponent?.() ?? (
            <Text style={nextTextStyle}>{nextButtonText}</Text>
          )}
        </TouchableOpacity>
      )}

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
