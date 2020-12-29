import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Line } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import BigValve from '../../components/svg/BigValve'
import BigPipe from '../../components/svg/BigPipe'
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
          <BigValve
            X={300}
            Y={365}
            isOpen={EmergencyOutletValve.isOpen}
            cb={() => EmergencyOutletValve.Toggle()}
            OpenColor={CstResourceColor.CompressedAir}
          />
          <BigPipe
            x1={352}
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

          <Line
            x1={655}
            y1={397}
            x2={655}
            y2={403}
            strokeWidth="2"
            stroke={EmergencyOutletValve.Content() !== 0 ? CstResourceColor.CompressedAir : 'white'}
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default AirStartScreen
