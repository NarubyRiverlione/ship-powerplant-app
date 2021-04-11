import React from 'react'

import { Text, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SmallTankSvg from './SmallTank'
import Valve from './Valve'
import Pipe from './Pipe'
import CstResourceColor from '../../constants/CstColors'

const SmallTankValves = observer(({
  Name, TankSys, X, Y, ContentColor, TankColor,
}) => {
  const {
    Tank, OutletValve, IntakeValve, DrainValve,
  } = TankSys
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
      {/* Outlet */}
      <Pipe Size={6} x1={X + 200} y1={Y + 160} x2={X + 230} y2={Y + 160} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Pipe Size={6} x1={X + 280} y1={Y + 160} x2={X + 300} y2={Y + 160} ContentColor={ContentColor} HasContent={OutletValve.Content !== 0} />
      <Valve X={X + 230} Y={Y + 125} ContentColor={ContentColor} ValveObj={OutletValve} />
      {/* Drain */}
      <Pipe Size={6} x1={X + 130} y1={Y + 215} x2={X + 170} y2={Y + 215} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Pipe Size={6} x1={X + 167} y1={Y + 100} x2={X + 167} y2={Y + 212} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Line x1={X + 164} y1={Y + 212} x2={X + 169} y2={Y + 212} strokeWidth="2" stroke={Tank.Content !== 0 ? ContentColor : CstResourceColor.Empty} />
      <Text x={X + 50} y={Y + 200} fill="black">Drain</Text>
      <Pipe Size={6} x1={X + 40} y1={Y + 215} x2={X + 80} y2={Y + 215} ContentColor={ContentColor} HasContent={DrainValve.Content !== 0} />
      <Valve X={X + 80} Y={Y + 180} ContentColor={ContentColor} ValveObj={DrainValve} />

      <SmallTankSvg Size={100} X={X + 50} Y={Y + 75} ContentPct={Tank.Content} ContentColor={ContentColor} TankColor={TankColor} />
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
    DrainValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
  ContentColor: PropTypes.string.isRequired,
  TankColor: PropTypes.string,
}

export default SmallTankValves
