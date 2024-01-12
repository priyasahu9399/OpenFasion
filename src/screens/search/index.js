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
import CategoryList from './../../component/carts/categoryList';

const {height, width} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState('');

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.inputBox}>
        <Image source={icons.search} style={styles.listIcon} />
        <TextInput
          placeholder="Search items"
          placeholderTextColor={COLORS.black}
          style={styles.input}
          onChange={text => setPostData(text)}
          value={postData}
        />
        <TouchableOpacity onPress={() => setPostData('')}>
          {postData && <Image source={icons.Close} style={styles.listIcon} />}
        </TouchableOpacity>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Recent search</Text>
        <View style={styles.brandrow}>
          {data.searchlist.map((item, index) => (
            <CategoryList
              text={item?.text}
              cross
              listStylebox={{marginRight: width * 0.026}}
              onPress={() => navigation.navigate('SearchView')}
            />
          ))}
        </View>

        <Text style={styles.heading}>Popular search terms</Text>
        {data.searchlist1.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.navigate('SearchView')}>
            <Text style={styles.listtext}>{item?.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
