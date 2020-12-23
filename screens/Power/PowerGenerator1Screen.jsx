import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

export default function PowerGenerator1Screen() {
  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Diesel generator 1</Text>

      </View>
    </SimulatorScreen>
  )
}
