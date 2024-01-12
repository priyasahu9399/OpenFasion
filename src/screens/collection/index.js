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

const {height, width} = Dimensions.get('window');

const Collection = ({navigation}) => {
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
        {/* <Text style={styles.mainhead}>October</Text> */}
        <Image source={icons.October} style={styles.octLogo} />
        <Text style={styles.mainhead2}>COLLECTION</Text>

        {data.collection.map((item, index) => (
          <CollectionCart
            img={item?.img}
            title={item.title}
            num={item.num}
            onPress={() => navigation.navigate('CollectionDetail')}
          />
        ))}
      </View>

      <ContactUs navigation={navigation} mainBox={{marginTop: height * 0.05}} />
    </ScrollView>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
