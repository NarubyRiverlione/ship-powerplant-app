import React from 'react'
import { Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import PropTypes from 'prop-types'

import EngineTabNavigator from './EngineStack'
import FuelTabNavigator from './FuelStack'
import PowerTabNavigator from './PowerStack'
import LubTabNavigator from './LubStack'
import AirTabNavigator from './AirStack'
import CoolantTabNavigator from './CoolantStack'
import SteamTabNavigator from './SteamStack'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import AlarmModalScreen from '../screens/AlarmModalScreen'

function TabBarIcon({ name, color }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} name={name} color={color} />
}
TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

const BottomTabStack = createBottomTabNavigator()
const BottomTabBarNavigator = () => {
  const colorScheme = useColorScheme()
  return (
    <BottomTabStack.Navigator
      initialRouteName="Fuel"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTabStack.Screen
        name="Main Engine"
        component={EngineTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="engine" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name="Power"
        component={PowerTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="lightning-bolt" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name="Fuel"
        component={FuelTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="fuel" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name="Lubrication"
        component={LubTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="oil" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name="Comp. Air"
        component={AirTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="air-filter" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name="Coolant"
        component={CoolantTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="coolant-temperature" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name="Steam"
        component={SteamTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="kettle-steam" color={color} />,
        }}
      />
    </BottomTabStack.Navigator>
  )
}

const RootStack = createStackNavigator()
const RootStackNavigator = () => (
  <RootStack.Navigator
    mode="modal"
    initialRouteName="BottomTabBar"
    screenOptions={{ headerShown: false }}
  >
    <RootStack.Screen
      name="BottomTabBar"
      component={BottomTabBarNavigator}

    />

    <RootStack.Screen
      name="AlarmModal"
      component={AlarmModalScreen}

    />

  </RootStack.Navigator>
)

export default RootStackNavigator
