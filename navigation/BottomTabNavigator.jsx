import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'

import EngineTabNavigator from './EngineStack'
import FuelTabNavigator from './FuelStack'
import PowerTabNavigator from './PowerStack'
import LubTabNavigator from './LubStack'
import AirTabNavigator from './AirStack'
import CoolantTabNavigator from './CoolantStack'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Fuel"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Main Engine"
        component={EngineTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="engine" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Power"
        component={PowerTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="lightning-bolt" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Fuel"
        component={FuelTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="fuel" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Lubrication"
        component={LubTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="oil" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Comp. Air"
        component={AirTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="air-filter" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Coolant"
        component={CoolantTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="coolant-temperature" color={color} />,
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
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} name={name} color={color} />
}
TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
// #endregion
