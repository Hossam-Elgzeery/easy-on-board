import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const onBoardComponent = ({
  text,
  imageSource,
  style = styles.componentStyle,
}) => (
  <View style={style}>
    <Image source={imageSource} style={styles.componentImage} />
    <Text style={styles.componentText}>{text}</Text>
  </View>
);

export default onBoardComponent;
