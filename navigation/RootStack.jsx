import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import PropTypes from 'prop-types'

import EngineTabNavigator from './EngineStack'
import FuelTabNavigator from './FuelStack'
import PowerTabNavigator from './PowerStack'
import LubTabNavigator from './LubStack'
import AirTabNavigator from './AirStack'
import CoolantTabNavigator from './CoolantStack'
import SteamTabNavigator from './SteamStack'

import { NavStack, RootStackName } from '../constants/CstNav'
import { AppColors } from '../constants/CstColors'
import useColorScheme from '../hooks/useColorScheme'
import AlarmModalScreen from '../screens/AlarmModalScreen'

const TabBarIcon = ({ name, color }) => (
  <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} name={name} color={color} />
)
TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

const BottomTabStack = createBottomTabNavigator()
const BottomTabBarNavigator = () => {
  const colorScheme = useColorScheme()
  return (
    <BottomTabStack.Navigator
      initialRouteName={NavStack.MainEngine}
      tabBarOptions={{ activeTintColor: AppColors[colorScheme].tint }}
    >

      <BottomTabStack.Screen
        name={NavStack.MainEngine}
        component={EngineTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="engine" color={color} />,
        }}
      />

      <BottomTabStack.Screen
        name={NavStack.Power}
        component={PowerTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="lightning-bolt" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name={NavStack.Fuel}
        component={FuelTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="fuel" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name={NavStack.Lubrication}
        component={LubTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="oil" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name={NavStack.CompAir}
        component={AirTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="air-filter" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name={NavStack.Coolant}
        component={CoolantTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="coolant-temperature" color={color} />,
        }}
      />
      <BottomTabStack.Screen
        name={NavStack.Steam}
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
    initialRouteName={RootStackName.BottomTabBar}
    screenOptions={{ headerShown: false }}
  >

    <RootStack.Screen
      name={RootStackName.BottomTabBar}
      component={BottomTabBarNavigator}
    />

    <RootStack.Screen
      name={RootStackName.AlarmModal}
      component={AlarmModalScreen}
    />

  </RootStack.Navigator>
)

export default RootStackNavigator
