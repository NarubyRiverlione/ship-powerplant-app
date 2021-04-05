import React from 'react'
import { View } from 'react-native'
import Svg from 'react-native-svg'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import StartAirSystem from '../../components/StartAirSystem'
import StartAirEmergencySystem from '../../components/StartAirEmergencySystem'

const AirStartScreen = observer(() => {
  const Sim = SimContext()
  const {
    AirSys: {
      StartAirCompressor, StartAirReceiver, StartAirCooler,
      EmergencyCompressor, EmergencyReceiver,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <StartAirSystem
            X={50}
            Y={10}
            StartAirCooler={StartAirCooler}
            StartCompressor={StartAirCompressor}
            Receiver={StartAirReceiver}
            ReceiverColor="grey"
          />

          <StartAirEmergencySystem
            X={50}
            Y={300}
            StartCompressor={EmergencyCompressor}
            Receiver={EmergencyReceiver}
            ReceiverColor="gainsboro"
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default AirStartScreen
