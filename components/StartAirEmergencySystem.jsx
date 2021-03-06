import React from 'react'
import { G, Line } from 'react-native-svg'
import { observer } from 'mobx-react-lite'
import PropTypes from 'prop-types'
import SmallTankValvesDrain from './svg/SmallTankValvesDrain'
import Valve from './svg/Valve'
import Pipe from './svg/Pipe'
import Arrow from './svg/Arrow'
import Compressor from './svg/Compressor'
import CstResourceColor from '../constants/CstColors'
/*
*/
const StartAirEmergencySystem = observer(({
  X, Y,
  StartCompressor, Receiver, ReceiverColor, navigation,
}) => (
  <G>
    <Compressor
      X={X + 20}
      Y={Y + 180}
      navigation={navigation}
      CompressorObj={StartCompressor}
      cb={() => {
        StartCompressor.Toggle()
      }}
      Scale={0.7}
    />

    <Pipe
      x1={X + 125}
      y1={Y + 120}
      x2={X + 250}
      y2={Y + 120}
      ContentColor={CstResourceColor.CompressedAir}
      HasContent={StartCompressor.isRunning}
      Size={6}
    />
    <Valve
      X={X + 250}
      Y={Y + 85}
      ContentColor={CstResourceColor.CompressedAir}
      ValveObj={StartCompressor.OutletValve}
    />
    <Arrow X={X + 310} Y={Y + 130} />
    <Pipe
      x1={X + 302}
      y1={Y + 120}
      x2={X + 610}
      y2={Y + 120}
      ContentColor={CstResourceColor.CompressedAir}
      HasContent={StartCompressor.OutletValve.Content !== 0}
      Size={6}
    />

    <SmallTankValvesDrain
      X={X + 600}
      Y={Y + 70}
      Name={Receiver.Tank.Name}
      TankSys={Receiver}
      ContentColor={CstResourceColor.CompressedAir}
      TankColor={ReceiverColor}
    />

    <Line
      x1={X + 605}
      y1={Y + 118}
      x2={X + 605}
      y2={Y + 122}
      strokeWidth="2"
      stroke={StartCompressor.OutletValve.Content !== 0 ? CstResourceColor.CompressedAir : 'white'}
    />
  </G>
))

StartAirEmergencySystem.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,

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
  navigation: PropTypes.object.isRequired,
}

export default StartAirEmergencySystem
