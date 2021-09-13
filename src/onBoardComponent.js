import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const onBoardComponent = ({
  text,
  imageSource,
  title,
  style,
  titleStyle,
  textStyle,
  imageStyle,
}) => (
  <View style={[styles.componentStyle, style]}>
    <Text style={[styles.componentText, titleStyle]}>{title}</Text>
    <Image source={imageSource} style={[styles.componentImage, imageStyle]} />
    <Text style={[styles.componentText, textStyle]}>{text}</Text>
  </View>
);

export default onBoardComponent;
