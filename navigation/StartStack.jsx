import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StartConditionsScreen from '../screens/StartConditionsScreen'
import RootStackNavigator from './RootStack'
import { NavStack, NavScreen, NavText } from '../constants/CstNav'

const StartStack = createStackNavigator()
const StartNavigator = () => (
  <StartStack.Navigator
    initialRouteName={NavScreen.StartConditions}
    screenOptions={{ headerShown: false }}
  >
    <StartStack.Screen
      name={NavScreen.StartConditions}
      component={StartConditionsScreen}
      options={{ headerTitle: NavText.StartConditions.Simulator }}
    />

    <StartStack.Screen
      name={NavStack.Root}
      component={RootStackNavigator}
    />

  </StartStack.Navigator>

)

export default StartNavigator
