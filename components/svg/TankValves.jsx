import React from 'react'

import { Text, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import TankSvg from './Tank'
import Valve from './Valve'
import Pipe from './Pipe'
import Arrow from './Arrow'

const TankValves = observer(({
  Name, TankSys, X, Y, ContentColor, TankColor,
}) => {
  const {
    Tank, OutletValve, IntakeValve, DrainValve,
  } = TankSys
  return (
    <G>
      <Text x={X + 175} y={Y + 60} fill="black" fontSize={12}>{Name}</Text>
      {/* Intake */}
      <Pipe x1={X + 5} y1={Y + 50} x2={X + 20} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Source.Content !== 0} />
      <Pipe x1={X + 72} y1={Y + 50} x2={X + 125} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Content !== 0} />
      <Pipe x1={X + 125} y1={Y + 46} x2={X + 125} y2={Y + 77} ContentColor={ContentColor} HasContent={IntakeValve.Content !== 0} />
      <Valve X={X + 20} Y={Y + 15} ContentColor={ContentColor} ValveObj={IntakeValve} />
      <Line x1={X + 121} y1={Y + 47} x2={X + 121} y2={Y + 53} strokeWidth="2" stroke={IntakeValve.Content !== 0 ? ContentColor : 'white'} />
      <Arrow X={X + 5} Y={Y + 60} />
      {/* Outlet */}
      <Pipe x1={X + 200} y1={Y + 155} x2={X + 200} y2={Y + 204} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Pipe x1={X + 196} y1={Y + 200} x2={X + 230} y2={Y + 200} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Line x1={X + 197} y1={Y + 196} x2={X + 203} y2={Y + 196} strokeWidth="2" stroke={Tank.Content !== 0 ? ContentColor : 'white'} />
      <Pipe x1={X + 280} y1={Y + 200} x2={X + 350} y2={Y + 200} ContentColor={ContentColor} HasContent={OutletValve.Content !== 0} />
      <Valve X={X + 230} Y={Y + 165} ContentColor={ContentColor} ValveObj={OutletValve} />
      <Arrow X={X + 210} Y={Y + 210} />
      {/* Drain */}
      <Pipe x1={X + 100} y1={Y + 155} x2={X + 100} y2={Y + 190} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Pipe x1={X + 60} y1={Y + 186} x2={X + 104} y2={Y + 186} ContentColor={ContentColor} HasContent={Tank.Content !== 0} />
      <Line x1={X + 97} y1={Y + 182} x2={X + 103} y2={Y + 182} strokeWidth="2" stroke={Tank.Content !== 0 ? ContentColor : 'white'} />
      <Pipe x1={X + 10} y1={Y + 186} x2={X + 30} y2={Y + 186} ContentColor={ContentColor} HasContent={DrainValve.Content !== 0} />
      <Valve X={X + 30} Y={Y + 152} ContentColor={ContentColor} ValveObj={DrainValve} />
      <Text x={X + 40} y={Y + 210} fill="black">Drain</Text>
      <TankSvg Size={250} X={X + 50} Y={Y + 75} Tank={Tank} ContentColor={ContentColor} TankColor={TankColor} />
      <Arrow X={X + 100} Y={Y + 210} Left />
    </G>
  )
})

TankValves.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  TankSys: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OutletValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    IntakeValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    DrainValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    Tank: PropTypes.shape({ Volume: PropTypes.number.isRequired, Content: PropTypes.number.isRequired }).isRequired,
  }).isRequired,

  ContentColor: PropTypes.string.isRequired,
  TankColor: PropTypes.string,
}

export default TankValves
