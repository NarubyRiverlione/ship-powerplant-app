import * as React from 'react'
import { View } from 'react-native'
import Svg from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'

import SimulatorScreen from '../SimulatorScreen'
import Pipe from '../../components/svg/Pipe'
import BoilerSvg from '../../components/svg/Boiler'
import Navigate from '../../components/svg/Navigate'
import Valve from '../../components/svg/Valve'
import SmallTankValves from '../../components/svg/SmallTankValves'
import Pump from '../../components/svg/Pump'
import CstResourceColor from '../../CstColors'

const SteamBoilerScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    SteamSys: {
      FeedWaterSupply, FeedWaterPump, Boiler, FuelPump, FuelSourceValve,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <Navigate X={20} Y={60} Width={90} Height={40} NavText="Diesel service" NavTo={() => navigation.navigate('FuelDsStorageScreen')} />
          <Pipe x1={600} y1={120} x2={730} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={FuelPump.Content !== 0} />
          <Pipe x1={200} y1={120} x2={550} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Content !== 0} />
          <Pipe x1={5} y1={120} x2={150} y2={120} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Source.Content !== 0} />
          <Valve X={150} Y={85} ContentColor={CstResourceColor.Diesel} ValveObj={FuelSourceValve} />
          <Pump X={600} Y={50} Horizontal Scale={0.8} isRunning={FuelPump.isRunning} cb={() => FuelPump.Toggle()} />

          <BoilerSvg X={650} Y={80} />

          <Pipe x1={5} y1={260} x2={60} y2={260} ContentColor={CstResourceColor.FreshWater} HasContent />
          <SmallTankValves X={50} Y={210} Name={FeedWaterSupply.Name} ContentColor={CstResourceColor.FreshWater} TankSys={FeedWaterSupply} />

          <Pipe x1={350} y1={370} x2={420} y2={370} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterSupply.OutletValve.Content !== 0} />
          <Pump X={500} Y={300} Scale={0.8} Horizontal isRunning={FeedWaterPump.isRunning} cb={() => FeedWaterPump.Toggle()} />
          <Pipe x1={500} y1={370} x2={625} y2={370} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterPump.Content !== 0} />
          <Pipe x1={676} y1={370} x2={740} y2={370} ContentColor={CstResourceColor.FreshWater} HasContent={Boiler.WaterIntakeValve.Content !== 0} />
          <Valve X={625} Y={335} ContentColor={CstResourceColor.FreshWater} ValveObj={Boiler.WaterIntakeValve} />

          <Pipe x1={745} y1={395} x2={745} y2={470} ContentColor={CstResourceColor.FreshWater} HasContent={Boiler.WaterTank.Content !== 0} />
          <Pipe x1={745} y1={500} x2={745} y2={550} ContentColor={CstResourceColor.FreshWater} HasContent={Boiler.WaterDrainValve.Content !== 0} />
          <Valve X={780} Y={470} Vertical ContentColor={CstResourceColor.FreshWater} ValveObj={Boiler.WaterDrainValve} />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})
/*
        <Navigate X={5} Y={250} Width={90} Height={40} NavText="Switchboard" NavTo={() => navigation.navigate('PowerSwitchboardScreen')} />
          <Pipe x1={0} y1={350} x2={548} y2={350} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />
          <Pipe x1={550} y1={348} x2={550} y2={430} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />
          <Pipe x1={350} y1={130} x2={350} y2={180} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />
          <Pipe x1={350} y1={220} x2={350} y2={348} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />

          */
SteamBoilerScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SteamBoilerScreen
