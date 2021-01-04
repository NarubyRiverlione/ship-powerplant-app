import React from 'react'
import { View } from 'react-native'
import Svg from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import StartAirSystem from '../../components/StartAirSystem'

const AirStartScreen = () => {
  const Sim = SimContext()
  const {
    AirSys: {
      StartAirCompressor1, StartCompressor1OutletValve, StartAirReceiver1,
      EmergencyCompressor, EmergencyOutletValve, EmergencyReceiver,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <StartAirSystem
            X={50}
            Y={20}
            StartCompressor={StartAirCompressor1}
            CompOutletValve={StartCompressor1OutletValve}
            Receiver={StartAirReceiver1}
            ReceiverColor="grey"
          />

          <StartAirSystem
            X={50}
            Y={280}
            StartCompressor={EmergencyCompressor}
            CompOutletValve={EmergencyOutletValve}
            Receiver={EmergencyReceiver}
            ReceiverColor="gainsboro"
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
}

export default AirStartScreen
