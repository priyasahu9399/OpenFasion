import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking,
  FlatList,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BorderHeading from './../../component/carts/borderHeading';

const {height, width} = Dimensions.get('window');

const DrawerScreen = ({navigation}) => {
  const [borderActive, setBorderActive] = useState(1);
  const [isCollapsed, setCollapsed] = useState(false);
  const [collId, setcollId] = useState();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation?.closeDrawer()}>
        <Image source={icons.Close} style={styles.cross} />
      </TouchableOpacity>
      <View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => setBorderActive(1)}
            style={styles.categorybox}>
            <Text
              style={[
                styles.categorytext,
                borderActive == 1 && {color: COLORS.black},
              ]}>
              WOMEN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBorderActive(2)}
            style={styles.categorybox}>
            <Text
              style={[
                styles.categorytext,
                borderActive == 2 && {color: COLORS.black},
              ]}>
              MAN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBorderActive(3)}
            style={styles.categorybox}>
            <Text
              style={[
                styles.categorytext,
                borderActive == 3 && {color: COLORS.black},
              ]}>
              KIDS
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {(borderActive == 1 || borderActive == 2 || borderActive == 3) && (
            <Image
              source={icons.border2}
              style={[
                styles.border,
                borderActive == 2 && {left: width * 0.22},
                borderActive == 3 && {left: width * 0.45},
              ]}
            />
          )}
        </View>
      </View>

      <View>
        <FlatList
          data={data.Drawerlisting}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    setCollapsed(!isCollapsed), setcollId(item?.id);
                  }}
                  style={styles.collapsbox}>
                  <Text style={styles.collapstitle}>{item?.name}</Text>
                  <SimpleLineIcons
                    name={
                      !isCollapsed && collId == index
                        ? 'arrow-up'
                        : 'arrow-down'
                    }
                    size={15}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
                <Collapsible
                  collapsed={!isCollapsed && collId == index ? false : true}>
                  {item?.subcategory?.map((items, index) => (
                    <View key={index} style={styles.subtitlebox}>
                      <TouchableOpacity>
                        <Text style={styles.collapsubtitle}>
                          {items?.subcat}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </Collapsible>
              </View>
            );
          }}
        />
      </View>
      <View>
        <View
          style={[
            styles.row,
            {borderBottomWidth: 0, marginTop: height * 0.03},
          ]}>
          <Image source={icons.Call} style={styles.bottomicon} />
          <Text style={styles.bottomicontext}>(786) 713-8616</Text>
        </View>
        <View
          style={[
            styles.row,
            {borderBottomWidth: 0, marginVertical: height * 0.03},
          ]}>
          <Image source={icons.Location} style={styles.bottomicon} />
          <Text style={styles.bottomicontext}>Store locator</Text>
        </View>
      </View>
      <BorderHeading border boxstyle={{marginVertical: height * 0.02}} />
      <View style={styles.iconrow}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com')}>
          <Image source={icons.twit} style={styles.appicon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image source={icons.insta2} style={styles.appicon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/')}>
          <Image source={icons.yutube} style={styles.appicon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default DrawerScreen;
