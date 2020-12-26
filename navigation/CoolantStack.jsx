import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CoolantOverviewScreen from '../screens/Coolant/CoolantOverviewScreen'
import CoolantSeaWaterScreen from '../screens/Coolant/CoolantSeaWaterSystemScreen'
import CoolantFreshWaterScreen from '../screens/Coolant/CoolantFreshWaterSystemScreen'

const CoolantStack = createStackNavigator()
const CoolantTabNavigator = () => (
  <CoolantStack.Navigator initialRouteName="CoolantOverviewScreen">
    <CoolantStack.Screen
      name="CoolantOverviewScreen"
      component={CoolantOverviewScreen}
      options={{ headerTitle: 'COOLANT - Overview' }}
    />
    <CoolantStack.Screen
      name="CoolantSeaWaterScreen"
      component={CoolantSeaWaterScreen}
      options={{ headerTitle: 'COOLANT - Sea Water System' }}
    />
    <CoolantStack.Screen
      name="CoolantFreshWaterScreen"
      component={CoolantFreshWaterScreen}
      options={{ headerTitle: 'COOLANT - Fresh Water System' }}
    />
  </CoolantStack.Navigator>

)

export default CoolantTabNavigator
