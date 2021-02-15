import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EngineOverviewScreen from '../screens/Engine/EngineOverviewScreen'
import EngineScreen from '../screens/Engine/EngineScreen'

const Engine = createStackNavigator()
const EngineTabNavigator = () => (
  <Engine.Navigator initialRouteName="EngineOverviewScreen">
    <Engine.Screen
      name="EngineOverviewScreen"
      component={EngineOverviewScreen}
      options={{ headerTitle: 'ENGINE - Overview' }}
    />
    <Engine.Screen
      name="EngineScreen"
      component={EngineScreen}
      options={{ headerTitle: 'ENGINE - Main' }}
    />

  </Engine.Navigator>
)

export default EngineTabNavigator
