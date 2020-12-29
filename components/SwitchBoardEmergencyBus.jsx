import React from 'react'

import { Circle, Rect, Text } from 'react-native-svg'
import { observer } from 'mobx-react-lite'

import Pipe from './svg/Pipe'
import Breaker from './svg/Breaker'
import GeneratorSymbol from './svg/GeneratorSymbol'

import SimContext from '../SimulatorContext'
import CstResourceColor from '../CstColors'

const SwitchBoardEmergencyBus = observer(() => {
  const Sim = SimContext()
  const {
    PowerSys: { EmergencyBus, EmergencyGen },
  } = Sim

  return (
    <React.Fragment>
      <GeneratorSymbol
        X={630}
        Y={120}
        Name={EmergencyGen.Name}
        isRunning={EmergencyGen.isRunning}
        cb={() => EmergencyGen.Toggle()}
      />
      <Pipe x1={630} y1={150} x2={630} y2={215} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyBus.Voltage !== 0} />
      <Circle cx={630} cy={220} r={5} stroke="red" />

      <Breaker X={600} Y={220} isOpen={EmergencyGen.isRunning} />

      <Text x={710} y={230} fill="black">{`Emergency bus ${EmergencyBus.Voltage} V ${EmergencyBus.Providers} kW`}</Text>
      <Pipe x1={710} y1={250} x2={840} y2={250} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyBus.Voltage !== 0} />
      <Pipe x1={840} y1={250} x2={840} y2={350} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyBus.Voltage !== 0} />
      <Rect x={780} y={350} width={160} height={150} stroke="black" />
      <Text x={790} y={370} fill="black">Emergency consumers</Text>
    </React.Fragment>
  )
})

export default SwitchBoardEmergencyBus
