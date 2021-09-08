import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const onBoardComponent = ({
  text,
  imageSource,
  title,
  style = styles.componentStyle,
  textStyle = styles.componentText,
}) => (
  <View style={style}>
    <Text style={textStyle}>{title}</Text>
    <Image source={imageSource} style={styles.componentImage} />
    <Text style={textStyle}>{text}</Text>
  </View>
);

export default onBoardComponent;
