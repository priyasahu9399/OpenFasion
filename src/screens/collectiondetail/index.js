import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import CollectionCart from './../../component/carts/collectioncart';
import ContactUs from './../../component/carts/contactus';
import NewArrivalCart from './../../component/carts/newarriveCart';
import BorderHeading from './../../component/carts/borderHeading';

const {height, width} = Dimensions.get('window');

const CollectionDetail = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <View style={styles.innercontainer}>
        <Image source={icons.October} style={styles.octLogo} />
        <Text style={styles.mainhead2}>COLLECTION</Text>

        <Image source={images.collaction1} style={styles.bigimg} />

        <FlatList
          data={data.categorygridlist}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item, index}) => (
            <NewArrivalCart
              title={item.title}
              subtitle={item?.subtitle}
              price={item.price}
              img={item.img}
              wishlistcategorycart
              titlestyle={{color: COLORS.white}}
            />
          )}
        />
        <BorderHeading
          heading="You may also like"
          border
          borderstyle={{tintColor: COLORS.white, marginVertical: height * 0.01}}
          headingstyle={{color: COLORS.white, marginTop: height * 0.06}}
        />
      </View>
      <View style={{color: COLORS.black}}>
        <FlatList
          data={data.collection}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.likebox,
                {
                  marginLeft: index == 0 ? width * 0.04 : width * 0.01,
                  marginRight:
                    data?.collection?.length - 1 ? width * 0.04 : width * 0.01,
                },
              ]}>
              <Image source={item?.img} style={styles.likeimg} />
              <Text style={styles.liketext}>{item?.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ContactUs navigation={navigation} mainBox={{marginTop: height * 0.05}} />
    </ScrollView>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail);
