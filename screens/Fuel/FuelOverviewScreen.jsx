import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../../styles'

export default function FuelOverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>

      <Text style={styles.subTitle}>Storage</Text>
      <Button title="Go to storage" onPress={() => navigation.navigate('FuelStorageScreen')} />

      <Text style={styles.subTitle}>Service</Text>
      <Button title="Go to service" onPress={() => navigation.navigate('FuelServiceScreen')} />

    </View>
  )
}

FuelOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}