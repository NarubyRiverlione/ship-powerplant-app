/* eslint max-len:off */
import * as React from 'react'
import { View } from 'react-native'
import Svg, { Text } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'

import SimulatorScreen from '../SimulatorScreen'
import Pipe from '../../components/svg/Pipe'
import Led from '../../components/svg/Led'
import BoilerSvg from '../../components/svg/Boiler'
import Cooler from '../../components/svg/Cooler'
import Navigate from '../../components/svg/Navigate'
import Valve from '../../components/svg/Valve'
import SmallTankValves from '../../components/svg/SmallTankValves'
import Pump from '../../components/svg/Pump'
import Arrow from '../../components/svg/Arrow'
import CstResourceColor from '../../constants/CstColors'
import { NavScreen, NavStack } from '../../constants/CstNav'
import PowerSwitch from '../../components/svg/PowerSwitch'

const SteamBoilerScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    SteamSys: {
      FeedWaterSupply, FeedWaterPump, Boiler, FuelPump, FuelSourceValve, SteamCondensor, MainSteamValve,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <Navigate X={20} Y={60} Width={100} Height={40} NavText="Diesel service" NavStack={NavStack.Fuel} NavScreen={NavScreen.Fuel.DsStorageScreen} navigation={navigation} />
          <Pipe x1={500} y1={120} x2={600} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={FuelPump.Content !== 0} />
          <Arrow X={50} Y={140} />
          <Pipe x1={200} y1={120} x2={450} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Content !== 0} />
          <Pipe x1={5} y1={120} x2={150} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Source.Content !== 0} />
          <Valve X={150} Y={85} ContentColor={CstResourceColor.Diesel} ValveObj={FuelSourceValve} />
          <Valve X={600} Y={85} ContentColor={CstResourceColor.Diesel} ValveObj={Boiler.FuelIntakeValve} />
          <Pipe x1={650} y1={120} x2={690} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={Boiler.FuelIntakeValve.Content !== 0} />
          <Pipe x1={460} y1={130} x2={460} y2={200} Size={4} ContentColor={CstResourceColor.Electricity} HasContent={FuelPump.Bus.Voltage > 0} />
          <Navigate X={470} Y={150} Width={105} Height={35} NavText={FuelPump.Bus.Name} navigation={navigation} NavStack={NavStack.Power} NavScreen={NavScreen.Power.SwitchboardScreen} />
          <Pump X={500} Y={50} Horizontal Scale={0.8} isRunning={FuelPump.isRunning} cb={() => FuelPump.Toggle()} />
          <Arrow X={400} Y={140} />
          <Arrow X={650} Y={140} />

          <BoilerSvg X={600} Y={100} BoilerObj={Boiler} cb={() => Boiler.Toggle()} />

          <Pipe x1={5} y1={260} x2={60} y2={260} ContentColor={CstResourceColor.FreshWater} HasContent />
          <SmallTankValves X={50} Y={210} Name={FeedWaterSupply.Name} ContentColor={CstResourceColor.FreshWater} TankSys={FeedWaterSupply} />

          <Pipe x1={350} y1={370} x2={420} y2={370} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterSupply.OutletValve.Content !== 0} />
          <Pipe x1={460} y1={380} x2={460} y2={440} Size={4} ContentColor={CstResourceColor.Electricity} HasContent={FuelPump.Bus.Voltage > 0} />
          <Navigate X={470} Y={400} Width={105} Height={35} NavText={FuelPump.Bus.Name} navigation={navigation} NavStack={NavStack.Power} NavScreen={NavScreen.Power.SwitchboardScreen} />
          <Pump X={500} Y={300} Scale={0.8} Horizontal isRunning={FeedWaterPump.isRunning} cb={() => FeedWaterPump.Toggle()} />
          <Arrow X={400} Y={390} />
          <Pipe x1={500} y1={370} x2={595} y2={370} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterPump.Content !== 0} />
          <Pipe x1={646} y1={370} x2={690} y2={370} ContentColor={CstResourceColor.FreshWater} HasContent={Boiler.WaterIntakeValve.Content !== 0} />
          <Valve X={595} Y={335} ContentColor={CstResourceColor.FreshWater} ValveObj={Boiler.WaterIntakeValve} />
          <Arrow X={650} Y={390} />

          <Pipe x1={705} y1={420} x2={722} y2={470} ContentColor={CstResourceColor.FreshWater} HasContent={Boiler.WaterTank.Content !== 0} />
          <Pipe x1={705} y1={500} x2={705} y2={550} ContentColor={CstResourceColor.FreshWater} HasContent={Boiler.WaterDrainValve.Content !== 0} />
          <Valve X={740} Y={470} Vertical ContentColor={CstResourceColor.FreshWater} ValveObj={Boiler.WaterDrainValve} />
          <Arrow X={690} Y={450} Down />

          <Pipe x1={920} y1={130} x2={950} y2={130} ContentColor={CstResourceColor.Steam} HasContent={Boiler.Content > 1} />
          <Valve X={950} Y={95} ContentColor={CstResourceColor.Steam} ValveObj={MainSteamValve} />
          <Arrow X={940} Y={140} />
          <Pipe x1={1000} y1={130} x2={1200} y2={130} ContentColor={CstResourceColor.Steam} HasContent={MainSteamValve.Content > 1} />
          <Arrow X={1100} Y={140} />

          <Pipe x1={1050} y1={200} x2={1200} y2={200} ContentColor={CstResourceColor.Steam} HasContent={MainSteamValve.Content > 1} />
          <Pipe x1={920} y1={250} x2={965} y2={250} ContentColor={CstResourceColor.Steam} HasContent={MainSteamValve.Content > 1} />
          <Navigate X={960} Y={290} Width={120} NavText={SteamCondensor.Name} NavStack={NavStack.Coolant} NavScreen={NavScreen.Coolant.SeaWaterScreen} navigation={navigation} />
          <Cooler X={960} Y={180} CoolerObj={SteamCondensor} cb={() => navigation.navigate(NavStack.Coolant, { screen: NavScreen.Coolant.SeaWaterScreen })} />
          <Arrow X={1110} Y={220} Left />
          <Arrow X={950} Y={270} Left />

          <PowerSwitch X={960} Y={450} isOpen={!Boiler.AutoFlame} cb={() => { Boiler.AutoFlameToggle() }} />
          <Text x={960} y={480} fill="black">Auto Control</Text>
          <Led X={965} Y={495} Status={Boiler.TempInsideAutoZone} Label="available" />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

SteamBoilerScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SteamBoilerScreen
