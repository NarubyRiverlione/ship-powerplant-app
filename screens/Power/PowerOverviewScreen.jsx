import * as React from 'react'
import { Button, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../../styles'

import ShowBusses from '../../components/ShowBusses'
import SimulatorScreen from '../SimulatorScreen'

const PowerOverviewScreen = ({ navigation }) => (
  <SimulatorScreen>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>Switchboard</Text>
        <Button title="Go to switchboard" onPress={() => navigation.navigate('PowerSwitchboardScreen')} />
        <ShowBusses />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>Consumers</Text>
        <Button title="Go to consumers" onPress={() => navigation.navigate('PowerConsumersScreen')} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>Diesel generator 1</Text>
        <Button title="Go to DS Gen 1" onPress={() => navigation.navigate('PowerGenerator1Screen')} />
      </View>

    </View>
  </SimulatorScreen>
)

PowerOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default PowerOverviewScreen
