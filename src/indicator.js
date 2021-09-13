import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Indicator = ({
  currentIndex,
  length,
  indicatorColor,
  selectedColor,
  onPress,
}) => {
  const renderList = [];

  const populateIndicatorsList = () => {
    for (let i = 0; i < length; i++) {
      renderList.push(
        <TouchableOpacity
          onPress={() => {
            onPress(i);
          }}
          key={i}
        >
          <View
            style={
              i == currentIndex
                ? {
                    ...styles.selectedIndicatorStyle,
                    backgroundColor: selectedColor,
                  }
                : { ...styles.indicatorStyle, backgroundColor: indicatorColor }
            }
          />
        </TouchableOpacity>
      );
    }
  };

  populateIndicatorsList();

  return <View style={styles.indicatorRowStyle}>{renderList}</View>;
};

export default Indicator;
