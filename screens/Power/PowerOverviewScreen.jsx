import * as React from 'react'
import { StyleSheet, Button } from 'react-native'
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
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    textDecorationLine: 'underline',
    marginBottom: 10,
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

export default function PowerOverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>

      <Text style={styles.subTitle}>Consumers</Text>
      <Button title="Go to consumers" onPress={() => navigation.navigate('PowerConsumersScreen')} />

      <Text style={styles.subTitle}>Diesel generator 1</Text>
      <Button title="Go to DS Gen 1" onPress={() => navigation.navigate('PowerGenerator1Screen')} />

    </View>
  )
}
