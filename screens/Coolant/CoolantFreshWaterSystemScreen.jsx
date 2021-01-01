/* eslint-disable max-len */
import * as React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Svg, {
  Text, Line, TSpan, Rect, Polygon,
} from 'react-native-svg'

import { observer } from 'mobx-react-lite'
import BigValve from '../../components/svg/BigValve'
import Tank from '../../components/svg/Tank'
import BigPipe from '../../components/svg/BigPipe'
import Pump from '../../components/svg/Pump'
import Cooler from '../../components/svg/Cooler'
import SimulatorScreen from '../SimulatorScreen'
import SimContext from '../../SimulatorContext'
import CstResourceColor from '../../CstColors'

const CoolantFreshWaterSystemScreen = observer(() => {
  const Sim = SimContext()
  const {
    CoolingSys: {
      AuxPump, SuctionPump1, SuctionPump2,
      SteamCondensor, FwCoolerDsGen2, FwCoolerDsGen1, DsGen1LubCooler, FwExpandTank, FwIntakeValve,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Tank X={500} Y={10} Size={200} ContentColor={CstResourceColor.FreshWater} ContentPct={FwExpandTank.Content()} />
          <BigPipe x1={700} y1={40} x2={800} y2={40} ContentColor={CstResourceColor.FreshWater} HasContent={FwIntakeValve.isOpen} />
          <BigValve X={800} Y={5} cb={() => FwIntakeValve.Toggle()} isOpen={FwIntakeValve.isOpen} OpenColor={CstResourceColor.FreshWater} />
          <BigPipe x1={850} y1={40} x2={900} y2={40} ContentColor={CstResourceColor.FreshWater} HasContent />

          <Text fill="black" x={70} y={120}>Diesel generator 1</Text>
          <Text fill="black" x={70} y={140}>{DsGen1LubCooler.Name.replace('Diesel generator 1', '')}</Text>
          <Cooler X={180} Y={100} />

          <Text fill="black">
            <TSpan x={50} y={450}>Fresh water cooler</TSpan>
            <TSpan x={50} y={470}>{FwCoolerDsGen1.Name.replace('Fresh water cooler', '')}</TSpan>
          </Text>
          <Cooler X={160} Y={420} Scale={0.8} />
          <BigPipe x1={5} y1={400} x2={454} y2={400} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />

          <BigPipe x1={180} y1={404} x2={180} y2={420} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={230} y1={500} x2={230} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={450} y1={404} x2={450} y2={420} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={500} y1={500} x2={500} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={5} y1={530} x2={504} y2={530} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />

          <BigPipe x1={235} y1={445} x2={266} y2={445} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />
          <BigPipe x1={270} y1={420} x2={270} y2={449} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />

          <BigPipe x1={235} y1={480} x2={296} y2={480} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />
          <BigPipe x1={300} y1={420} x2={300} y2={485} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />
          <BigPipe x1={270} y1={200} x2={270} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />
          <BigPipe x1={300} y1={74} x2={300} y2={380} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />
          <BigPipe x1={210} y1={70} x2={510} y2={70} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />
          <BigPipe x1={205} y1={66} x2={205} y2={100} ContentColor={CstResourceColor.FreshWater} HasContent={FwExpandTank.Content} />

          <Text fill="black">
            <TSpan x={320} y={450}>Fresh water cooler</TSpan>
            <TSpan x={320} y={470}>{FwCoolerDsGen2.Name.replace('Fresh water cooler', '')}</TSpan>
          </Text>
          <Cooler X={430} Y={420} Scale={0.8} />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default CoolantFreshWaterSystemScreen
