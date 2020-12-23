import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'

import FuelTabNavigator from './FuelStack'
import PowerTabNavigator from './PowerStack'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Power"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Power"
        component={PowerTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Fuel"
        component={FuelTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
// BottomTabNavigator.propTypes = {
//   color: PropTypes.string.isRequired,
// }

export default BottomTabNavigator

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({ name, color }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} name={name} color={color} />
}
TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
// #endregion
