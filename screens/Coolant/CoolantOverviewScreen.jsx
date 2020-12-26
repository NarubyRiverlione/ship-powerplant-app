import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const CoolantOverviewScreen = ({ navigation }) => (
  <SimulatorScreen>
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Text style={styles.subTitle}>Sea Water System</Text>
        <Button title="Go to sea water system" onPress={() => navigation.navigate('CoolantSeaWaterScreen')} />
      </View>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Text style={styles.subTitle}>Fresh Water System</Text>
        <Button title="Go to fresh water system" onPress={() => navigation.navigate('CoolantFreshWaterScreen')} />
      </View>
    </View>
  </SimulatorScreen>
)

CoolantOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CoolantOverviewScreen
