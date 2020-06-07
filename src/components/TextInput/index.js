import React from 'react';
import {TextInput} from 'react-native';
import Design from '../../utils/design';
export default ({children, style, ...props}) => {
  const styles = {
    fontSize: Design.setSpText(14),
    ...style,
  };
  return <TextInput style={styles} {...props} />;
};
