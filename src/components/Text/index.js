import React from 'react';
import {Text} from 'react-native';
import Theme from '../../utils/theme';
import Design from '../../utils/design';
export default ({children, style, ...props}) => {
  const styles = {
    color: Theme.textColor,
    fontSize: Design.setSpText(12),
    ...style,
  };
  return (
    <Text style={styles} {...props}>
      {children}
    </Text>
  );
};
