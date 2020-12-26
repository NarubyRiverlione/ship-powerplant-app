import * as React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import TankSys from '../../components/TankSys'

import SimContext from '../../SimulatorContext'

const AirStorageScreen = () => {
  const Sim = SimContext()
  const { AirSys: { Storage } } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{
          flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
        }}
        >
          <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'column' }}>
            <TankSys Sys={Storage} Name="Storage" />
          </View>

        </View>

      </View>
    </SimulatorScreen>
  )
}

export default AirStorageScreen
