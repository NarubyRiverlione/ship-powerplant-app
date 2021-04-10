import React from 'react'
import { G, Line, Text } from 'react-native-svg'
import { observer } from 'mobx-react-lite'
import PropTypes from 'prop-types'
import TankValves from './svg/TankValves'
import Cooler from './svg/Cooler'
import Valve from './svg/Valve'
import Pipe from './svg/Pipe'
import Compressor from './svg/Compressor'
import CstResourceColor from '../constants/CstColors'
import { NavScreen, NavStack } from '../constants/CstNav'

const StartAirSystem = observer(({
  X, Y, navigation,
  StartCompressor, Receiver, ReceiverColor, StartAirCooler,
}) => (
  <G>
    <Compressor
      X={X}
      Y={Y + 60}
      navigation={navigation}
      CompressorObj={StartCompressor}
      cb={() => {
        StartCompressor.Toggle()
      }}
    />

    <Valve
      X={X + 250}
      Y={Y + 145}
      ContentColor={CstResourceColor.CompressedAir}
      ValveObj={StartCompressor.OutletValve}
    />
    <Pipe
      x1={X + 302}
      y1={Y + 180}
      x2={X + 360}
      y2={Y + 180}
      ContentColor={CstResourceColor.CompressedAir}
      HasContent={StartCompressor.OutletValve.Content !== 0}
    />
    <Cooler
      X={X + 350}
      Y={Y + 100}
      CoolerObj={StartAirCooler}
      cb={() => navigation.navigate(NavStack.Coolant, { screen: NavScreen.Coolant.FreshWaterSystemScreen })}
    />
    <Text x={X + 450} y={Y + 150} fill="black">{StartAirCooler.Name}</Text>
    <Pipe
      x1={X + 445}
      y1={Y + 120}
      x2={X + 610}
      y2={Y + 120}
      ContentColor={CstResourceColor.CompressedAir}
      HasContent={StartCompressor.OutletValve.Content !== 0}
    />

    <TankValves
      X={X + 600}
      Y={Y + 70}
      Name={Receiver.Tank.Name}
      TankSys={Receiver}
      ContentColor={CstResourceColor.CompressedAir}
      TankColor={ReceiverColor}
    />

    <Line
      x1={X + 605}
      y1={Y + 117}
      x2={X + 605}
      y2={Y + 123}
      strokeWidth="2"
      stroke={StartCompressor.OutletValve.Content !== 0 ? CstResourceColor.CompressedAir : 'white'}
    />
  </G>
))

StartAirSystem.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,

  StartAirCooler: PropTypes.shape({
    CoolCircuitComplete: PropTypes.bool.isRequired,
    HotCircuitComplete: PropTypes.bool.isRequired,
  }).isRequired,

  StartCompressor: PropTypes.shape({
    OutletValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    Toggle: PropTypes.func.isRequired,
    Name: PropTypes.string.isRequired,
    isRunning: PropTypes.bool.isRequired,
    SafetyOpen: PropTypes.bool.isRequired,
    CheckPower: PropTypes.bool.isRequired,
  }).isRequired,

  Receiver: PropTypes.shape({
    Tank: PropTypes.shape({ Name: PropTypes.string.isRequired }).isRequired,
  }).isRequired,

  ReceiverColor: PropTypes.string.isRequired,

}

export default StartAirSystem
