import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import Design from '../../utils/design';
import Theme from '../../utils/theme';
const Button = ({children, style, ...props}) => {
  const styles = {
    fontSize: Design.setSpText(14),
    backgroundColor: Theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  };
  return (
    <TouchableHighlight underlayColor="transparent" {...props}>
      <View style={styles}>
        <Text style={{color: Theme.white, fontSize: Design.setSpText(16)}}>
          {children}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
