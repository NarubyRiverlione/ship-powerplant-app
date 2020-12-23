import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PowerOverviewScreen from '../screens/Power/PowerOverviewScreen'
import PowerSwitchboardScreen from '../screens/Power/PowerSwitchboardScreen'
import PowerGenerator1Screen from '../screens/Power/PowerGenerator1Screen'
import PowerConsumersScreen from '../screens/Power/PowerConsumersScreen'

const PowerStack = createStackNavigator()

const PowerTabNavigator = () => (
  <PowerStack.Navigator>
    <PowerStack.Screen
      name="PowerOverviewScreen"
      component={PowerOverviewScreen}
      options={{ headerTitle: 'POWER - overview' }}
    />
    <PowerStack.Screen
      name="PowerSwitchboardScreen"
      component={PowerSwitchboardScreen}
      options={{ headerTitle: 'POWER - switchboard' }}
    />
    <PowerStack.Screen
      name="PowerConsumersScreen"
      component={PowerConsumersScreen}
      options={{ headerTitle: 'POWER - consumers' }}
    />
    <PowerStack.Screen
      name="PowerGenerator1Screen"
      component={PowerGenerator1Screen}
      options={{ headerTitle: 'POWER - DS 1' }}
    />
  </PowerStack.Navigator>
)

export default PowerTabNavigator
