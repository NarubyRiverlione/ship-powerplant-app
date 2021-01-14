import * as React from 'react'
import { View } from 'react-native'
import Svg from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'

import SimulatorScreen from '../SimulatorScreen'
import BigPipe from '../../components/svg/BigPipe'
import BigValve from '../../components/svg/BigValve'
import TankValves from '../../components/svg/TankValves'
import Pump from '../../components/svg/Pump'
import CstResourceColor from '../../CstColors'

const SteamBoilerScreen = observer(() => {
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
          <BigPipe x1={0} y1={400} x2={50} y2={400} ContentColor={CstResourceColor.FreshWater} HasContent />
          <TankValves X={20} Y={350} Name={FeedWaterSupply.Name} ContentColor={CstResourceColor.FreshWater} TankSys={FeedWaterSupply} />
          <BigPipe x1={370} y1={550} x2={600} y2={550} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterSupply.OutletValve.Content !== 0} />
          <BigPipe x1={596} y1={500} x2={596} y2={546} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterSupply.OutletValve.Content !== 0} />
          <BigPipe x1={596} y1={354} x2={596} y2={400} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterPump.Content !== 0} />
          <Pump X={509} Y={400} isRunning={FeedWaterPump.isRunning} cb={() => FeedWaterPump.Toggle()} />
          <BigPipe x1={592} y1={350} x2={700} y2={350} ContentColor={CstResourceColor.FreshWater} HasContent={FeedWaterPump.Content !== 0} />

          <BigPipe x1={5} y1={200} x2={150} y2={200} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Source.Content !== 0} />
          <BigValve X={150} Y={165} ContentColor={CstResourceColor.Diesel} Valve={FuelSourceValve} />
          <BigPipe x1={200} y1={200} x2={404} y2={200} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Content !== 0} />
          <BigPipe x1={400} y1={160} x2={400} y2={196} ContentColor={CstResourceColor.Diesel} HasContent={FuelSourceValve.Content !== 0} />
          <BigPipe x1={400} y1={16} x2={400} y2={62} ContentColor={CstResourceColor.Diesel} HasContent={FuelPump.Content !== 0} />
          <BigPipe x1={404} y1={20} x2={700} y2={20} ContentColor={CstResourceColor.Diesel} HasContent={FuelPump.Content !== 0} />
          <Pump X={310} Y={60} isRunning={FuelPump.isRunning} cb={() => FuelPump.Toggle()} />

          <BigPipe x1={0} y1={350} x2={548} y2={350} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />
          <BigPipe x1={550} y1={348} x2={550} y2={430} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />
          <BigPipe x1={350} y1={130} x2={350} y2={180} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />
          <BigPipe x1={350} y1={220} x2={350} y2={348} ContentColor={CstResourceColor.Electricity} Size={4} HasContent={FuelPump.CheckPower} />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

// SteamBoilerScreen.propTypes = {
//   navigation: PropTypes.object.isRequired,
// }

export default SteamBoilerScreen
