import * as React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles'

export default function PowerGenerator1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumers</Text>
      <Text style={styles.text}>Main bus - Emergency bus - Shore </Text>

    </View>
  )
}
