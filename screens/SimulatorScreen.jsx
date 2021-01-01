import React from 'react'
import { View, Text, Button } from 'react-native'

import { observer } from 'mobx-react-lite'
import styles from '../styles'
import CstTxt, { BtnStartStopTxt } from '../CstTxt'
import SimContext from '../SimulatorContext'

const SimulatorScreen = observer(({ children }) => {
  const Sim = SimContext()

  const Running = () => (Sim.Running !== null ? CstTxt.Running : CstTxt.Stopped)

  const ToggleSim = () => {
    if (Sim.Running !== null) Sim.Stop()
    else Sim.Start()
  }
  return (
    <View style={{
      flex: 1, flexDirection: 'column', justifyContent: 'flex-start',
    }}
    >
      <View style={{
        flex: 1, flexDirection: 'row', justifyContents: 'flex-end', alignItems: 'center', backgroundColor: 'snow',
      }}
      >
        <Text style={{ ...styles.subTitle, flex: 2 }}>{`Simulator is ${Running()}`}</Text>
        <Button style={{ flex: 1 }} title={BtnStartStopTxt(Sim.Running !== null)} onPress={() => ToggleSim()} />
        <Button style={{ flex: 1 }} title="Thick" onPress={() => Sim.Thick()} />
        <Button style={{ flex: 1 }} title="RESET" onPress={() => Sim.Reset()} />
      </View>

      <View style={{
        flex: 9, flexDirection: 'column', margin: 5, justifyContent: 'flex-start', backgroundColor: 'whitesmoke',
      }}
      >
        {children}
      </View>
    </View>
  )
})

export default SimulatorScreen
