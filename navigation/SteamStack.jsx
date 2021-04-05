import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import SteamOverviewScreen from '../screens/Steam/SteamOverviewScreen'
import SteamBoilerScreen from '../screens/Steam/SteamBoilerScreen'

const SteamStack = createStackNavigator()
const SteamTabNavigator = () => (
  <SteamStack.Navigator initialRouteName={NavScreen.Steam.OverviewScreen}>
    <SteamStack.Screen
      name={NavScreen.Steam.OverviewScreen}
      component={SteamOverviewScreen}
      options={{ headerTitle: NavText.Steam.OverviewScreen }}
    />
    <SteamStack.Screen
      name={NavScreen.Steam.BoilerScreen}
      component={SteamBoilerScreen}
      options={{ headerTitle: NavText.Steam.BoilerScreen }}
    />
  </SteamStack.Navigator>
)

export default SteamTabNavigator
