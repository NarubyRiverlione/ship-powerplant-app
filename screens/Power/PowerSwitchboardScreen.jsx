import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import styles from '../../styles'
import ShowBusses from './ShowBusses'
import { useSim } from '../../SimulatorContext'

const CstOpen = 'open'
const CstClosed = 'closed'
const CstClosing = 'Close'
const CstOpening = 'Open'

const CstStarting = 'Start'
const CstStoping = 'Stop'
const CstRunning = 'running'
const CstStopped = 'not running'

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
  const Thick = () => {
    Sim.PowerSys.Thick()
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-even' }}>
      <View style={{ flex: 1 }}><ShowBusses /></View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.text}>{`Shore breaker is ${ShoreBreaker.isOpen ? CstOpen : CstClosed}`}</Text>
        <Button
          title={ShoreBreaker.isOpen ? CstClosing : CstOpening}
          onPress={() => ToggleBreaker()}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.text}>{`Emergency generator is ${EmergencyGen.isRunning ? CstRunning : CstStopped}`}</Text>
        <Button
          title={EmergencyGen.isRunning ? CstStoping : CstStarting}
          onPress={() => ToggleEMgen()}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button title="THICK" onPress={() => Thick()} />
      </View>
    </View>
  )
})

export default PowerSwitchboardScreen
