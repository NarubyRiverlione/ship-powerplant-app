import * as React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

export default function FuelServiceScreen() {
  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Service</Text>

      </View>
    </SimulatorScreen>
  )
}
