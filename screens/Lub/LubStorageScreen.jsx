import * as React from 'react'
import { View } from 'react-native'
import Svg, { Text, Line } from 'react-native-svg'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Arrow from '../../components/svg/Arrow'
import Pipe from '../../components/svg/Pipe'
import CstResourceColor from '../../constants/CstColors'

const LubStorageScreen = observer(() => {
  const Sim = SimContext()
  const { LubSys: { Storage, ShoreValve } } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <Pipe x1={10} y1={60} x2={40} y2={60} ContentColor={CstResourceColor.Lubrication} HasContent />
          <Valve
            X={40}
            Y={25}
            ContentColor={CstResourceColor.Lubrication}
            ValveObj={ShoreValve}
          />
          <Arrow X={20} Y={70} />
          <Text x={20} y={110} fill="black" fontSize={12}>{ShoreValve.Name}</Text>
          <Pipe x1={90} y1={60} x2={210} y2={60} ContentColor={CstResourceColor.Lubrication} HasContent={ShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name={Storage.Tank.Name}
            TankSys={Storage}
            ContentColor={CstResourceColor.Lubrication}
            TankColor="gainsboro"
          />
          <Line
            x1={205}
            y1={57}
            x2={205}
            y2={63}
            strokeWidth="2"
            stroke={ShoreValve.isOpen ? CstResourceColor.Lubrication : 'white'}
          />
          <Pipe x1={550} y1={210} x2={900} y2={210} ContentColor={CstResourceColor.Lubrication} HasContent={Storage.OutletValve.Content !== 0} />
          <Line
            x1={550}
            y1={207}
            x2={550}
            y2={213}
            strokeWidth="2"
            stroke={Storage.OutletValve.Content !== 0 ? CstResourceColor.Lubrication : 'white'}
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default LubStorageScreen
