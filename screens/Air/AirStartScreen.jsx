import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import TankSys from '../../components/TankSys'

import {
  BtnStartStopTxt, BtnOpenCloseTxt, TxtOpenClose, TxtRunningStopped,
} from '../../CstTxt'
import SimContext from '../../SimulatorContext'

const AirStartScreen = observer(() => {
  const Sim = SimContext()
  const { AirSys: { EmergencyReceiver, EmergencyOutletValve, EmergencyCompressor } } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{
          flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
        }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.subTitle}>Todo: start air compressor 1</Text>

          </View>

          <View style={{ flex: 4, justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.subTitle}>Emergency start air compressor 1</Text>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.subTitle}>{`Emergency start air compressor is ${TxtRunningStopped(EmergencyCompressor.isRunning)}`}</Text>
              <Button
                title={BtnStartStopTxt(EmergencyCompressor.isRunning)}
                onPress={() => EmergencyCompressor.Toggle()}
              />
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.text}>{`Emergency compressor outlet valve ${TxtOpenClose(EmergencyOutletValve.isOpen)}`}</Text>
              <Button
                title={BtnOpenCloseTxt(EmergencyOutletValve.isOpen)}
                onPress={() => EmergencyOutletValve.Toggle()}
              />
            </View>

            <View style={{ flex: 4, flexDirection: 'row' }}>
              <TankSys Sys={EmergencyReceiver} Name="Emergency start air receiver" />
            </View>

          </View>

        </View>

      </View>
    </SimulatorScreen>
  )
})

export default AirStartScreen
