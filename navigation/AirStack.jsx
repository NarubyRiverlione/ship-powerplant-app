import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import AirOverviewScreen from '../screens/Air/AirOverviewScreen'
import AirStartScreen from '../screens/Air/AirStartScreen'
import AirControlScreen from '../screens/Air/AirControlScreen'

const AirStack = createStackNavigator()
const AirTabNavigator = () => (
  <AirStack.Navigator initialRouteName={NavScreen.Air.OverviewScreen}>
    <AirStack.Screen
      name={NavScreen.Air.OverviewScreen}
      component={AirOverviewScreen}
      options={{ headerTitle: NavText.Air.OverviewScreen }}
    />
    <AirStack.Screen
      name={NavScreen.Air.StartScreen}
      component={AirStartScreen}
      options={{ headerTitle: NavText.Air.StartScreen }}
    />
    <AirStack.Screen
      name={NavScreen.Air.ControlScreen}
      component={AirControlScreen}
      options={{ headerTitle: NavText.Air.ControlScreen }}
    />
  </AirStack.Navigator>

)

export default AirTabNavigator
