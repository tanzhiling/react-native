import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Theme from '../../utils/theme';
const Button = ({children, style, size = 16, ...props}) => {
  const styles = {
    backgroundColor: Theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  };
  return (
    <TouchableHighlight underlayColor="transparent" {...props}>
      <View style={styles}>
        <Text color={Theme.white} size={size}>
          {children}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
