import React from 'react'

import { Text, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SmallTankSvg from './SmallTank'
import Valve from './Valve'
import Pipe from './Pipe'
import Arrow from './Arrow'
import CstResourceColor from '../../constants/CstColors'

const SmallTankValves = observer(({
  Name, TankSys, X, Y, ContentColor, TankColor,
}) => {
  const { Tank, OutletValve, IntakeValve } = TankSys
  return (
    <G>
      <Text x={X + 150} y={Y + 60} fill="black" fontSize={12}>{Name}</Text>
      {/* Intake */}
      <Pipe Size={6} x1={X + 5} y1={Y + 50} x2={X + 20} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Source.Content !== 0} />
      <Pipe Size={6} x1={X + 72} y1={Y + 50} x2={X + 125} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Content !== 0} />
      <Pipe Size={6} x1={X + 125} y1={Y + 47} x2={X + 125} y2={Y + 77} ContentColor={ContentColor} HasContent={IntakeValve.Content !== 0} />
      <Valve X={X + 20} Y={Y + 15} ContentColor={ContentColor} ValveObj={IntakeValve} />
      <Line
        x1={X + 122}
        y1={Y + 48}
        x2={X + 122}
        y2={Y + 52}
        strokeWidth="2"
        stroke={IntakeValve.Content !== 0 ? ContentColor : CstResourceColor.Empty}
      />
      <Arrow X={X} Y={Y + 60} />
      {/* Outlet */}
      <Pipe Size={6} x1={X + 200} y1={Y + 160} x2={X + 230} y2={Y + 160} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Pipe Size={6} x1={X + 280} y1={Y + 160} x2={X + 300} y2={Y + 160} ContentColor={ContentColor} HasContent={OutletValve.Content !== 0} />
      <Valve X={X + 230} Y={Y + 125} ContentColor={ContentColor} ValveObj={OutletValve} />
      <Arrow X={X + 210} Y={Y + 170} />
      {/* Small Tank */}
      <SmallTankSvg Size={100} X={X + 50} Y={Y + 75} Tank={Tank} ContentColor={ContentColor} TankColor={TankColor} />
    </G>
  )
})

SmallTankValves.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  TankSys: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OutletValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    IntakeValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    Tank: PropTypes.shape({ Content: PropTypes.number.isRequired, Volume: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
  ContentColor: PropTypes.string.isRequired,
  TankColor: PropTypes.string,
}

export default SmallTankValves
