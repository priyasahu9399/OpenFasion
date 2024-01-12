import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, Image, Text, View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {COLORS, icons, images} from '../../constants';
import styles from './styles';
import Home from './../../screens/home';
import Search from './../../screens/search';
import Blog from './../../screens/blog';
import BlogListView from './../../screens/bloglistview';
import BlogPost from './../../screens/blogPost';
import CategoryGridView from './../../screens/categorygridview';
import SearchView from './../../screens/searchView';
import OurStory from './../../screens/ourStory';
import PageNotFound from './../../screens/pageNotFound';
import ContactUsPage from './../../screens/contactus';
import Collection from './../../screens/collection/index';
import CollectionDetail from './../../screens/collectiondetail/index';
import AddAddress from './../../screens/addAddress/index';
import CategoryGridFullView from './../../screens/categoryGridFullView/index';
import Cart from './../../screens/cart/index';
import CheckOut from './../../screens/checkout/index';
import AddNewCart from './../../screens/addnewcart/index';
import PlaceOrder from './../../screens/placeorder/index';
import CheckOut2 from './../../screens/checkout2/index';
import ProductDetail2 from "./../../screens/productDetail2/index";
import ProductDetail1 from "./../../screens/productDetail1/index";
import FullImage from "./../../screens/fullImage/index";

const Stack = createStackNavigator();
const {height, width} = Dimensions.get('window');

const HeaderLeft = ({onPress, menustyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icons.Menu} style={[styles.menu, menustyle]} />
    </TouchableOpacity>
  );
};
const HeaderTitle = ({titleimgstyle}) => {
  return (
    <Image source={images.logo} style={[styles.titleimg, titleimgstyle]} />
  );
};

const HeaderRight = ({onPressSearch, onPresscart, righticonstyle}) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onPressSearch}>
        <Image
          source={icons.search}
          style={[styles.meheaderrighticon, righticonstyle]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPresscart}>
        <Image
          source={icons.bag}
          style={[styles.meheaderrighticon, righticonstyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerstyle,
        headerTitleAlign: 'center',
        headerTitle: () => <HeaderTitle />,
        headerLeft: () => (
          <HeaderLeft onPress={() => navigation?.openDrawer()} />
        ),
        headerRight: () => (
          <HeaderRight
            onPresscart={() => navigation.navigate('Cart')}
            onPressSearch={() => navigation.navigate('Search')}
          />
        ),
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogListView" component={BlogListView} />
      <Stack.Screen name="BlogPost" component={BlogPost} />
      <Stack.Screen name="CategoryGridView" component={CategoryGridView} />
      <Stack.Screen name="SearchView" component={SearchView} />
      <Stack.Screen name="OurStory" component={OurStory} />
      <Stack.Screen name="PageNotFound" component={PageNotFound} />
      <Stack.Screen name="ContactUsPage" component={ContactUsPage} />

      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: COLORS.black,
          },
          headerTitle: () => (
            <HeaderTitle titleimgstyle={{tintColor: COLORS.white}} />
          ),
          headerLeft: () => (
            <HeaderLeft
              menustyle={{tintColor: COLORS.white}}
              onPress={() => navigation?.openDrawer()}
            />
          ),
          headerRight: () => (
            <HeaderRight
              righticonstyle={{tintColor: COLORS.white}}
              onPressSearch={() => navigation.navigate('Search')}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CollectionDetail"
        component={CollectionDetail}
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: COLORS.black,
          },
          headerTitle: () => (
            <HeaderTitle titleimgstyle={{tintColor: COLORS.white}} />
          ),
          headerLeft: () => (
            <HeaderLeft
              menustyle={{tintColor: COLORS.white}}
              onPress={() => navigation?.openDrawer()}
            />
          ),
          headerRight: () => (
            <HeaderRight
              righticonstyle={{tintColor: COLORS.white}}
              onPressSearch={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CategoryGridFullView"
        component={CategoryGridFullView}
      />

      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="AddNewCart" component={AddNewCart} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="CheckOut2" component={CheckOut2} />
      <Stack.Screen name="ProductDetail2" component={ProductDetail2} />
      <Stack.Screen name="ProductDetail1" component={ProductDetail1} />
      <Stack.Screen
        name="FullImage"
        component={FullImage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
