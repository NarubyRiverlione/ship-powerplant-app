import { observer } from 'mobx-react-lite'
import React from 'react'
import { View } from 'react-native'

import Svg from 'react-native-svg'
import DieselGenerator from '../../components/svg/DieselGenerator'
import SimContext from '../../SimulatorContext'

import SimulatorScreen from '../SimulatorScreen'

const PowerGenerator1Screen = observer(() => {
  const Sim = SimContext()
  const { PowerSys: { DsGen1 } } = Sim
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <DieselGenerator X={300} Y={150} isRunning={DsGen1.isRunning} cb={() => DsGen1.Toggle()} />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default PowerGenerator1Screen
