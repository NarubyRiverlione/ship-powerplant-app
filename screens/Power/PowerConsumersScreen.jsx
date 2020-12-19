import * as React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../../components/Themed'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

export default function PowerGenerator1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumers</Text>
      <Text style={styles.text}>Main bus - Emergency bus - Shore </Text>

    </View>
  )
}
