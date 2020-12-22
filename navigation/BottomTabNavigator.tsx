import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types'

import PowerOverviewScreen from '../screens/Power/PowerOverviewScreen'
import PowerGenerator1Screen from '../screens/Power/PowerGenerator1Screen'
import PowerConsumersScreen from '../screens/Power/PowerConsumersScreen'

import FuelOverviewScreen from '../screens/Fuel/FuelOverviewScreen'
import FuelStorageScreen from '../screens/Fuel/FuelStorageScreen'
import FuelServiceScreen from '../screens/Fuel/FuelServiceScreen'

// #region Screen stacks
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FuelStack = createStackNavigator<TabOneParamList>()
function PowerTabNavigator() {
  return (
    <FuelStack.Navigator>
      <FuelStack.Screen
        name="PowerOverviewScreen"
        component={PowerOverviewScreen}
        options={{ headerTitle: 'POWER - overview' }}
      />
      <FuelStack.Screen
        name="PowerConsumersScreen"
        component={PowerConsumersScreen}
        options={{ headerTitle: 'POWER - consumers' }}
      />
      <FuelStack.Screen
        name="PowerGenerator1Screen"
        component={PowerGenerator1Screen}
        options={{ headerTitle: 'POWER - DS 1' }}
      />
    </FuelStack.Navigator>
  )
}

const PowerStack = createStackNavigator<TabTwoParamList>()
function FuelTabNavigator() {
  return (
    <PowerStack.Navigator initialRouteName="FuelOverviewScreen">
      <PowerStack.Screen
        name="FuelOverviewScreen"
        component={FuelOverviewScreen}
        options={{ headerTitle: 'FUEL - Overview' }}
      />
      <PowerStack.Screen
        name="FuelStorageScreen"
        component={FuelStorageScreen}
        options={{ headerTitle: 'FUEL - Storage' }}
      />
      <PowerStack.Screen
        name="FuelServiceScreen"
        component={FuelServiceScreen}
        options={{ headerTitle: 'FUEL - Service' }}
      />
    </PowerStack.Navigator>
  )
}
// #endregion

// #region Bottom tabbar
const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Fuel"
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

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// #endregion
