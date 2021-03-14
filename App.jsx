import React from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'

import { SimulatorProvider } from './SimulatorContext'
import Navigation from './navigation'

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
      <SimulatorProvider>

        <Navigation colorScheme={colorScheme} />
        <StatusBar />

      </SimulatorProvider>

    </SafeAreaProvider>
  )
}

export default App
