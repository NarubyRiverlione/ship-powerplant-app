import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LubOverviewScreen from '../screens/Lub/LubOverviewScreen'
import LubStorageScreen from '../screens/Lub/LubStorageScreen'

const LubStack = createStackNavigator()
const LubTabNavigator = () => (
  <LubStack.Navigator initialRouteName="LubOverviewScreen">
    <LubStack.Screen
      name="LubOverviewScreen"
      component={LubOverviewScreen}
      options={{ headerTitle: 'LUBRICATION - Overview' }}
    />
    <LubStack.Screen
      name="LubStorageScreen"
      component={LubStorageScreen}
      options={{ headerTitle: 'LUBRICATION - Storage' }}
    />
  </LubStack.Navigator>
)

export default LubTabNavigator
