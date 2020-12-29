import React from 'react'

import { Rect, Text } from 'react-native-svg'
import { observer } from 'mobx-react-lite'

import Pipe from './svg/Pipe'
import Breaker from './svg/Breaker'
import GeneratorSymbol from './svg/GeneratorSymbol'

import SimContext from '../SimulatorContext'
import CstResourceColor from '../CstColors'

const SwitchBoardMainBus1 = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    PowerSys: {
      DsGen1, DsGenBreaker1, MainBus1, MainBreaker1,
    },
  } = Sim

  return (
    <React.Fragment>
      <GeneratorSymbol
        X={300}
        Y={120}
        Name={DsGen1.Name}
        isRunning={DsGen1.isRunning}
        cb={() => navigation.navigate('PowerGenerator1Screen')}
      />

      <Pipe x1={300} y1={150} x2={300} y2={180} ContentColor={CstResourceColor.Electricity} HasContent={DsGen1.isRunning} />
      <Pipe x1={300} y1={180} x2={350} y2={180} ContentColor={CstResourceColor.Electricity} HasContent={!DsGenBreaker1.isOpen && DsGen1.isRunning} />
      <Breaker X={350} Y={150} isOpen={DsGenBreaker1.isOpen} cb={() => DsGenBreaker1.Toggle()} />
      <Pipe x1={460} y1={180} x2={460} y2={250} ContentColor={CstResourceColor.Electricity} HasContent={!DsGenBreaker1.isOpen && DsGen1.isRunning} />

      <Pipe x1={100} y1={250} x2={150} y2={250} ContentColor={CstResourceColor.Electricity} HasContent={MainBus1.Voltage !== 0} />
      <Text x={30} y={230} fill="black">{`Main bus 1 : ${MainBus1.Voltage} V ${MainBus1.Providers} kW`}</Text>
      <Breaker X={150} Y={220} isOpen={MainBreaker1.isOpen} cb={() => MainBreaker1.Toggle()} />
      <Pipe x1={260} y1={250} x2={600} y2={250} ContentColor={CstResourceColor.Electricity} HasContent={!DsGenBreaker1.isOpen && DsGen1.isRunning} />

      <Pipe x1={100} y1={250} x2={100} y2={350} ContentColor={CstResourceColor.Electricity} HasContent={MainBus1.Voltage !== 0} />
      <Rect x={50} y={350} width={200} height={150} stroke="black" />
      <Text x={90} y={370} fill="black">Main bus 1 consumers</Text>
    </React.Fragment>
  )
})

export default SwitchBoardMainBus1
