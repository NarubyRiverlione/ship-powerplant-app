import React from 'react'

import Svg, { Text } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import TankSvg from './Tank'
import ValveSvg from './Valve'
import Pipe from './Pipe'

const TankValves = observer(({
  Name, TankSys, X, Y,
}) => {
  const { Tank, OutletValve, IntakeValve } = TankSys
  return (
    <React.Fragment>
      <Text x={X + 175} y={Y + 60} stroke="black" fontSize={12}>{Name}</Text>

      <Pipe x1={X + 5} y1={Y + 50} x2={X + 20} y2={Y + 50} Color="green" HasContent={IntakeValve.Source.Content() !== 0} />
      <ValveSvg X={X + 20} Y={Y + 50} LeftToRight Position={IntakeValve.isOpen} cb={() => { IntakeValve.Toggle() }} />
      <Pipe x1={X + 100} y1={Y + 50} x2={X + 125} y2={Y + 50} Color="green" HasContent={IntakeValve.Content() !== 0} />
      <Pipe x1={X + 125} y1={Y + 50} x2={X + 125} y2={Y + 75} Color="green" HasContent={IntakeValve.Content() !== 0} />

      <TankSvg Size={250} X={X + 50} Y={Y + 75} ContentPct={Tank.Content()} ContentColor="yellow" />

      <Pipe x1={X + 200} y1={Y + 160} x2={X + 200} y2={Y + 200} Color="green" HasContent={Tank.Content() !== 0} />
      <ValveSvg X={X + 200} Y={Y + 200} LeftToRight Position={OutletValve.isOpen} cb={() => { OutletValve.Toggle() }} />
      <Pipe x1={X + 280} y1={Y + 200} x2={X + 350} y2={Y + 200} Color="green" HasContent={OutletValve.Content() !== 0} />

    </React.Fragment>
  )
})

TankValves.propTypes = {
  Name: PropTypes.string.isRequired,
  TankSys: PropTypes.object.isRequired,
}

export default TankValves
