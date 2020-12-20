import * as React from 'react'
import { Button, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../../styles'

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

PowerOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
