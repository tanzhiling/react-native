import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header, TextInput, Text} from '../../components';
import Design from '../../utils/design';
import Theme from '../../utils/theme';
import {CategordJson} from '../../mock/category';
const styles = StyleSheet.create({
  search: {
    width: Design.autoWidth(355),
    height: Design.autoheight(30),
    borderRadius: Design.autoheight(30),
    borderWidth: 1,
    backgroundColor: Theme.borderColor,
    borderColor: Theme.borderColor,
    fontSize: Design.setSpText(14),
    paddingLeft: Design.autoWidth(15),
    paddingRight: Design.autoWidth(15),
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryLeftItem: {
    padding: Design.autoWidth(10),
  },
});
const Category = () => {
  return (
    <View>
      <Header left={false} right={false}>
        <TextInput style={styles.search} placeholder="手机" />
      </Header>
      <View style={styles.category}>
        <ScrollView contentContainerStyle={{width: Design.autoWidth(120)}}>
          {CategordJson.map((item) => (
            <View style={styles.categoryLeftItem} key={item.id}>
              <Text size={16}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            width: Design.autoWidth(600),
            height: Design.screenHeith,
            backgroundColor: Theme.white,
          }}>
          <Text>右边</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
