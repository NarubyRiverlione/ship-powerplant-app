import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PowerSwitchboardScreen from '../screens/Power/PowerSwitchboardScreen'
import PowerGeneratorScreen from '../screens/Power/PowerGeneratorScreen'

const PowerStack = createStackNavigator()

const PowerTabNavigator = () => (
  <PowerStack.Navigator>
    <PowerStack.Screen
      name="PowerSwitchboardScreen"
      component={PowerSwitchboardScreen}
      options={{ headerTitle: 'POWER - switchboard' }}
    />

    <PowerStack.Screen
      name="PowerGeneratorScreen"
      component={PowerGeneratorScreen}
      options={{ headerTitle: 'POWER - DIESEL GENERATOR' }}
    />
  </PowerStack.Navigator>
)

export default PowerTabNavigator
