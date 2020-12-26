import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EngineOverviewScreen from '../screens/Engine/EngineOverviewScreen'

const Engine = createStackNavigator()
const EngineTabNavigator = () => (
  <Engine.Navigator initialRouteName="EngineOverviewScreen">
    <Engine.Screen
      name="EngineOverviewScreen"
      component={EngineOverviewScreen}
      options={{ headerTitle: 'ENGINE - Overview' }}
    />

  </Engine.Navigator>
)

export default EngineTabNavigator
