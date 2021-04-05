import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import CoolantOverviewScreen from '../screens/Coolant/CoolantOverviewScreen'
import CoolantSeaWaterScreen from '../screens/Coolant/CoolantSeaWaterSystemScreen'
import CoolantFreshWaterSystemScreen from '../screens/Coolant/CoolantFreshWaterSystemScreen'

const CoolantStack = createStackNavigator()
const CoolantTabNavigator = () => (
  <CoolantStack.Navigator initialRouteName={NavScreen.Coolant.OverviewScreen}>
    <CoolantStack.Screen
      name={NavScreen.Coolant.OverviewScreen}
      component={CoolantOverviewScreen}
      options={{ headerTitle: NavText.Coolant.OverviewScreen }}
    />
    <CoolantStack.Screen
      name={NavScreen.Coolant.SeaWaterScreen}
      component={CoolantSeaWaterScreen}
      options={{ headerTitle: NavText.Coolant.SeaWaterScreen }}
    />
    <CoolantStack.Screen
      name={NavScreen.Coolant.FreshWaterSystemScreen}
      component={CoolantFreshWaterSystemScreen}
      options={{ headerTitle: NavText.Coolant.FreshWaterSystemScreen }}
    />
  </CoolantStack.Navigator>

)

export default CoolantTabNavigator
