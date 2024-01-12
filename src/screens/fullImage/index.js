import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {icons, images, FONTS, COLORS, data} from '../../constants';
import {connect} from 'react-redux';
import {http2} from './../../services/api';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const FullImage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState();
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.y;
    const currentIndex = Math.round(contentOffsetX / (height * 0.7));
    setCurrentSlideIndex(currentIndex);
    console.log('currentIndex', currentIndex);
  };
  return (
    <View style={{backgroundColor: COLORS.black, marginTop: height * 0.02}}>
      <StatusBar
        translucent
        backgroundColor={COLORS.black}
        barStyle={'light-content'}
      />
      <FlatList
        data={data.collection}
        // pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <View key={index} style={styles.scrollBox}>
            <Image source={item?.img} style={styles.scrollImage} />
          </View>
        )}
      />
      <View style={styles.iconrow}>
        {data?.collection?.map((item, index) => {
          return (
            <Image
              source={icons.sqrfill}
              style={[
                styles.icon,
                currentSlideIndex == index && {tintColor: COLORS.brown},
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default FullImage;
