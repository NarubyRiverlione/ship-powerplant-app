import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import Compressor from '../../components/svg/Compressor'
import CstResourceColor from '../../CstColors'

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
          <Compressor
            X={50}
            Y={280}
            Name={EmergencyCompressor.Name}
            hasElectricity={EmergencyCompressor.CheckPower()}
            isRunning={EmergencyCompressor.isRunning}
            cb={() => {
              EmergencyCompressor.Toggle()
            }}
          />
          <Valve
            X={300}
            Y={400}
            LeftToRight
            Position={EmergencyOutletValve.isOpen}
            cb={() => EmergencyOutletValve.Toggle()}
          />
          <Pipe
            x1={380}
            y1={400}
            x2={660}
            y2={400}
            ContentColor={CstResourceColor.CompressedAir}
            HasContent={EmergencyOutletValve.Content() !== 0}
          />

          <TankValves
            X={650}
            Y={350}
            Name={EmergencyReceiver.Tank.Name}
            TankSys={EmergencyReceiver}
            ContentColor={CstResourceColor.CompressedAir}
            TankColor="gainsboro"
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default AirStartScreen
