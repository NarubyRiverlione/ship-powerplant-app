import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SteamOverviewScreen from '../screens/Steam/SteamOverviewScreen'
import SteamBoilerScreen from '../screens/Steam/SteamBoilerScreen'

const SteamStack = createStackNavigator()
const SteamTabNavigator = () => (
  <SteamStack.Navigator initialRouteName="SteamOverviewScreen">
    <SteamStack.Screen
      name="SteamOverviewScreen"
      component={SteamOverviewScreen}
      options={{ headerTitle: 'STEAM- Overview' }}
    />
    <SteamStack.Screen
      name="SteamBoilerScreen"
      component={SteamBoilerScreen}
      options={{ headerTitle: 'STEAM - Boiler' }}
    />
  </SteamStack.Navigator>
)

export default SteamTabNavigator
