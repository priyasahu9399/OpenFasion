import React, {useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, COLORS} from './../constants/index';
import {connect} from 'react-redux';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './../navigation/StackNavigator/index';
import DrawerScreen from "./../screens/drawerScreen/index";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {height, width} = Dimensions.get('window');

const Root = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      screenOptions={{
        drawerStyle: {
          width: width * 0.84,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleStyle: styles.headerTitle,
        headerShown: false,
      }}>
      <Stack.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

const mapStateToProps = state => ({

});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
const styles = StyleSheet.create({
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 19,
  },
});
