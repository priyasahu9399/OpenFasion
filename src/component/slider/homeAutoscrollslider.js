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

const HomeSlider = ({onPress, datalist, scrollimgstyle, source, blogpost}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); //null ref a raha

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    goNextSlide();
    if (currentSlideIndex == datalist?.length - 1) {
      ref?.current?.scrollToOffset(0);
      setCurrentSlideIndex(0);
    }
  }, 3500);

  const goPreviousSlide = () => {
    const PreviousSlideIndex = currentSlideIndex - 1;
    if (PreviousSlideIndex != -1) {
      const offset = PreviousSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(PreviousSlideIndex);
    }
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != datalist.length) {
      const offset = nextSlideIndex * width;
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
              source={item?.image}
              style={[styles.scrollImage, scrollimgstyle]}
            />
          </View>
        )}
      />
      <View style={[blogpost ? styles.dotimgBox : styles.iconrow]}>
        {datalist?.map((item, index) => {
          return (
            <Image
              source={currentSlideIndex == index ? icons.sqrfill : icons.sqr}
              style={[styles.icon, blogpost && {tintColor: COLORS.gray}]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default HomeSlider;
const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  scrollImage: {
    width: width,
    height: height * 0.68,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  iconrow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: height * 0.015,
  },
  icon: {
    height: width * 0.03,
    width: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    marginHorizontal: width * 0.01,
  },

  // ------------blog post
  dotimgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height * 0.015,
  },
});
