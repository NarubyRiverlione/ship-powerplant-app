import { observer } from 'mobx-react-lite'
import React from 'react'
import { View } from 'react-native'

import Svg, { Line, Rect, Text } from 'react-native-svg'
import DieselGenerator from '../../components/svg/DieselGenerator'
import SimContext from '../../SimulatorContext'

import BigPipe from '../../components/svg/BigPipe'
import LookingGlass from '../../components/svg/LookingGlass'
import BigValve from '../../components/svg/BigValve'
import Cooler from '../../components/svg/Cooler'
import SimulatorScreen from '../SimulatorScreen'
import CstResourceColor from '../../CstColors'

const PowerGenerator1Screen = observer(() => {
  const Sim = SimContext()
  const {
    PowerSys: { DsGen1, DsGenBreaker1 },
    FuelSys: { DsService },
    LubSys,
    AirSys: { EmergencyReceiver },
    CoolingSys: { DsGen1LubCooler },
  } = Sim
  const {
    FuelIntakeValve, LubIntakeValve, AirIntakeValve, LubSlump,
  } = DsGen1
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <DieselGenerator X={300} Y={150} isRunning={DsGen1.isRunning} cb={() => DsGen1.Toggle()} />
          <BigPipe x1={5} y1={290} x2={115} y2={290} ContentColor={CstResourceColor.Electricity} HasContent={DsGen1.isRunning} />

          <BigPipe x1={5} y1={100} x2={350} y2={100} ContentColor={CstResourceColor.Diesel} HasContent={DsService.OutletValve.Content() !== 0} />
          <BigValve X={350} Y={65} isOpen={FuelIntakeValve.isOpen} OpenColor={CstResourceColor.Diesel} cb={() => FuelIntakeValve.Toggle()} />
          <BigPipe x1={400} y1={100} x2={450} y2={100} ContentColor={CstResourceColor.Diesel} HasContent={FuelIntakeValve.Content() !== 0} />
          <BigPipe x1={450} y1={96} x2={450} y2={185} ContentColor={CstResourceColor.Diesel} HasContent={FuelIntakeValve.Content() !== 0} />
          <Line x1={446} y1={97} x2={446} y2={103} strokeWidth={2} stroke={FuelIntakeValve.Content() !== 0 ? CstResourceColor.Diesel : 'white'} />

          <BigPipe x1={850} y1={115} x2={1000} y2={115} ContentColor={CstResourceColor.CompressedAir} HasContent={EmergencyReceiver.OutletValve.Content() !== 0} />
          <BigValve X={800} Y={80} isOpen={AirIntakeValve.isOpen} OpenColor={CstResourceColor.CompressedAir} cb={() => AirIntakeValve.Toggle()} />
          <BigPipe x1={600} y1={115} x2={800} y2={115} ContentColor={CstResourceColor.CompressedAir} HasContent={AirIntakeValve.Content() !== 0} />
          <BigPipe x1={600} y1={111} x2={600} y2={185} ContentColor={CstResourceColor.CompressedAir} HasContent={AirIntakeValve.Content() !== 0} />
          <Line x1={604} y1={112} x2={604} y2={118} strokeWidth={2} stroke={AirIntakeValve.Content() !== 0 ? CstResourceColor.CompressedAir : 'white'} />

          <BigPipe x1={5} y1={500} x2={250} y2={500} ContentColor={CstResourceColor.Lubrication} HasContent={LubSys.Storage.OutletValve.Content() !== 0} />
          <BigValve X={250} Y={465} isOpen={LubIntakeValve.isOpen} OpenColor={CstResourceColor.Lubrication} cb={() => LubIntakeValve.Toggle()} />
          <BigPipe x1={300} y1={500} x2={350} y2={500} ContentColor={CstResourceColor.Lubrication} HasContent={LubIntakeValve.Content() !== 0} />

          <Text x={500} y={440} fill="black">Slum</Text>
          <Rect x={350} y={450} width={10} height={100} stroke="black" strokeWidth={2} />
          <Rect x={650} y={450} width={10} height={100} stroke="black" strokeWidth={2} />
          <Rect x={360} y={540} width={290} height={10} stroke="black" strokeWidth={2} />
          <Rect x={360} y={450} width={290} height={10} stroke="black" strokeWidth={2} />
          <Rect x={360} y={460} width={290} height={80} fill={LubIntakeValve.Content() !== 0 ? CstResourceColor.Lubrication : 'white'} strokeWidth={2} />

          <BigPipe x1={660} y1={480} x2={720} y2={480} ContentColor={CstResourceColor.Lubrication} />
          <BigPipe x1={660} y1={520} x2={850} y2={520} ContentColor={CstResourceColor.Lubrication} />
          <BigPipe x1={724} y1={266} x2={724} y2={484} ContentColor={CstResourceColor.Lubrication} />

          <BigPipe x1={720} y1={266} x2={794} y2={266} ContentColor={CstResourceColor.Lubrication} />
          <BigPipe x1={790} y1={270} x2={790} y2={305} ContentColor={CstResourceColor.Lubrication} />
          <BigPipe x1={854} y1={400} x2={854} y2={524} ContentColor={CstResourceColor.Lubrication} />

          <BigPipe x1={860} y1={320} x2={1000} y2={320} ContentColor={CstResourceColor.FreshWater} HasContent={DsGen1LubCooler.isCooling} />
          <BigPipe x1={860} y1={380} x2={1000} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={DsGen1LubCooler.isCooling} />

          <Cooler X={765} Y={300} />
          <Text x={870} y={350} fill="black">{DsGen1LubCooler.Name.replace('Diesel generator 1', '')}</Text>

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default PowerGenerator1Screen
