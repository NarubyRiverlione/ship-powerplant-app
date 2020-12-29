import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import ShowBusses from '../../components/ShowBusses'

import styles from '../../styles'
import {
  BtnStartStopTxt, BtnOpenCloseTxt, TxtOpenClose, TxtRunningStopped,
} from '../../CstTxt'

const TxtPowerSwitchboardScreen = observer(() => {
  const Sim = SimContext()
  const { PowerSys: { ShoreBreaker, EmergencyGen, MainBreaker1 } } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-even' }}>
        <View style={{ flex: 1 }}><ShowBusses /></View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.text}>{`Shore breaker is ${TxtOpenClose(ShoreBreaker.isOpen)}`}</Text>
          <Button
            title={BtnOpenCloseTxt(ShoreBreaker.isOpen)}
            onPress={() => ShoreBreaker.Toggle()}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.text}>{`Emergency generator is ${TxtRunningStopped(EmergencyGen.isRunning)}`}</Text>
          <Button
            title={BtnStartStopTxt(EmergencyGen.isRunning)}
            onPress={() => EmergencyGen.Toggle()}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.subTitle}>{`Main bus breaker is ${TxtOpenClose(MainBreaker1.isOpen)}`}</Text>
          <Button
            title={BtnOpenCloseTxt(MainBreaker1.isOpen)}
            onPress={() => MainBreaker1.Toggle()}
          />
        </View>
      </View>
    </SimulatorScreen>
  )
})

export default TxtPowerSwitchboardScreen
