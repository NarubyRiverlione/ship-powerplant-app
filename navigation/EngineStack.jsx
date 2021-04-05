import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavScreen, NavText } from '../constants/CstNav'
import EngineOverviewScreen from '../screens/Engine/EngineOverviewScreen'
import EngineScreen from '../screens/Engine/EngineScreen'

const Engine = createStackNavigator()
const EngineTabNavigator = () => (
  <Engine.Navigator initialRouteName={NavScreen.Engine.OverviewScreen}>
    <Engine.Screen
      name={NavScreen.Engine.OverviewScreen}
      component={EngineOverviewScreen}
      options={{ headerTitle: NavText.Engine.OverviewScreen }}
    />
    <Engine.Screen
      name={NavScreen.Engine.EngineScreen}
      component={EngineScreen}
      options={{ headerTitle: NavText.Engine.EngineScreen }}
    />

  </Engine.Navigator>
)

export default EngineTabNavigator
