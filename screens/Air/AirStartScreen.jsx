import * as React from 'react'
import { View, Text } from 'react-native'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'

const AirStartScreen = () => {
  const Sim = SimContext()
  const {
    AirSys: {
      EmergencyCompressor, EmergencyOutletValve, EmergencyReceiver,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{
          flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
        }}
        />
        <TankValves
          X={200}
          Y={10}
          Name="Emergency receiver"
          TankSys={EmergencyReceiver}
        />
      </View>
    </SimulatorScreen>
  )
}

export default AirStartScreen
