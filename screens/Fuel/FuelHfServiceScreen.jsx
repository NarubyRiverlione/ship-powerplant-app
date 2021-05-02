import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text, Line, Rect } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import Navigate from '../../components/svg/Navigate'

import SmallHeatedTankValves from '../../components/svg/SmallHeatedTankValves'
import Arrow from '../../components/svg/Arrow'

import CstResourceColor from '../../constants/CstColors'
import { NavScreen, NavStack } from '../../constants/CstNav'
import Pump from '../../components/svg/Pump'

const FuelHfServiceScreen = observer(() => {
  const Sim = SimContext()
  const {
    HfFuelSys: {
      HfSettelingTank,
    },
  } = Sim
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Pipe
            x1={10}
            y1={200}
            x2={40}
            y2={200}
            ContentColor={CstResourceColor.HeavyFuel}
            HasContent
          />
        </Svg>

      </View>
    </SimulatorScreen>
  )
})

export default FuelHfServiceScreen
