/* eslint max-len:off */
import React from 'react'

import { Text, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SmallTankValves from './SmallTankValves'
import Valve from './Valve'
import Pipe from './Pipe'
import Arrow from './Arrow'
import CstResourceColor from '../../constants/CstColors'

const SmallHeatedTankValves = observer(({
  Name, HeatedTankSys, X, Y, ContentColor, TankColor,
}) => {
  const { Temperature, SteamIntakeValve, HasSteam } = HeatedTankSys
  return (
    <G>
      {/* Steam */}
      <Valve X={X + 25} Y={Y + 120} ValveObj={SteamIntakeValve} ContentColor={CstResourceColor.Steam} />
      <Pipe x1={X} y1={Y + 155} x2={X + 25} y2={Y + 155} ContentColor={CstResourceColor.Steam} HasContent={SteamIntakeValve.Source.Content !== 0} />
      <Pipe x1={X + 75} y1={Y + 155} x2={X + 100} y2={Y + 155} ContentColor={CstResourceColor.Steam} HasContent={SteamIntakeValve.Content !== 0} />
      <Arrow X={X} Y={Y + 165} />
      <Pipe x1={X} y1={Y + 100} x2={X + 100} y2={Y + 100} ContentColor={CstResourceColor.Steam} HasContent={SteamIntakeValve.Content !== 0} />
      <Arrow X={X + 10} Y={Y + 115} Left />

      <SmallTankValves X={X} Y={Y} Name={Name} TankSys={HeatedTankSys} ContentColor={ContentColor} TankColor={TankColor} />

      <Line x1={X + 100} y1={Y + 100} x2={X + 140} y2={Y + 100} strokeWidth={4} stroke={SteamIntakeValve.Content !== 0 ? CstResourceColor.Steam : CstResourceColor.Empty} />
      <Line x1={X + 140} y1={Y + 100} x2={X + 110} y2={Y + 115} strokeWidth={4} stroke={SteamIntakeValve.Content !== 0 ? CstResourceColor.Steam : CstResourceColor.Empty} />
      <Line x1={X + 110} y1={Y + 115} x2={X + 140} y2={Y + 130} strokeWidth={4} stroke={SteamIntakeValve.Content !== 0 ? CstResourceColor.Steam : CstResourceColor.Empty} />
      <Line x1={X + 140} y1={Y + 130} x2={X + 110} y2={Y + 140} strokeWidth={4} stroke={SteamIntakeValve.Content !== 0 ? CstResourceColor.Steam : CstResourceColor.Empty} />
      <Line x1={X + 110} y1={Y + 140} x2={X + 140} y2={Y + 155} strokeWidth={4} stroke={SteamIntakeValve.Content !== 0 ? CstResourceColor.Steam : CstResourceColor.Empty} />
      <Line x1={X + 140} y1={Y + 155} x2={X + 100} y2={Y + 155} strokeWidth={4} stroke={SteamIntakeValve.Content !== 0 ? CstResourceColor.Steam : CstResourceColor.Empty} />

      <Text x={X + 140} y={Y + 190} fill="black">{`${Temperature}°C`}</Text>
      <Text x={X + 140} y={Y + 210} fill="black">{`${HasSteam} steam`}</Text>
    </G>
  )
})

SmallHeatedTankValves.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  HeatedTankSys: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OutletValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    IntakeValve: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    Tank: PropTypes.shape({ Content: PropTypes.number.isRequired, Volume: PropTypes.number.isRequired }).isRequired,
  }).isRequired,
  ContentColor: PropTypes.string.isRequired,
  TankColor: PropTypes.string,
}

export default SmallHeatedTankValves
