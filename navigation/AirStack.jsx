import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AirOverviewScreen from '../screens/Air/AirOverviewScreen'
import AirStorageScreen from '../screens/Air/AirStorageScreen'

const AirStack = createStackNavigator()
const AirTabNavigator = () => (
  <AirStack.Navigator initialRouteName="AirOverviewScreen">
    <AirStack.Screen
      name="AirOverviewScreen"
      component={AirOverviewScreen}
      options={{ headerTitle: 'COMPRESSED AIR - Overview' }}
    />
    <AirStack.Screen
      name="AirStorageScreen"
      component={AirStorageScreen}
      options={{ headerTitle: 'COMPRESSED AIR - Storage' }}
    />
  </AirStack.Navigator>

)

export default AirTabNavigator
