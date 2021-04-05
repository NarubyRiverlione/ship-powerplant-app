import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import PowerSwitchboardScreen from '../screens/Power/PowerSwitchboardScreen'
import PowerGeneratorScreen from '../screens/Power/PowerGeneratorScreen'

const PowerStack = createStackNavigator()

const PowerTabNavigator = () => (
  <PowerStack.Navigator>
    <PowerStack.Screen
      name={NavScreen.Power.SwitchboardScreen}
      component={PowerSwitchboardScreen}
      options={{ headerTitle: NavText.Power.SwitchboardScreen }}
    />

    <PowerStack.Screen
      name={NavScreen.Power.DsGeneratorScreen}
      component={PowerGeneratorScreen}
      options={{ headerTitle: NavText.Power.DsGeneratorScreen }}
    />
  </PowerStack.Navigator>
)

export default PowerTabNavigator
