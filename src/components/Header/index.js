import React from 'react';
import {View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Design from '../../utils/design';
import Theme from '../../utils/theme';
const styles = StyleSheet.create({
  view: {
    height: Design.autoheight(50),
    borderBottomWidth: 1,
    backgroundColor: Theme.white,
    borderBottomColor: Theme.borderColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: Design.autoWidth(10),
    paddingRight: Design.autoWidth(10),
  },
});
const Header = ({left = true, right = true, children}) => {
  let leftComponent = () => {
    if (left) {
      if (typeof left === 'boolean') {
        return (
          <View style={styles.left}>
            <AntDesign name="left" color={Theme.textColor} size={24} />
          </View>
        );
      } else {
        return left;
      }
    } else {
      return '';
    }
  };
  let rightComponent = () => {
    if (right) {
      if (typeof right === 'boolean') {
        return (
          <View style={styles.right}>
            <AntDesign name="ellipsis1" color={Theme.textColor} size={30} />
          </View>
        );
      } else {
        return right;
      }
    } else {
      return '';
    }
  };
  return (
    <View style={styles.view}>
      {leftComponent}
      {children}
      {rightComponent}
    </View>
  );
};
export default Header;
