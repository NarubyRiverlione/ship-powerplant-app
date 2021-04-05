/* eslint-disable max-len */
import * as React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Svg, {
  Text, Line, TSpan,
} from 'react-native-svg'

import { observer } from 'mobx-react-lite'
import Valve from '../../components/svg/Valve'
import Tank from '../../components/svg/Tank'
import Pipe from '../../components/svg/Pipe'
// import Pump from '../../components/svg/Pump'
import Cooler from '../../components/svg/Cooler'
import SimulatorScreen from '../SimulatorScreen'
import SimContext from '../../SimulatorContext'
import CstResourceColor from '../../constants/CstColors'
import Navigate from '../../components/svg/Navigate'
import { NavScreen, NavStack } from '../../constants/CstNav'

const CoolantFreshWaterSystemScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    CoolingSys: {
      AuxPump, SuctionPump1, SuctionPump2,
      FwCoolerStartAir, FwCoolerDsGen,
      DsGenLubCooler, StartAirCooler, FwExpandTank, FwIntakeValve, FwDrainValve,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Pipe x1={208} y1={70} x2={620} y2={70} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={800} y1={40} x2={850} y2={40} ContentColor={CstResourceColor.FreshWater} HasContent={FwIntakeValve.isOpen} />
          <Valve X={850} Y={5} ContentColor={CstResourceColor.FreshWater} ValveObj={FwIntakeValve} />
          <Pipe x1={900} y1={40} x2={950} y2={40} ContentColor={CstResourceColor.FreshWater} HasContent />
          <Valve X={750} Y={90} ContentColor={CstResourceColor.FreshWater} ValveObj={FwDrainValve} />
          <Pipe x1={720} y1={77} x2={720} y2={120} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={716} y1={124} x2={749} y2={124} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Line x1={717} y1={120} x2={723} y2={120} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Tank X={600} Y={10} Size={200} ContentColor={CstResourceColor.FreshWater} ContentPct={FwExpandTank.Content} />
          <Text fill="black" x={755} y={150}>Drain</Text>

          <Pipe x1={205} y1={66} x2={205} y2={105} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={270} y1={198} x2={270} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />

          <Navigate X={70} Y={120} Width={110} Height={50} NavText="Diesel generator" NavStack={NavStack.Power} NavScreen={NavScreen.Power.DsGeneratorScreen} navigation={navigation} />
          <Text fill="black" x={70} y={160}>{DsGenLubCooler.Name.replace('Diesel generator ', '')}</Text>
          <Cooler X={180} Y={100} cb={() => navigation.navigate(NavStack.Power, { screen: NavScreen.Power.DsGeneratorScreen })} />

          <Line x1={209} y1={67} x2={209} y2={74} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Pipe x1={530} y1={198} x2={530} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />

          <Navigate X={350} Y={120} Width={110} Height={50} NavText={StartAirCooler.Name} NavStack={NavStack.CompAir} NavScreen={NavScreen.Air.StartScreen} navigation={navigation} />
          <Pipe x1={465} y1={74} x2={205} y2={105} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Cooler X={440} Y={100} cb={() => navigation.navigate(NavScreen.Air.StartScreen)} />

          <Pipe x1={180} y1={404} x2={180} y2={425} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <Pipe x1={230} y1={495} x2={230} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <Pipe x1={450} y1={404} x2={450} y2={425} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Pipe x1={500} y1={495} x2={500} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <Pipe x1={5} y1={530} x2={234} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <Pipe x1={234} y1={530} x2={504} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <Pipe x1={5} y1={400} x2={184} y2={400} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <Pipe x1={184} y1={400} x2={454} y2={400} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <Line x1={177} y1={404} x2={183} y2={404} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={184} y1={397} x2={184} y2={403} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={447} y1={404} x2={453} y2={404} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={497} y1={526} x2={503} y2={526} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={227} y1={526} x2={233} y2={526} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={234} y1={526} x2={234} y2={533} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={235} y1={445} x2={266} y2={445} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={270} y1={420} x2={270} y2={449} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />

          <Pipe x1={235} y1={480} x2={296} y2={480} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={300} y1={420} x2={300} y2={484} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />

          <Pipe x1={300} y1={74} x2={300} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Text fill="black">
            <TSpan x={50} y={450}>Fresh water cooler</TSpan>
            <TSpan x={50} y={470}>{FwCoolerDsGen.Name.replace('Fresh water cooler', '')}</TSpan>
          </Text>
          <Cooler X={160} Y={420} Scale={0.8} cb={() => navigation.navigate(NavScreen.Coolant.SeaWaterScreen)} />

          <Line x1={297} y1={74} x2={303} y2={74} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Line x1={266} y1={442} x2={266} y2={448} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Line x1={296} y1={477} x2={296} y2={483} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />

          <Pipe x1={505} y1={445} x2={526} y2={445} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={530} y1={420} x2={530} y2={449} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />

          <Pipe x1={505} y1={480} x2={556} y2={480} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Pipe x1={560} y1={420} x2={560} y2={484} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />

          <Pipe x1={560} y1={74} x2={560} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content !== 0} />
          <Text fill="black">
            <TSpan x={320} y={450}>Fresh water cooler</TSpan>
            <TSpan x={320} y={470}>{FwCoolerStartAir.Name.replace('Fresh water cooler', '')}</TSpan>
          </Text>
          <Cooler X={430} Y={420} Scale={0.8} cb={() => navigation.navigate(NavScreen.Coolant.SeaWaterScreen)} />

          <Line x1={526} y1={442} x2={526} y2={448} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Line x1={556} y1={477} x2={556} y2={483} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Line x1={462} y1={74} x2={468} y2={74} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
          <Line x1={557} y1={74} x2={563} y2={74} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : 'white'} />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})
CoolantFreshWaterSystemScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default CoolantFreshWaterSystemScreen
