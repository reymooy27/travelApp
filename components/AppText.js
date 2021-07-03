/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text } from 'react-native';

const AppText = ({fontStyle, children, style}) => {
  return (
    <Text style={{fontFamily: `OpenSans-${fontStyle || 'Regular'}`, color: '#fff', ...style}}>
      {children}
    </Text>
  );
};

export default AppText;

