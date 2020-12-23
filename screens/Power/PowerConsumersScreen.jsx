import * as React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

export default function PowerGenerator1Screen() {
  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Consumers</Text>
        <Text style={styles.text}>Main bus - Emergency bus - Shore </Text>

      </View>
    </SimulatorScreen>
  )
}
