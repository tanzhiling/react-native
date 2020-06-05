import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Text} from '../../components';
import {
  BannerJson,
  BannerBgImage,
  NavigationJson,
  ActivityJson,
} from '../../mock/home';
import Design from '../../utils/design';
import Theme from '../../utils/theme';
const styles = StyleSheet.create({
  header: {
    height: Design.autoheight(40),
    backgroundColor: Theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    width: Design.autoWidth(355),
    height: Design.autoheight(30),
    borderRadius: Design.autoheight(30),
    borderWidth: 1,
    backgroundColor: Theme.white,
    borderColor: Theme.white,
    fontSize: Design.setSpText(14),
    paddingLeft: Design.autoWidth(15),
    paddingRight: Design.autoWidth(15),
  },
  banner: {
    alignItems: 'center',
    paddingTop: Design.autoheight(5),
    paddingBottom: Design.autoheight(5),
  },
  bannerBg: {
    height: Design.autoheight(80),
  },
  bannerSwiper: {
    width: Design.autoWidth(355),
    height: Design.autoheight(110),
  },
  bannerSwiperPagination: {
    bottom: Design.autoWidth(2),
  },
  bannerSwiperImage: {
    height: Design.autoheight(110),
    borderRadius: Design.autoheight(2),
  },
  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  navigationItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Design.autoWidth(75),
    height: Design.autoWidth(80),
  },
  navigationItemImage: {
    width: Design.autoWidth(50),
    height: Design.autoWidth(50),
    marginBottom: Design.autoWidth(5),
  },
  activity: {
    backgroundColor: Theme.white,
    margin: Design.autoWidth(10),
    borderRadius: Design.autoheight(2),
  },
  activityHead: {
    height: Design.autoWidth(36),
    justifyContent: 'center',
    paddingLeft: Design.autoWidth(10),
    paddingRight: Design.autoWidth(10),
  },
  activityHeadLeftText: {
    fontSize: Design.setSpText(14),
    fontWeight: '700',
    color: Theme.black,
  },
  activityBody: {
    height: Design.autoWidth(120),
    flexDirection: 'row',
  },
  activityBodyItem: {
    width: Design.autoWidth(80),
    height: Design.autoWidth(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityBodyImage: {
    width: Design.autoWidth(68),
    height: Design.autoWidth(68),
  },
  activityBodyPrice: {
    color: Theme.red,
    fontSize: Design.setSpText(16),
  },
  activityBodyLastPrice: {
    textDecorationLine: 'line-through',
    color: Theme.grey,
  },
});
const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <TextInput style={styles.search} placeholder="手机" />
      </View>
      <ScrollView>
        <ImageBackground
          style={styles.banner}
          imageStyle={styles.bannerBg}
          source={{uri: BannerBgImage}}>
          <View style={styles.bannerSwiper}>
            <Swiper
              paginationStyle={styles.bannerSwiperPagination}
              activeDotColor={Theme.white}
              autoplay
              autoplayTimeout={5}>
              {BannerJson.map((item) => (
                <View key={item.id} style={styles.slide}>
                  <Image
                    style={styles.bannerSwiperImage}
                    resizeMode={'stretch'}
                    source={{uri: item.url}}
                  />
                </View>
              ))}
            </Swiper>
          </View>
        </ImageBackground>
        <View style={styles.navigation}>
          {NavigationJson.map((item) => (
            <View key={item.id} style={styles.navigationItem}>
              <Image
                style={styles.navigationItemImage}
                resizeMode={'stretch'}
                source={{uri: item.url}}
              />
              <Text>{item.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.activity}>
          <View style={styles.activityHead}>
            <Text style={styles.activityHeadLeftText}>限时秒杀</Text>
          </View>
          <View style={styles.activityBody}>
            <ScrollView horizontal>
              {ActivityJson.map((item) => (
                <View key={item.id} style={styles.activityBodyItem}>
                  <Image
                    style={styles.activityBodyImage}
                    resizeMode={'stretch'}
                    source={{uri: item.url}}
                  />
                  <Text style={styles.activityBodyPrice}>￥{item.price}</Text>
                  <Text style={styles.activityBodyLastPrice}>
                    ￥{item.lastPrice}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <Text>滚动区域</Text>
      </ScrollView>
    </View>
  );
};

export default Home;
