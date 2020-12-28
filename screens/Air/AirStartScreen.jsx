import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'

const AirStartScreen = observer(() => {
  const Sim = SimContext()
  const {
    AirSys: {
      EmergencyCompressor, EmergencyOutletValve, EmergencyReceiver,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <Pipe x1={250} y1={400} x2={300} y2={400} ContentColor="grey" HasContent={EmergencyCompressor.Content() !== 0} />
          <Valve
            X={300}
            Y={400}
            LeftToRight
            Position={EmergencyOutletValve.isOpen}
            cb={() => EmergencyOutletValve.Toggle()}
          />
          <Pipe x1={380} y1={400} x2={660} y2={400} ContentColor="grey" HasContent={EmergencyOutletValve.Content() !== 0} />

          <TankValves
            X={650}
            Y={350}
            Name="Emergency receiver"
            TankSys={EmergencyReceiver}
            ContentColor="grey"
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default AirStartScreen
