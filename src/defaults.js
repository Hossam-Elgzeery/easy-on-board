import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text, PanResponder } from "react-native";
import Indicator from "./indicator";
import styles from "./styles";

export const BackButton = ({ onPress }) => {
  <TouchableOpacity onPress={onPress} style={styles.backButton}>
    <Text style={styles.textStyle}>Back</Text>
  </TouchableOpacity>;
};
export const NextButton = ({ onPress, isLast }) => {
  <TouchableOpacity onPress={onPress} style={styles.nextButton}>
    <Text style={styles.textStyle}>{isLast ? "Finish" : "Next"}</Text>
  </TouchableOpacity>;
};
