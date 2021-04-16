/* eslint-disable max-len */
import * as React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Svg, { Text, Line } from 'react-native-svg'

import { observer } from 'mobx-react-lite'
import SmallTank from '../../components/svg/SmallTank'
import Pipe from '../../components/svg/Pipe'
import Valve from '../../components/svg/Valve'

import SimulatorScreen from '../SimulatorScreen'
import SimContext from '../../SimulatorContext'
import CstResourceColor from '../../constants/CstColors'
import Arrow from '../../components/svg/Arrow'
import { NavScreen, NavStack } from '../../constants/CstNav'
import FreshWaterCoolers from '../../components/FreshWaterCoolers'

const CoolantFreshWaterSystemScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    CoolingFreshWaterSys: {
      FwCoolerStartAir, FwCoolerDsGen,
      DsGenLubCooler, StartAirCooler,
      FwPumpDsGen, FwPumpStartAir,
      FwExpandTank, FwIntakeValve, FwDrainValve, FwEnoughForCooling,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <FreshWaterCoolers
            X={10}
            Y={50}
            FwCooler={FwCoolerDsGen}
            SystemCooler={DsGenLubCooler}
            SystemCoolerNameLine1="Diesel generator"
            SystemCoolerNameLine2={DsGenLubCooler.Name.replace('Diesel generator  ', '')}
            FwPump={FwPumpDsGen}
            navigation={navigation}
            NavToScreen={NavScreen.Power.DsGeneratorScreen}
            NavToStack={NavStack.Power}

          />

          <FreshWaterCoolers
            X={10}
            Y={350}
            FwCooler={FwCoolerStartAir}
            SystemCooler={StartAirCooler}
            SystemCoolerNameLine1={StartAirCooler.Name}
            FwPump={FwPumpStartAir}
            navigation={navigation}
            NavToScreen={NavScreen.Air.StartScreen}
            NavToStack={NavStack.CompAir}
          />

          <Pipe
            x1={950}
            y1={270}
            x2={1000}
            y2={270}
            ContentColor={CstResourceColor.FreshWater}
            HasContent={FwIntakeValve.isOpen}
          />

          <Pipe
            x1={1050}
            y1={270}
            x2={1100}
            y2={270}
            ContentColor={CstResourceColor.FreshWater}
            HasContent
          />
          <Valve
            X={1000}
            Y={235}
            ContentColor={CstResourceColor.FreshWater}
            ValveObj={FwIntakeValve}
          />
          <Arrow X={1090} Y={290} Left />

          <Pipe
            x1={920}
            y1={350}
            x2={920}
            y2={370}
            ContentColor={CstResourceColor.FreshWater}
            HasContent={FwExpandTank.Content !== 0}
          />

          <Pipe
            x1={920}
            y1={420}
            x2={920}
            y2={450}
            ContentColor={CstResourceColor.FreshWater}
            HasContent={FwDrainValve.isOpen}
          />
          <Text fill="black" x={870} y={370}>Drain</Text>

          <Valve
            X={955}
            Y={370}
            ContentColor={CstResourceColor.FreshWater}
            ValveObj={FwDrainValve}
            Vertical
          />
          <Arrow X={910} Y={430} Down />

          <Pipe x1={800} y1={94} x2={800} y2={386} ContentColor={CstResourceColor.FreshWater} HasContent={FwEnoughForCooling} />
          <Pipe x1={640} y1={90} x2={804} y2={90} ContentColor={CstResourceColor.FreshWater} HasContent={FwEnoughForCooling} />
          <Pipe x1={640} y1={390} x2={804} y2={390} ContentColor={CstResourceColor.FreshWater} HasContent={FwEnoughForCooling} />
          <Pipe x1={804} y1={300} x2={850} y2={300} ContentColor={CstResourceColor.FreshWater} HasContent={FwEnoughForCooling} />
          <Line x1={797} y1={94} x2={803} y2={94} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
          <Line x1={797} y1={386} x2={803} y2={386} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
          <Line x1={804} y1={297} x2={804} y2={303} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
          <Line x1={640} y1={86} x2={640} y2={92} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
          <Line x1={640} y1={386} x2={640} y2={392} strokeWidth={2} stroke={FwExpandTank.Content !== 0 ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
          <Arrow X={830} Y={320} Left />

          <SmallTank
            X={800}
            Y={250}
            Size={100}
            Tank={FwExpandTank}
            ContentColor={CstResourceColor.FreshWater}
            TankColor="grey"
          />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})
CoolantFreshWaterSystemScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default CoolantFreshWaterSystemScreen
