import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { observer } from 'mobx-react-lite'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'

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
