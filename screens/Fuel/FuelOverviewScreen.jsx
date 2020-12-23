import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const FuelOverviewScreen = ({ navigation }) => (
  <SimulatorScreen>
    <View style={styles.container}>
      <Text style={styles.subTitle}>Storage</Text>
      <Button title="Go to storage" onPress={() => navigation.navigate('FuelStorageScreen')} />

      <Text style={styles.subTitle}>Service</Text>
      <Button title="Go to service" onPress={() => navigation.navigate('FuelServiceScreen')} />
    </View>
  </SimulatorScreen>
)

FuelOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default FuelOverviewScreen
