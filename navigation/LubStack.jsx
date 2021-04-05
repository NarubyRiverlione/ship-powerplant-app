import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import LubOverviewScreen from '../screens/Lub/LubOverviewScreen'
import LubStorageScreen from '../screens/Lub/LubStorageScreen'

const LubStack = createStackNavigator()
const LubTabNavigator = () => (
  <LubStack.Navigator initialRouteName={NavScreen.Lubrication.OverviewScreen}>
    <LubStack.Screen
      name={NavScreen.Lubrication.OverviewScreen}
      component={LubOverviewScreen}
      options={{ headerTitle: NavText.Lubrication.OverviewScreen }}
    />
    <LubStack.Screen
      name={NavScreen.Lubrication.StorageScreen}
      component={LubStorageScreen}
      options={{ headerTitle: NavText.Lubrication.StorageScreen }}
    />
  </LubStack.Navigator>
)

export default LubTabNavigator
