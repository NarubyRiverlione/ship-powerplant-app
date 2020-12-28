import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AirOverviewScreen from '../screens/Air/AirOverviewScreen'
import TxtAirStartScreen from '../screens/Air/TxtAirStartScreen'
import AirStartScreen from '../screens/Air/AirStartScreen'
import AirControlScreen from '../screens/Air/AirControlScreen'

const AirStack = createStackNavigator()
const AirTabNavigator = () => (
  <AirStack.Navigator initialRouteName="AirOverviewScreen">
    <AirStack.Screen
      name="AirOverviewScreen"
      component={AirOverviewScreen}
      options={{ headerTitle: 'COMPRESSED AIR - Overview' }}
    />
    <AirStack.Screen
      name="TxtAirStartScreen"
      component={TxtAirStartScreen}
      options={{ headerTitle: '(text) COMPRESSED AIR - Start up' }}
    />
    <AirStack.Screen
      name="AirStartScreen"
      component={AirStartScreen}
      options={{ headerTitle: 'COMPRESSED AIR - Start up' }}
    />
    <AirStack.Screen
      name="AirControlScreen"
      component={AirControlScreen}
      options={{ headerTitle: 'COMPRESSED AIR - Control' }}
    />
  </AirStack.Navigator>

)

export default AirTabNavigator
