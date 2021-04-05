import React from 'react'
import { G, Line } from 'react-native-svg'
import { observer } from 'mobx-react-lite'
import PropTypes from 'prop-types'
import SmallTankValves from './svg/SmallTankValves'
import Valve from './svg/Valve'
import Pipe from './svg/Pipe'
import Compressor from './svg/Compressor'
import CstResourceColor from '../constants/CstColors'
/*
*/
const StartAirEmergencySystem = observer(({
  X, Y,
  StartCompressor, Receiver, ReceiverColor,
}) => (
  <G>
    <Compressor
      X={X + 20}
      Y={Y + 180}
      Name={StartCompressor.Name}
      hasElectricity={StartCompressor.CheckPower}
      isRunning={StartCompressor.isRunning}
      SafetyOpen={StartCompressor.SafetyOpen}
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
      HasContent={StartCompressor.OutletValve.Content !== 0}
      Size={6}
    />
    <Valve
      X={X + 250}
      Y={Y + 85}
      ContentColor={CstResourceColor.CompressedAir}
      ValveObj={StartCompressor.OutletValve}
    />
    <Pipe
      x1={X + 302}
      y1={Y + 120}
      x2={X + 610}
      y2={Y + 120}
      ContentColor={CstResourceColor.CompressedAir}
      HasContent={StartCompressor.OutletValve.Content !== 0}
      Size={6}
    />

    <SmallTankValves
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
  // todo shape
  StartCompressor: PropTypes.object.isRequired,
  Receiver: PropTypes.object.isRequired,
  ReceiverColor: PropTypes.string.isRequired,

}

export default StartAirEmergencySystem
