/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, Line, TSpan, G,
} from 'react-native-svg'
import { observer } from 'mobx-react-lite'

import { NavScreen, NavStack } from '../constants/CstNav'
import CstResourceColor from '../constants/CstColors'
import Navigate from './svg/Navigate'
import Cooler from './svg/Cooler'
import Pipe from './svg/Pipe'
import Pump from './svg/Pump'
import Arrow from './svg/Arrow'

const FreshWaterCoolers = observer(({
  X, Y, FwCooler, SystemCooler, navigation, NavToScreen, NavToStack,
  SystemCoolerNameLine1, SystemCoolerNameLine2, FwPump,
}) => (
  <G>
    <Pipe x1={X} y1={Y} x2={X + 144} y2={Y} ContentColor={CstResourceColor.SeaWater} HasContent={FwCooler.CoolCircuitComplete} />
    <Pipe x1={X + 140} y1={Y + 4} x2={X + 140} y2={Y + 25} ContentColor={CstResourceColor.SeaWater} HasContent={FwCooler.CoolCircuitComplete} />
    <Line x1={X + 137} y1={Y + 4} x2={X + 143} y2={Y + 4} strokeWidth={4} stroke={FwCooler.CoolCircuitComplete ? CstResourceColor.SeaWater : CstResourceColor.Empty} />
    <Arrow X={X + 15} Y={Y + 20} Left />
    <Arrow X={X + 5} Y={Y + 130} />

    <Pipe x1={X} y1={Y + 120} x2={X + 194} y2={Y + 120} ContentColor={CstResourceColor.SeaWater} HasContent={FwCooler.CoolCircuitComplete} />
    <Pipe x1={X + 190} y1={Y + 100} x2={X + 190} y2={Y + 116} ContentColor={CstResourceColor.SeaWater} HasContent={FwCooler.CoolCircuitComplete} />
    <Line x1={X + 187} y1={Y + 116} x2={X + 193} y2={Y + 116} strokeWidth={4} stroke={FwCooler.CoolCircuitComplete ? CstResourceColor.SeaWater : CstResourceColor.Empty} />

    <Pipe x1={X + 190} y1={Y + 40} x2={X + 629} y2={Y + 40} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Pipe x1={X + 625} y1={Y + 44} x2={X + 625} y2={Y + 75} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Line x1={X + 622} y1={Y + 44} x2={X + 628} y2={Y + 44} strokeWidth={4} stroke={SystemCooler.CoolCircuitComplete ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
    <Arrow X={X + 700} Y={Y + 190} Up />
    <Arrow X={X + 630} Y={Y + 60} Up />

    <Pipe x1={X + 190} y1={Y + 70} x2={X + 354} y2={Y + 70} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Arrow X={X + 205} Y={Y + 80} />

    <Pipe x1={X + 350} y1={Y + 74} x2={X + 350} y2={Y + 196} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Line x1={X + 347} y1={Y + 74} x2={X + 353} y2={Y + 74} strokeWidth={4} stroke={SystemCooler.CoolCircuitComplete ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
    <Arrow X={X + 215} Y={Y + 30} Left />

    <Pipe x1={X + 346} y1={Y + 200} x2={X + 430} y2={Y + 200} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Pipe x1={X + 500} y1={Y + 200} x2={X + 694} y2={Y + 200} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Line x1={X + 347} y1={Y + 196} x2={X + 353} y2={Y + 196} strokeWidth={4} stroke={SystemCooler.CoolCircuitComplete ? CstResourceColor.FreshWater : CstResourceColor.Empty} />
    <Pipe x1={X + 470} y1={Y + 210} x2={X + 470} y2={Y + 250} Size={4} ContentColor={CstResourceColor.Electricity} HasContent={FwPump.Bus.Voltage > 0} />
    <Navigate X={X + 480} Y={Y + 220} Width={105} Height={35} NavText={FwPump.Bus.Name} navigation={navigation} NavStack={NavStack.Power} NavScreen={NavScreen.Power.SwitchboardScreen} />
    <Pump X={X + 500} Y={Y + 140} Horizontal Scale={0.7} isRunning={FwPump.isRunning} cb={() => FwPump.Toggle()} />
    <Arrow X={X + 410} Y={Y + 210} />

    <Pipe x1={X + 690} y1={Y + 170} x2={X + 690} y2={Y + 196} ContentColor={CstResourceColor.FreshWater} HasContent={SystemCooler.CoolCircuitComplete} />
    <Line x1={X + 687} y1={Y + 196} x2={X + 693} y2={Y + 196} strokeWidth={2} stroke={SystemCooler.CoolCircuitComplete ? CstResourceColor.FreshWater : CstResourceColor.Empty} />

    <Text fill="black">
      <TSpan x={X} y={Y + 50}>Fresh water cooler</TSpan>
      <TSpan x={X} y={Y + 60}>{FwCooler.Name.replace('Fresh water cooler ', '')}</TSpan>
    </Text>
    <Cooler
      X={X + 120}
      Y={Y + 20}
      Scale={0.8}
      CoolerObj={FwCooler}
      cb={() => navigation.navigate(NavScreen.Coolant.SeaWaterScreen)}
    />

    <Text fill="black">
      <TSpan x={X + 500} y={Y + 100}>{SystemCoolerNameLine1}</TSpan>
      <TSpan x={X + 500} y={Y + 120}>{SystemCoolerNameLine2}</TSpan>
    </Text>
    <Cooler
      X={X + 600}
      Y={Y + 70}
      CoolerObj={SystemCooler}
      cb={() => navigation.navigate(NavToStack, { screen: NavToScreen })}
    />

  </G>
))

FreshWaterCoolers.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,

  FwCooler: PropTypes.shape({ CoolCircuitComplete: PropTypes.bool.isRequired, HotCircuitComplete: PropTypes.bool.isRequired }).isRequired,

  SystemCooler: PropTypes.shape({ CoolCircuitComplete: PropTypes.bool.isRequired, HotCircuitComplete: PropTypes.bool.isRequired }).isRequired,
  SystemCoolerNameLine1: PropTypes.string.isRequired,
  SystemCoolerNameLine2: PropTypes.string,

  FwPump: PropTypes.shape({ isRunning: PropTypes.bool.isRequired, Toggle: PropTypes.func.isRequired }).isRequired,

  navigation: PropTypes.object.isRequired,
  NavToScreen: PropTypes.string.isRequired,
  NavToStack: PropTypes.string.isRequired,
}

FreshWaterCoolers.defaultProps = {
  SystemCoolerNameLine2: '',
}

export default FreshWaterCoolers
