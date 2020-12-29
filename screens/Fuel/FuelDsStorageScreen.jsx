import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import CstResourceColor from '../../CstColors'

const FuelDsStorageScreen = observer(() => {
  const Sim = SimContext()
  const { FuelSys } = Sim
  const { DsShoreValve, DsStorage, DsService } = FuelSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Text x={30} y={40} fill="black" fontSize={12}>{DsShoreValve.Name}</Text>

          <Pipe
            x1={10}
            y1={60}
            x2={40}
            y2={60}
            ContentColor={CstResourceColor.Diesel}
            HasContent
          />
          <Valve
            X={40}
            Y={60}
            LeftToRight
            Position={FuelSys.DsShoreValve.isOpen}
            cb={() => FuelSys.DsShoreValve.Toggle()}
          />
          <Pipe x1={120} y1={60} x2={210} y2={60} ContentColor={CstResourceColor.Diesel} HasContent={DsShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name={DsStorage.Tank.Name}
            TankSys={DsStorage}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gray"
          />

          <Pipe
            x1={550}
            y1={210}
            x2={610}
            y2={210}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content() !== 0}
          />

          <TankValves
            X={600}
            Y={160}
            Name={DsService.Tank.Name}
            TankSys={DsService}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gainsboro"
          />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default FuelDsStorageScreen
