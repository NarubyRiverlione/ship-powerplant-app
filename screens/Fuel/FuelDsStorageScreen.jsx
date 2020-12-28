import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'

const FuelDsStorageScreen = observer(() => {
  const Sim = SimContext()
  const { FuelSys } = Sim
  const { DsShoreValve, DsStorage } = FuelSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Text x={30} y={40} stroke="black" fontSize={12}>Shore fill valve</Text>

          <Pipe x1={10} y1={60} x2={40} y2={60} ContentColor="green" HasContent />
          <Valve
            X={40}
            Y={60}
            LeftToRight
            Position={FuelSys.DsShoreValve.isOpen}
            cb={() => FuelSys.DsShoreValve.Toggle()}
          />
          <Pipe x1={120} y1={60} x2={210} y2={60} ContentColor="green" HasContent={DsShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name="DS Storage tank"
            TankSys={FuelSys.DsStorage}
            ContentColor="green"
          />

          <Pipe x1={550} y1={210} x2={610} y2={210} ContentColor="green" HasContent={DsStorage.OutletValve.Content() !== 0} />

          <TankValves
            X={600}
            Y={160}
            Name="DS Service tank"
            TankSys={FuelSys.DsService}
            ContentColor="green"
          />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default FuelDsStorageScreen
