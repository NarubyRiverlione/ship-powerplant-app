import * as React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import TankSys from '../../components/TankSys'
import ValveSys from '../../components/ValveSys'
import SimContext from '../../SimulatorContext'

const LubStorageScreen = () => {
  const Sim = SimContext()
  const { LubSys: { Storage, ShoreValve } } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{
          flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
        }}
        >
          <View style={{ flex: 4, justifyContent: 'flex-start', flexDirection: 'column' }}>
            <ValveSys Sys={ShoreValve} Name="Shore fill valve" />
            <TankSys Sys={Storage} Name="Storage" />
          </View>

        </View>
      </View>
    </SimulatorScreen>
  )
}

export default LubStorageScreen
