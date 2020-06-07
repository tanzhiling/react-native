import React from 'react';
import {Text} from 'react-native';
import Theme from '../../utils/theme';
import Design from '../../utils/design';
export default ({children, style, size = 12, color, ...props}) => {
  const styles = {
    color: color ? color : Theme.textColor,
    fontSize: Design.setSpText(size),
    ...style,
  };
  return (
    <Text style={styles} {...props}>
      {children}
    </Text>
  );
};
