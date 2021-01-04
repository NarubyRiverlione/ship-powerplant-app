import React from 'react'
import { G, Line } from 'react-native-svg'
import { observer } from 'mobx-react-lite'
import PropTypes from 'prop-types'
import TankValves from './svg/TankValves'
import BigValve from './svg/BigValve'
import BigPipe from './svg/BigPipe'
import Compressor from './svg/Compressor'
import CstResourceColor from '../CstColors'
/*
*/
const StartAirSystem = observer(({
  X, Y,
  StartCompressor, CompressorSize,
  CompOutletValve, Receiver, ReceiverColor,
}) => (
  <G>
    <Compressor
      X={X} // 50
      Y={Y} // 280
      Name={StartCompressor.Name}
      hasElectricity={StartCompressor.CheckPower()}
      isRunning={StartCompressor.isRunning}
      cb={() => {
        StartCompressor.Toggle()
      }}
      Scale={CompressorSize}
    />

    <BigValve
      X={X + 250}
      Y={Y + 85}
      ContentColor={CstResourceColor.CompressedAir}
      Valve={CompOutletValve}
    />
    <BigPipe
      x1={X + 302}
      y1={Y + 120}
      x2={X + 610}
      y2={Y + 120}
      ContentColor={CstResourceColor.CompressedAir}
      HasContent={CompOutletValve.Content() !== 0}
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
      stroke={CompOutletValve.Content() !== 0 ? CstResourceColor.CompressedAir : 'white'}
    />
  </G>
))

StartAirSystem.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  // todo shape
  StartCompressor: PropTypes.object.isRequired,
  CompOutletValve: PropTypes.object.isRequired,
  Receiver: PropTypes.object.isRequired,
  ReceiverColor: PropTypes.string.isRequired,
  CompressorSize: PropTypes.number,
}

StartAirSystem.defaultProps = {
  CompressorSize: 1,
}

export default StartAirSystem
