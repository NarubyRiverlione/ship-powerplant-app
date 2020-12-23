import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FuelOverviewScreen from '../screens/Fuel/FuelOverviewScreen'
import FuelStorageScreen from '../screens/Fuel/FuelStorageScreen'
import FuelServiceScreen from '../screens/Fuel/FuelServiceScreen'

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
      name="FuelServiceScreen"
      component={FuelServiceScreen}
      options={{ headerTitle: 'FUEL - Service' }}
    />
  </FuelStack.Navigator>
)

export default FuelTabNavigator
