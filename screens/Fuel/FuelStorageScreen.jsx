import * as React from 'react'
import { View, Text } from 'react-native'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import TankSys from '../../components/TankSys'
import ValveSys from '../../components/ValveSys'
import SimContext from '../../SimulatorContext'

const FuelStorageScreen = () => {
  const Sim = SimContext()
  const {
    FuelSys: {
      DsStorage, DsService, DsShoreValve,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{
          flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
        }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Diesel</Text>
          </View>

          <View style={{ flex: 6, justifyContent: 'flex-start', flexDirection: 'column' }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column' }}>
              <ValveSys Sys={DsShoreValve} Name="Shore fill valve" />
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start', flexDirection: 'column' }}>
              <TankSys Sys={DsStorage} Name="Storage" />
            </View>
          </View>

          <View style={{ flex: 5, justifyContent: 'flex-end', flexDirection: 'column' }}>
            <TankSys Sys={DsService} Name="Service" />
          </View>

        </View>

        <View style={{ flex: 2, flexDirection: 'column', padding: 20 }}>
          <Text style={styles.title}>Heavy fuel</Text>
        </View>

      </View>
    </SimulatorScreen>
  )
}

export default FuelStorageScreen
