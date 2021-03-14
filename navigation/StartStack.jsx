import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StartConditionsScreen from '../screens/StartConditionsScreen'
import RootStackNavigator from './RootStack'

const StartStack = createStackNavigator()
const StartNavigator = () => (
  <StartStack.Navigator initialRouteName="StartConditionsScreen" screenOptions={{ headerShown: false }}>
    <StartStack.Screen
      name="StartConditionsScreen"
      component={StartConditionsScreen}
      options={{ headerTitle: 'Simulator' }}
    />
    <StartStack.Screen
      name="RootStack"
      component={RootStackNavigator}
    />

  </StartStack.Navigator>

)

export default StartNavigator
