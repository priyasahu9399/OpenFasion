import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS} from '../../constants';
import {connect} from 'react-redux';
import {http2} from './../../services/api';

const {width, height} = Dimensions.get('window');

const PaymentSlider = ({
  onPress,
  datalist,
  scrollimgstyle,
  source,
  blogpost,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const goPreviousSlide = () => {
    const PreviousSlideIndex = currentSlideIndex - 1;
    if (PreviousSlideIndex != -1) {
      const offset = PreviousSlideIndex * (width * 0.85);
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(PreviousSlideIndex);
    }
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / (width * 0.85));
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != datalist.length) {
      const offset = nextSlideIndex * (width * 0.85);
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  return (
    <View>
      <FlatList
        data={datalist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <View key={index} onPress={onPress} style={styles.scrollBox}>
            <Image
              source={item?.img}
              style={[styles.scrollImage, scrollimgstyle]}
            />
          </View>
        )}
      />
      <View style={styles.iconrow}>
        {datalist?.map((item, index) => {
          return (
            <Image
              source={currentSlideIndex == index ? icons.sqrfill : icons.sqr}
              style={[
                styles.icon,
                {
                  tintColor:
                    currentSlideIndex == index ? COLORS.brown : COLORS.gray,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PaymentSlider;
const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    // alignSelf: 'center',
  },
  scrollImage: {
    width: width * 0.85,
    height: height * 0.24,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  iconrow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height * 0.012,
  },
  icon: {
    height: width * 0.03,
    width: width * 0.03,
    resizeMode: 'contain',
    marginHorizontal: width * 0.01,
  },
});
