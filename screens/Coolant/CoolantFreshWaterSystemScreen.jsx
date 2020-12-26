import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const CoolantFreshWaterSystemScreen = ({ navigation }) => (
  <SimulatorScreen>
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Text style={styles.subTitle}>Fresh Water System</Text>
      </View>
    </View>

  </SimulatorScreen>
)

CoolantFreshWaterSystemScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CoolantFreshWaterSystemScreen
