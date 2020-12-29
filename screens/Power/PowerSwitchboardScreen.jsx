import React from 'react'
import { View } from 'react-native'
import Svg from 'react-native-svg'
import PropTypes from 'prop-types'

import SwitchBoardMainBus1 from '../../components/SwitchBoardMainBus1'
import SwitchBoardEmergencyBus from '../../components/SwitchBoardEmergencyBus'
import SimulatorScreen from '../SimulatorScreen'

const PowerSwitchboardScreen = ({ navigation }) => (
  <SimulatorScreen>
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Svg width="100%" height="100%">
        <SwitchBoardMainBus1 navigation={navigation} />
        <SwitchBoardEmergencyBus />
      </Svg>
    </View>
  </SimulatorScreen>
)
PowerSwitchboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default PowerSwitchboardScreen
