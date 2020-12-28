import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FuelOverviewScreen from '../screens/Fuel/FuelOverviewScreen'
import FuelStorageScreen from '../screens/Fuel/TxtFuelStorageScreen'
import FuelDsStorageScreen from '../screens/Fuel/FuelDsStorageScreen'
import FuelHfStorageScreen from '../screens/Fuel/FuelHfStorageScreen'
import FuelHfServiceScreen from '../screens/Fuel/FuelHfServiceScreen'

const FuelStack = createStackNavigator()
const FuelTabNavigator = () => (
  <FuelStack.Navigator initialRouteName="FuelOverviewScreen">
    <FuelStack.Screen
      name="FuelOverviewScreen"
      component={FuelOverviewScreen}
      options={{ headerTitle: 'FUEL - Overview' }}
    />
    <FuelStack.Screen
      name="FuelStorageScreen"
      component={FuelStorageScreen}
      options={{ headerTitle: 'FUEL - Storage' }}
    />
    <FuelStack.Screen
      name="FuelDsStorageScreen"
      component={FuelDsStorageScreen}
      options={{ headerTitle: 'FUEL - Diesel oil storage' }}
    />
    <FuelStack.Screen
      name="FuelHfStorageScreen"
      component={FuelHfStorageScreen}
      options={{ headerTitle: 'FUEL - Heavy fuel storage' }}
    />
    <FuelStack.Screen
      name="FuelHfServiceScreen"
      component={FuelHfServiceScreen}
      options={{ headerTitle: 'FUEL - Heavy fuel service' }}
    />
  </FuelStack.Navigator>
)

export default FuelTabNavigator
