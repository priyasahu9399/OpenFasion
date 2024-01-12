import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
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

const ProductSlider = ({onPresszoom, datalist}) => {
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
  }, 4000);

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
      <TouchableOpacity onPress={onPresszoom} style={styles.bgzoomiconbox}>
        <Image source={icons.zoom} style={styles.bgzoomicon} />
      </TouchableOpacity>
      <FlatList
        data={datalist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <View key={index} style={styles.scrollBox}>
            <Image source={item?.image} style={styles.scrollImage} />
          </View>
        )}
      />
      <View style={styles.iconrow}>
        {datalist?.map((item, index) => {
          return (
            <Image
              source={currentSlideIndex == index ? icons.sqrfill : icons.sqr}
              style={styles.icon}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ProductSlider;
const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  scrollImage: {
    width: width * 0.94,
    height: height * 0.68,
    resizeMode: 'stretch',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  iconrow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height * 0.015,
  },
  icon: {
    height: width * 0.03,
    width: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.gray,
    marginHorizontal: width * 0.01,
  },
  bgzoomicon: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'stretch',
  },
  bgzoomiconbox: {
    position: 'absolute',
    bottom: height * 0.06,
    right: width * 0.06,
    zIndex: 11,
  },
});
