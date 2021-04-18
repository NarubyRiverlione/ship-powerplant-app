import React from 'react'

import { Text, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SmallTankSvg from './SmallTank'
import Valve from './Valve'
import Pipe from './Pipe'
import Arrow from './Arrow'
import CstResourceColor from '../../constants/CstColors'
import SmallTankValves from './SmallTankValves'

const SmallTankValvesDrain = observer(({
  Name, TankSys, X, Y, ContentColor, TankColor,
}) => {
  const { Tank, DrainValve } = TankSys
  return (
    <G>
      <SmallTankValves X={X} Y={Y} Name={Name} TankSys={TankSys} ContentColor={ContentColor} TankColor={TankColor} />
      {/* Drain */}
      <Pipe Size={6} x1={X + 130} y1={Y + 215} x2={X + 170} y2={Y + 215} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Pipe Size={6} x1={X + 167} y1={Y + 100} x2={X + 167} y2={Y + 212} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Line x1={X + 164} y1={Y + 212} x2={X + 169} y2={Y + 212} strokeWidth="2" stroke={Tank.Content !== 0 ? ContentColor : CstResourceColor.Empty} />
      <Text x={X + 50} y={Y + 200} fill="black">Drain</Text>
      <Pipe Size={6} x1={X + 40} y1={Y + 215} x2={X + 80} y2={Y + 215} ContentColor={ContentColor} HasContent={DrainValve.Content !== 0} />
      <Valve X={X + 80} Y={Y + 180} ContentColor={ContentColor} ValveObj={DrainValve} />
      <Arrow X={X + 155} Y={Y + 205} Left />
      <SmallTankSvg Size={100} X={X + 50} Y={Y + 75} Tank={Tank} ContentColor={ContentColor} TankColor={TankColor} />
    </G>
  )
})

SmallTankValvesDrain.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  TankSys: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OutletValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    IntakeValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    DrainValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    Tank: PropTypes.shape({ Content: PropTypes.number.isRequired, Volume: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
  ContentColor: PropTypes.string.isRequired,
  TankColor: PropTypes.string,
}

export default SmallTankValvesDrain
