import React from 'react'

import { Text } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import TankSvg from './Tank'
import ValveSvg from './Valve'
import Pipe from './Pipe'

const TankValves = observer(({
  Name, TankSys, X, Y, ContentColor, TankColor,
}) => {
  const {
    Tank, OutletValve, IntakeValve,
  } = TankSys
  return (
    <React.Fragment>
      <Text x={X + 175} y={Y + 60} fill="black" fontSize={12}>{Name}</Text>

      <Pipe x1={X + 5} y1={Y + 50} x2={X + 20} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Source.Content() !== 0} />
      <ValveSvg X={X + 20} Y={Y + 50} LeftToRight Position={IntakeValve.isOpen} cb={() => { IntakeValve.Toggle() }} />
      <Pipe x1={X + 100} y1={Y + 50} x2={X + 125} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Content() !== 0} />
      <Pipe x1={X + 125} y1={Y + 50} x2={X + 125} y2={Y + 75} ContentColor={ContentColor} HasContent={IntakeValve.Content() !== 0} />

      <TankSvg Size={250} X={X + 50} Y={Y + 75} ContentPct={Tank.Content()} ContentColor={ContentColor} TankColor={TankColor} />

      <Pipe x1={X + 200} y1={Y + 160} x2={X + 200} y2={Y + 200} ContentColor={ContentColor} HasContent={Tank.Content() !== 0} />
      <ValveSvg X={X + 200} Y={Y + 200} LeftToRight Position={OutletValve.isOpen} cb={() => { OutletValve.Toggle() }} />
      <Pipe x1={X + 280} y1={Y + 200} x2={X + 350} y2={Y + 200} ContentColor={ContentColor} HasContent={OutletValve.Content() !== 0} />

    </React.Fragment>
  )
})

TankValves.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  TankSys: PropTypes.object.isRequired,
  ContentColor: PropTypes.string.isRequired,
  TankColor: PropTypes.string,
}

export default TankValves
