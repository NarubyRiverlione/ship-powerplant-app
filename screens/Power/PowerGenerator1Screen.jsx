import { observer } from 'mobx-react-lite'
import React from 'react'
import { View } from 'react-native'

import Svg, { Line, Rect, Text } from 'react-native-svg'
import DieselGenerator from '../../components/svg/DieselGenerator'
import SimContext from '../../SimulatorContext'

import Navigate from '../../components/svg/Navigate'
import BigPipe from '../../components/svg/BigPipe'
import LookingGlass from '../../components/svg/LookingGlass'
import BigValve from '../../components/svg/BigValve'
import Cooler from '../../components/svg/Cooler'
import SimulatorScreen from '../SimulatorScreen'
import CstResourceColor from '../../CstColors'

const PowerGenerator1Screen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    PowerSys: { DsGen1, EmergencyBus },
    FuelSys: { DsService },
    LubSys,
    AirSys: { EmergencyReceiver },
    CoolingSys: { DsGen1LubCooler },
  } = Sim
  const {
    FuelIntakeValve, LubIntakeValve, AirIntakeValve, LubSlump, HasLubrication,
  } = DsGen1
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <Navigate X={5} Y={240} Width={100} NavTo="PowerSwitchboardScreen" NavText={`${EmergencyBus.Name}`} navigation={navigation} />
          <BigPipe x1={5} y1={290} x2={115} y2={290} ContentColor={CstResourceColor.Electricity} HasContent={DsGen1.isRunning} />

          <Navigate X={5} Y={50} Width={150} NavTo="FuelDsStorageScreen" NavText={`From ${DsService.Tank.Name}`} navigation={navigation} />
          <BigPipe x1={5} y1={100} x2={350} y2={100} ContentColor={CstResourceColor.Diesel} HasContent={DsService.OutletValve.Content() !== 0} />
          <BigValve X={350} Y={65} isOpen={FuelIntakeValve.isOpen} OpenColor={CstResourceColor.Diesel} cb={() => FuelIntakeValve.Toggle()} />
          <BigPipe x1={400} y1={100} x2={450} y2={100} ContentColor={CstResourceColor.Diesel} HasContent={FuelIntakeValve.Content() !== 0} />
          <BigPipe x1={450} y1={96} x2={450} y2={185} ContentColor={CstResourceColor.Diesel} HasContent={FuelIntakeValve.Content() !== 0} />
          <Line x1={446} y1={97} x2={446} y2={103} strokeWidth={2} stroke={FuelIntakeValve.Content() !== 0 ? CstResourceColor.Diesel : 'white'} />

          <Navigate X={770} Y={65} Width={220} NavTo="AirStartScreen" NavText={`From ${EmergencyReceiver.Tank.Name}`} navigation={navigation} />
          <BigPipe x1={700} y1={115} x2={1000} y2={115} ContentColor={CstResourceColor.CompressedAir} HasContent={EmergencyReceiver.OutletValve.Content() !== 0} />
          <BigValve X={650} Y={80} isOpen={AirIntakeValve.isOpen} OpenColor={CstResourceColor.CompressedAir} cb={() => AirIntakeValve.Toggle()} />
          <BigPipe x1={600} y1={115} x2={650} y2={115} ContentColor={CstResourceColor.CompressedAir} HasContent={AirIntakeValve.Content() !== 0} />
          <BigPipe x1={600} y1={111} x2={600} y2={185} ContentColor={CstResourceColor.CompressedAir} HasContent={AirIntakeValve.Content() !== 0} />
          <Line x1={604} y1={112} x2={604} y2={118} strokeWidth={2} stroke={AirIntakeValve.Content() !== 0 ? CstResourceColor.CompressedAir : 'white'} />

          <Navigate X={5} Y={450} Width={180} NavTo="LubStorageScreen" NavText={`From ${LubSys.Storage.Tank.Name}`} navigation={navigation} />
          <BigPipe x1={5} y1={500} x2={250} y2={500} ContentColor={CstResourceColor.Lubrication} HasContent={LubSys.Storage.OutletValve.Content() !== 0} />
          <BigValve X={250} Y={465} isOpen={LubIntakeValve.isOpen} OpenColor={CstResourceColor.Lubrication} cb={() => LubIntakeValve.Toggle()} />
          <BigPipe x1={300} y1={500} x2={350} y2={500} ContentColor={CstResourceColor.Lubrication} HasContent={LubIntakeValve.Content() !== 0} />

          <Text x={490} y={470} fill="black">Slum</Text>
          <LookingGlass X={540} Y={460} Size={50} ContentColor={CstResourceColor.Lubrication} ContentPct={LubSlump.Content()} />
          <Rect x={350} y={450} width={10} height={100} stroke="black" strokeWidth={2} />
          <Rect x={650} y={450} width={10} height={100} stroke="black" strokeWidth={2} />
          <Rect x={360} y={540} width={290} height={10} stroke="black" strokeWidth={2} />

          <BigPipe x1={650} y1={480} x2={710} y2={480} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />
          <BigPipe x1={682} y1={300} x2={710} y2={300} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />
          <BigPipe x1={714} y1={296} x2={714} y2={484} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />
          <Line x1={710} y1={477} x2={710} y2={483} strokeWidth={2} stroke={DsGen1.HasLubrication ? CstResourceColor.Lubrication : 'white'} />
          <Line x1={710} y1={297} x2={710} y2={303} strokeWidth={2} stroke={DsGen1.HasLubrication ? CstResourceColor.Lubrication : 'white'} />

          <BigPipe x1={682} y1={270} x2={790} y2={270} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />

          <BigPipe x1={760} y1={320} x2={760} y2={524} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />
          <BigPipe x1={650} y1={520} x2={756} y2={520} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />
          <BigPipe x1={756} y1={316} x2={790} y2={316} ContentColor={CstResourceColor.Lubrication} HasContent={DsGen1.HasLubrication} />
          <Line x1={756} y1={517} x2={756} y2={523} strokeWidth={2} stroke={DsGen1.HasLubrication ? CstResourceColor.Lubrication : 'white'} />
          <Line x1={757} y1={320} x2={763} y2={320} strokeWidth={2} stroke={DsGen1.HasLubrication ? CstResourceColor.Lubrication : 'white'} />

          <Navigate X={750} Y={180} Width={250} NavTo="CoolantFreshWaterSystemScreen" NavText={`From ${DsGen1LubCooler.Name}`} navigation={navigation} />
          <BigPipe x1={800} y1={230} x2={1000} y2={230} ContentColor={CstResourceColor.FreshWater} HasContent={DsGen1LubCooler.isCooling} />
          <BigPipe x1={804} y1={234} x2={804} y2={260} ContentColor={CstResourceColor.FreshWater} HasContent={DsGen1LubCooler.isCooling} />
          <Line x1={801} y1={234} x2={807} y2={234} strokeWidth={2} stroke={DsGen1LubCooler.isCooling ? CstResourceColor.FreshWater : 'white'} />

          <BigPipe x1={874} y1={380} x2={1000} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={DsGen1LubCooler.isCooling} />
          <BigPipe x1={870} y1={350} x2={870} y2={384} ContentColor={CstResourceColor.FreshWater} HasContent={DsGen1LubCooler.isCooling} />
          <Line x1={874} y1={377} x2={874} y2={383} strokeWidth={2} stroke={DsGen1LubCooler.isCooling ? CstResourceColor.FreshWater : 'white'} />

          <Cooler X={780} Y={250} />
          <Text x={880} y={300} fill="black">{DsGen1LubCooler.Name.replace('Diesel generator 1', '')}</Text>

          <DieselGenerator X={300} Y={150} isRunning={DsGen1.isRunning} cb={() => DsGen1.Toggle()} />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default PowerGenerator1Screen
