import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const CoolantSeaWaterSystemScreen = ({ navigation }) => (
  <SimulatorScreen>
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Text style={styles.subTitle}>Sea Water System</Text>
      </View>
    </View>

  </SimulatorScreen>
)

CoolantSeaWaterSystemScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CoolantSeaWaterSystemScreen
