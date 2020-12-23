import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import { useSim } from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import ShowBusses from '../../components/ShowBusses'

import styles from '../../styles'
import {
  BtnStartStopTxt, BtnOpenCloseTxt, TxtOpenClose, TxtRunningStopped,
} from '../../CstTxt'

const PowerSwitchboardScreen = observer(() => {
  const Sim = useSim()
  const { PowerSys } = Sim
  const { PowerSys: { ShoreBreaker, EmergencyGen } } = Sim

  const ToggleBreaker = () => {
    if (ShoreBreaker.isOpen) PowerSys.ConnectShore()
    else PowerSys.DisconnectShore()
  }
  const ToggleEMgen = () => {
    if (EmergencyGen.isRunning) EmergencyGen.Stop()
    else EmergencyGen.Start()
  }

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-even' }}>
        <View style={{ flex: 1 }}><ShowBusses /></View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.text}>{`Shore breaker is ${TxtOpenClose(ShoreBreaker.isOpen)}`}</Text>
          <Button
            title={BtnOpenCloseTxt(ShoreBreaker.isOpen)}
            onPress={() => ToggleBreaker()}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.text}>{`Emergency generator is ${TxtRunningStopped(EmergencyGen.isRunning)}`}</Text>
          <Button
            title={BtnStartStopTxt(EmergencyGen.isRunning)}
            onPress={() => ToggleEMgen()}
          />
        </View>
      </View>
    </SimulatorScreen>
  )
})

export default PowerSwitchboardScreen
