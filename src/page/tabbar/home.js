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
  MsJson,
  ActivityJson,
  ActivityBgImage,
  FloorJson,
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
    paddingTop: Design.autoheight(10),
    paddingBottom: Design.autoheight(10),
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
    borderRadius: Design.autoWidth(2),
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
  ms: {
    backgroundColor: Theme.white,
    marginTop: Design.autoWidth(10),
    marginLeft: Design.autoWidth(10),
    marginRight: Design.autoWidth(10),
    borderRadius: Design.autoWidth(2),
  },
  msHead: {
    height: Design.autoWidth(36),
    justifyContent: 'center',
    paddingLeft: Design.autoWidth(10),
    paddingRight: Design.autoWidth(10),
  },
  msBody: {
    height: Design.autoWidth(120),
    flexDirection: 'row',
  },
  msBodyItem: {
    width: Design.autoWidth(80),
    height: Design.autoWidth(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activity: {
    paddingLeft: Design.autoWidth(10),
    paddingRight: Design.autoWidth(10),
  },
  activityHead: {
    alignItems: 'center',
    height: Design.autoWidth(40),
    justifyContent: 'center',
  },
  activityItemBg: {
    width: Design.autoWidth(87),
    height: Design.autoWidth(120),
    marginBottom: Design.autoWidth(2),
    alignItems: 'center',
    position: 'relative',
  },
  activityItemImage: {
    width: Design.autoWidth(63),
    height: Design.autoWidth(63),
    position: 'absolute',
    top: Design.autoWidth(5),
  },
  activityItemText: {
    position: 'absolute',
    bottom: Design.autoWidth(5),
    color: Theme.white,
  },
  wrapRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  floorItem: {
    width: Design.autoWidth(175),
    backgroundColor: Theme.white,
    marginBottom: Design.autoWidth(5),
    overflow: 'hidden',
    borderRadius: 5,
  },
});
const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <TextInput style={styles.search} placeholder="手机" />
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: Design.autoheight(40)}}>
        <ImageBackground
          style={styles.banner}
          imageStyle={{height: Design.autoheight(80)}}
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
        <View style={styles.ms}>
          <View style={styles.msHead}>
            <Text size={14} color={Theme.black} style={{fontWeight: '700'}}>
              限时秒杀
            </Text>
          </View>
          <View style={styles.msBody}>
            <ScrollView horizontal>
              {MsJson.map((item) => (
                <View key={item.id} style={styles.msBodyItem}>
                  <Image
                    style={{
                      width: Design.autoWidth(68),
                      height: Design.autoWidth(68),
                    }}
                    resizeMode={'stretch'}
                    source={{uri: item.url}}
                  />
                  <Text color={Theme.red} size={16}>
                    ￥{item.price}
                  </Text>
                  <Text
                    color={Theme.grey}
                    style={{textDecorationLine: 'line-through'}}>
                    ￥{item.lastPrice}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.activity}>
          <View style={styles.activityHead}>
            <Text style={{fontSize: Design.setSpText(16)}}>精选会场</Text>
          </View>
          <View style={styles.wrapRow}>
            {ActivityJson.map((item) => (
              <ImageBackground
                key={item.id}
                style={styles.activityItemBg}
                source={{uri: ActivityBgImage}}>
                <Image
                  style={styles.activityItemImage}
                  resizeMode={'stretch'}
                  source={{uri: item.url}}
                />
                <Text style={styles.activityItemText}>{item.title}</Text>
              </ImageBackground>
            ))}
          </View>
        </View>
        <View style={styles.activity}>
          <View style={styles.activityHead}>
            <Text size={16}>为你推荐</Text>
          </View>
          <View style={styles.wrapRow}>
            {FloorJson.map((item) => (
              <View style={styles.floorItem} key={item.id}>
                <Image
                  style={{
                    width: Design.autoWidth(175),
                    height: Design.autoWidth(175),
                  }}
                  source={{uri: item.url}}
                />
                <View style={{padding: Design.autoWidth(5)}}>
                  <Text color={Theme.black} numberOfLines={2}>
                    {item.goodsName}
                  </Text>
                  <View>
                    <Text color={Theme.red} size={18}>
                      <Text color={Theme.red} size={16}>
                        ￥
                      </Text>
                      {item.godosPrice}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
