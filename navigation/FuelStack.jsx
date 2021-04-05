import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import FuelOverviewScreen from '../screens/Fuel/FuelOverviewScreen'
import FuelDsStorageScreen from '../screens/Fuel/FuelDsStorageScreen'
import FuelHfStorageScreen from '../screens/Fuel/FuelHfStorageScreen'
import FuelHfServiceScreen from '../screens/Fuel/FuelHfServiceScreen'

const FuelStack = createStackNavigator()
const FuelTabNavigator = () => (
  <FuelStack.Navigator initialRouteName={NavScreen.Fuel.OverviewScreen}>
    <FuelStack.Screen
      name={NavScreen.Fuel.OverviewScreen}
      component={FuelOverviewScreen}
      options={{ headerTitle: NavText.Fuel.OverviewScreen }}
    />
    <FuelStack.Screen
      name={NavScreen.Fuel.DsStorageScreen}
      component={FuelDsStorageScreen}
      options={{ headerTitle: NavText.Fuel.DsStorageScreen }}
    />
    <FuelStack.Screen
      name={NavScreen.Fuel.HfStorageScreen}
      component={FuelHfStorageScreen}
      options={{ headerTitle: NavText.Fuel.HfStorageScreen }}
    />
    <FuelStack.Screen
      name={NavScreen.Fuel.HfServiceScreen}
      component={FuelHfServiceScreen}
      options={{ headerTitle: NavText.Fuel.HfServiceScreen }}
    />
  </FuelStack.Navigator>
)

export default FuelTabNavigator
