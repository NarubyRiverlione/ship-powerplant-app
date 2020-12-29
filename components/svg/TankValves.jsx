import React from 'react'

import { Text, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import TankSvg from './Tank'
import BigValve from './BigValve'
import BigPipe from './BigPipe'

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
      <BigPipe x1={X + 5} y1={Y + 50} x2={X + 20} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Source.Content() !== 0} />
      <BigPipe x1={X + 72} y1={Y + 50} x2={X + 125} y2={Y + 50} ContentColor={ContentColor} HasContent={IntakeValve.Content() !== 0} />
      <BigPipe x1={X + 125} y1={Y + 46} x2={X + 125} y2={Y + 77} ContentColor={ContentColor} HasContent={IntakeValve.Content() !== 0} />
      <BigValve X={X + 20} Y={Y + 15} isOpen={IntakeValve.isOpen} cb={() => { IntakeValve.Toggle() }} OpenColor={ContentColor} />
      <Line x1={X + 121} y1={Y + 47} x2={X + 121} y2={Y + 53} strokeWidth="2" stroke={IntakeValve.Content() !== 0 ? ContentColor : 'white'} />
      {/* Outlet */}
      <BigPipe x1={X + 200} y1={Y + 155} x2={X + 200} y2={Y + 204} ContentColor={ContentColor} HasContent={Tank.Content() !== 0} />
      <BigPipe x1={X + 196} y1={Y + 200} x2={X + 230} y2={Y + 200} ContentColor={ContentColor} HasContent={Tank.Content() !== 0} />
      <Line x1={X + 197} y1={Y + 196} x2={X + 203} y2={Y + 196} strokeWidth="2" stroke={Tank.Content() !== 0 ? ContentColor : 'white'} />
      <BigPipe x1={X + 280} y1={Y + 200} x2={X + 350} y2={Y + 200} ContentColor={ContentColor} HasContent={OutletValve.Content() !== 0} />
      <BigValve X={X + 230} Y={Y + 165} isOpen={OutletValve.isOpen} cb={() => { OutletValve.Toggle() }} OpenColor={ContentColor} />
      {/* Drain */}
      <BigPipe x1={X + 100} y1={Y + 155} x2={X + 100} y2={Y + 190} ContentColor={ContentColor} HasContent={Tank.Content() !== 0} />
      <BigPipe x1={X + 60} y1={Y + 186} x2={X + 104} y2={Y + 186} ContentColor={ContentColor} HasContent={Tank.Content() !== 0} />
      <Line x1={X + 97} y1={Y + 182} x2={X + 103} y2={Y + 182} strokeWidth="2" stroke={Tank.Content() !== 0 ? ContentColor : 'white'} />
      <BigPipe x1={X + 10} y1={Y + 186} x2={X + 30} y2={Y + 186} ContentColor={ContentColor} HasContent={DrainValve.Content() !== 0} />
      <BigValve X={X + 30} Y={Y + 152} isOpen={DrainValve.isOpen} cb={() => { DrainValve.Toggle() }} OpenColor={ContentColor} />
      <Text x={X + 40} y={Y + 210} fill="black">Drain</Text>
      <TankSvg Size={250} X={X + 50} Y={Y + 75} ContentPct={Tank.Content()} ContentColor={ContentColor} TankColor={TankColor} />
    </G>
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
