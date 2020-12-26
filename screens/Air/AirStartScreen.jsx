import * as React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import TankSys from '../../components/TankSys'

import SimContext from '../../SimulatorContext'

const AirStartScreen = () => {
  const Sim = SimContext()
  const { AirSys: { Receiver1, EmergencyReceiver } } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{
          flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
        }}
        >
          <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.Text}>Todo: air compressor 1</Text>
            <TankSys Sys={Receiver1} Name="Start up air receiver 1" />
          </View>

          <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Text style={styles.Text}>Todo: emergency compressor 1</Text>
            <TankSys Sys={EmergencyReceiver} Name="Emergency air receiver" />
          </View>

        </View>

      </View>
    </SimulatorScreen>
  )
}

export default AirStartScreen
