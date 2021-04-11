import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text, Line, Rect } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import SmallTankValves from '../../components/svg/SmallTankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import CstResourceColor from '../../constants/CstColors'

const FuelDsStorageScreen = observer(() => {
  const Sim = SimContext()
  const { FuelSys } = Sim
  const { DsShoreValve, DsStorage, DsService } = FuelSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

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
            Y={25}
            ContentColor={CstResourceColor.Diesel}
            ValveObj={DsShoreValve}
          />
          <Text x={20} y={90} fill="black" fontSize={12}>{DsShoreValve.Name}</Text>
          <Pipe x1={90} y1={60} x2={210} y2={60} ContentColor={CstResourceColor.Diesel} HasContent={DsShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name={DsStorage.Tank.Name}
            TankSys={DsStorage}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gray"
          />
          <Text x={500} y={100} fill="black">{`Fuel consumption ${(DsStorage.Tank.RemoveEachStep * 60).toFixed(1)} / minute`}</Text>
          <Line
            x1={205}
            y1={57}
            x2={205}
            y2={63}
            strokeWidth="2"
            stroke={DsShoreValve.isOpen ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />

          <Rect x={550} y={150} width={150} height={200} stroke="black" />
          <Text x={570} y={200} fill="black">Purification (ToDo)</Text>

          <Pipe
            x1={700}
            y1={300}
            x2={750}
            y2={300}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />

          <Pipe
            x1={503}
            y1={214}
            x2={503}
            y2={400}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />
          <Line
            x1={501}
            y1={214}
            x2={505}
            y2={214}
            strokeWidth="2"
            stroke={DsStorage.OutletValve.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          <Pipe
            x1={500}
            y1={400}
            x2={600}
            y2={400}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />
          <Rect x={600} y={375} width={50} height={50} stroke="black" />
          <Text x={600} y={450} fill="black">handpump (ToDo)</Text>
          <Pipe
            x1={650}
            y1={400}
            x2={760}
            y2={400}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />
          <Line
            x1={501}
            y1={397}
            x2={505}
            y2={397}
            strokeWidth="2"
            stroke={DsStorage.OutletValve.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          {/* TODO outlet valve handpump */}
          <Valve X={760} Y={365} ValveObj={{ isOpen: false, Content: 0, Toggle: () => { } }} ContentColor={CstResourceColor.Diesel} />
          <Pipe
            x1={810}
            y1={400}
            x2={840}
            y2={400}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />

          <SmallTankValves
            X={740}
            Y={250}
            Name={DsService.Tank.Name}
            TankSys={DsService}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gainsboro"
          />
          <Line
            x1={745}
            y1={298}
            x2={745}
            y2={302}
            strokeWidth="2"
            stroke={DsStorage.OutletValve.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          {/*
          <Line
            x1={700}
            y1={207}
            x2={700}
            y2={213}
            strokeWidth="2"
            stroke={DsStorage.OutletValve.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          */}

          <Text x={950} y={360} fill="black">{`Fuel consumption ${(DsService.Tank.RemoveEachStep * 60).toFixed(1)} / minute`}</Text>
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default FuelDsStorageScreen
