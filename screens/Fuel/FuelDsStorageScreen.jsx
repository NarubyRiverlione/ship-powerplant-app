import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text, Line } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import BigValve from '../../components/svg/BigValve'
import BigPipe from '../../components/svg/BigPipe'
import CstResourceColor from '../../CstColors'

const FuelDsStorageScreen = observer(() => {
  const Sim = SimContext()
  const { FuelSys } = Sim
  const { DsShoreValve, DsStorage, DsService } = FuelSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <BigPipe
            x1={10}
            y1={60}
            x2={40}
            y2={60}
            ContentColor={CstResourceColor.Diesel}
            HasContent
          />
          <BigValve
            X={40}
            Y={25}
            ContentColor={CstResourceColor.Diesel}
            Valve={DsShoreValve}
          />
          <Text x={20} y={90} fill="black" fontSize={12}>{DsShoreValve.Name}</Text>
          <BigPipe x1={90} y1={60} x2={210} y2={60} ContentColor={CstResourceColor.Diesel} HasContent={DsShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name={DsStorage.Tank.Name}
            TankSys={DsStorage}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gray"
          />
          <Line
            x1={205}
            y1={57}
            x2={205}
            y2={63}
            strokeWidth="2"
            stroke={DsShoreValve.isOpen ? CstResourceColor.Diesel : 'white'}
          />

          <BigPipe
            x1={550}
            y1={210}
            x2={610}
            y2={210}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />

          <TankValves
            X={600}
            Y={160}
            Name={DsService.Tank.Name}
            TankSys={DsService}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gainsboro"
          />
          <Line
            x1={605}
            y1={207}
            x2={605}
            y2={213}
            strokeWidth="2"
            stroke={DsStorage.OutletValve.Content !== 0 ? CstResourceColor.Diesel : 'white'}
          />
          <Line
            x1={550}
            y1={207}
            x2={550}
            y2={213}
            strokeWidth="2"
            stroke={DsStorage.OutletValve.Content !== 0 ? CstResourceColor.Diesel : 'white'}
          />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default FuelDsStorageScreen
