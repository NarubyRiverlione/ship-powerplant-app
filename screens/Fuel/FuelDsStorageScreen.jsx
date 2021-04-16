import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text, Line, Rect } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import TankValves from '../../components/svg/TankValves'
import Led from '../../components/svg/Led'
import SmallTankValves from '../../components/svg/SmallTankValves'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import CstResourceColor from '../../constants/CstColors'
import Navigate from '../../components/svg/Navigate'
import Arrow from '../../components/svg/Arrow'
import Machine from '../../components/svg/Machine'

import { NavScreen, NavStack } from '../../constants/CstNav'

const FuelDsStorageScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { FuelSys } = Sim
  const {
    DsShoreValve, DsStorage, DsService, DsBypassValve, DsPurification, DsServiceMulti,
  } = FuelSys
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
          <Arrow X={20} Y={70} />

          <Valve
            X={40}
            Y={25}
            ContentColor={CstResourceColor.Diesel}
            ValveObj={DsShoreValve}
          />
          <Text x={10} y={100} fill="black" fontSize={12}>{DsShoreValve.Name}</Text>
          <Pipe x1={90} y1={60} x2={210} y2={60} ContentColor={CstResourceColor.Diesel} HasContent={DsShoreValve.isOpen} />

          <TankValves
            X={200}
            Y={10}
            Name={DsStorage.Tank.Name}
            TankSys={DsStorage}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gray"
          />
          <Text x={500} y={100} fill="black">{`Fuel consumption ${(DsStorage.Tank.ReadoutConsumption * 60).toFixed(1)} / minute`}</Text>
          <Line
            x1={205}
            y1={57}
            x2={205}
            y2={63}
            strokeWidth="2"
            stroke={DsShoreValve.isOpen ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />

          <Pipe
            x1={420}
            y1={450}
            x2={615}
            y2={450}
            Size={2}
            ContentColor={CstResourceColor.Electricity}
            HasContent={DsPurification.Bus.Voltage !== 0}
          />
          <Navigate
            X={430}
            Y={460}
            Width={80}
            NavText={DsPurification.Bus.Name}
            navigation={navigation}
            NavStack={NavStack.Power}
            NavScreen={NavScreen.Power.SwitchboardScreen}
          />

          <Pipe
            x1={620}
            y1={520}
            x2={620}
            y2={530}
            ContentColor={CstResourceColor.Steam}
            HasContent={DsPurification.SteamIntakeValve.Content !== 0}
          />
          <Pipe
            x1={620}
            y1={580}
            x2={620}
            y2={620}
            ContentColor={CstResourceColor.Steam}
            HasContent={DsPurification.SteamIntakeValve.Source.Content !== 0}
          />
          <Valve
            X={655}
            Y={530}
            ContentColor={CstResourceColor.Steam}
            ValveObj={DsPurification.SteamIntakeValve}
            Vertical
          />
          <Arrow X={600} Y={600} Up />
          <Pipe
            x1={700}
            y1={520}
            x2={700}
            y2={620}
            ContentColor={CstResourceColor.Steam}
            HasContent={DsPurification.SteamIntakeValve.Content !== 0}
          />
          <Arrow X={720} Y={590} Down />
          <Navigate
            X={720}
            Y={540}
            Width={90}
            NavText="Steam boiler"
            navigation={navigation}
            NavStack={NavStack.Steam}
            NavScreen={NavScreen.Steam.BoilerScreen}
          />
          <Pipe
            x1={700}
            y1={500}
            x2={742}
            y2={500}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsPurification.Content !== 0}
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
            x2={530}
            y2={400}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />
          <Valve
            X={530}
            Y={365}
            ContentColor={CstResourceColor.Diesel}
            ValveObj={DsPurification.IntakeValve}
          />
          <Arrow X={510} Y={410} />
          <Pipe
            x1={580}
            y1={400}
            x2={620}
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
          <Machine X={585} Y={370} isRunning={DsPurification.isRunning} cb={() => { DsPurification.Toggle() }} />
          <Text x={630} y={360} fill="black">Purification</Text>

          <Rect x={550} y={175} width={50} height={50} stroke="black" />
          <Text x={550} y={250} fill="black">handpump (ToDo)</Text>
          <Pipe
            x1={600}
            y1={200}
            x2={650}
            y2={200}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsStorage.OutletValve.Content !== 0}
          />

          <Valve X={650} Y={165} ValveObj={DsBypassValve} ContentColor={CstResourceColor.Diesel} />
          <Arrow X={710} Y={210} />
          <Pipe
            x1={700}
            y1={200}
            x2={740}
            y2={200}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsBypassValve.Content !== 0}
          />

          <Pipe
            x1={744}
            y1={197}
            x2={744}
            y2={296}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsBypassValve.Content !== 0}
          />
          <Pipe
            x1={741}
            y1={300}
            x2={805}
            y2={300}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsServiceMulti.Content !== 0}
          />
          <Pipe
            x1={744}
            y1={303}
            x2={744}
            y2={503}
            Size={6}
            ContentColor={CstResourceColor.Diesel}
            HasContent={DsPurification.Content !== 0}
          />
          <Line
            x1={740}
            y1={198}
            x2={740}
            y2={202}
            strokeWidth="2"
            stroke={DsBypassValve.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          <Line
            x1={742}
            y1={297}
            x2={746}
            y2={297}
            strokeWidth="2"
            stroke={DsBypassValve.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          <Line
            x1={742}
            y1={302}
            x2={746}
            y2={302}
            strokeWidth="2"
            stroke={DsPurification.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          <Line
            x1={741}
            y1={498}
            x2={741}
            y2={502}
            strokeWidth="2"
            stroke={DsPurification.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          <SmallTankValves
            X={800}
            Y={250}
            Name={DsService.Tank.Name}
            TankSys={DsService}
            ContentColor={CstResourceColor.Diesel}
            TankColor="gainsboro"
          />
          <Line
            x1={805}
            y1={298}
            x2={805}
            y2={302}
            strokeWidth="2"
            stroke={DsServiceMulti.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />
          <Line
            x1={745}
            y1={298}
            x2={745}
            y2={302}
            strokeWidth="2"
            stroke={DsPurification.Content !== 0 ? CstResourceColor.Diesel : CstResourceColor.Empty}
          />

          <Text x={1000} y={450} fill="black">Fuel consumption</Text>
          <Text x={1000} y={470} fill="black">{`${(DsService.Tank.ReadoutConsumption * 60).toFixed(1)} / minute`}</Text>
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default FuelDsStorageScreen
