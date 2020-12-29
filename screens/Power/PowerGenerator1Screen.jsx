import { observer } from 'mobx-react-lite'
import React from 'react'
import { View } from 'react-native'

import Svg, { Line } from 'react-native-svg'
import DieselGenerator from '../../components/svg/DieselGenerator'
import SimContext from '../../SimulatorContext'

import BigPipe from '../../components/svg/BigPipe'
import BigValve from '../../components/svg/BigValve'
import SimulatorScreen from '../SimulatorScreen'
import CstResourceColor from '../../CstColors'

const PowerGenerator1Screen = observer(() => {
  const Sim = SimContext()
  const {
    PowerSys: { DsGen1, DsGenBreaker1 },
    FuelSys: { DsService },
    LubSys,
    AirSys: { EmergencyReceiver },
  } = Sim
  const { FuelIntakeValve, LubIntakeValve, AirIntakeValve } = DsGen1
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

          <BigPipe x1={850} y1={225} x2={1000} y2={225} ContentColor={CstResourceColor.Lubrication} HasContent={LubSys.Storage.OutletValve.Content() !== 0} />
          <BigValve X={800} Y={190} isOpen={LubIntakeValve.isOpen} OpenColor={CstResourceColor.Lubrication} cb={() => LubIntakeValve.Toggle()} />
          <BigPipe x1={685} y1={225} x2={800} y2={225} ContentColor={CstResourceColor.Lubrication} HasContent={LubIntakeValve.Content() !== 0} />

          <BigPipe x1={850} y1={115} x2={1000} y2={115} ContentColor={CstResourceColor.CompressedAir} HasContent={EmergencyReceiver.OutletValve.Content() !== 0} />
          <BigValve X={800} Y={80} isOpen={AirIntakeValve.isOpen} OpenColor={CstResourceColor.CompressedAir} cb={() => AirIntakeValve.Toggle()} />
          <BigPipe x1={600} y1={115} x2={800} y2={115} ContentColor={CstResourceColor.CompressedAir} HasContent={AirIntakeValve.Content() !== 0} />
          <BigPipe x1={600} y1={111} x2={600} y2={185} ContentColor={CstResourceColor.CompressedAir} HasContent={AirIntakeValve.Content() !== 0} />
          <Line x1={604} y1={112} x2={604} y2={118} strokeWidth={2} stroke={AirIntakeValve.Content() !== 0 ? CstResourceColor.CompressedAir : 'white'} />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default PowerGenerator1Screen
