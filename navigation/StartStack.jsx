import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StartConditionsScreen from '../screens/StartConditionsScreen'

import BottomTabNavigator from './BottomTabNavigator'

const StartStack = createStackNavigator()
const StartNavigator = () => (
  <StartStack.Navigator initialRouteName="StartConditionsScreen" screenOptions={{ headerShown: false }}>
    <StartStack.Screen
      name="StartConditionsScreen"
      component={StartConditionsScreen}
      options={{ headerTitle: 'Simulator' }}
    />
    <StartStack.Screen
      name="BottomTabNavigator"
      component={BottomTabNavigator}
    //   options={{ headerTitle: 'COMPRESSED AIR - Start up' }}
    />

  </StartStack.Navigator>

)

export default StartNavigator
