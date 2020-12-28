import * as React from 'react'
import { View } from 'react-native'
import Svg, { Text } from 'react-native-svg'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import CstResourceColor from '../../CstColors'

const LubStorageScreen = observer(() => {
  const Sim = SimContext()
  const { LubSys: { Storage, ShoreValve } } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Text x={30} y={40} stroke="black" fontSize={12}>{ShoreValve.Name}</Text>

          <Pipe x1={10} y1={60} x2={40} y2={60} ContentColor={CstResourceColor.Lubrication} HasContent />
          <Valve
            X={40}
            Y={60}
            LeftToRight
            Position={ShoreValve.isOpen}
            cb={() => ShoreValve.Toggle()}
          />
          <Pipe x1={120} y1={60} x2={210} y2={60} ContentColor={CstResourceColor.Lubrication} HasContent={ShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name={Storage.Tank.Name}
            TankSys={Storage}
            ContentColor={CstResourceColor.Lubrication}
            TankColor="gainsboro"
          />

          <Pipe x1={550} y1={210} x2={610} y2={210} ContentColor={CstResourceColor.Lubrication} HasContent={Storage.OutletValve.Content() !== 0} />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default LubStorageScreen
