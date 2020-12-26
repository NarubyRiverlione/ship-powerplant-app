import React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import {
  BtnStartStopTxt, BtnOpenCloseTxt, TxtOpenClose, TxtRunningStopped,
} from '../../CstTxt'

import SimulatorScreen from '../SimulatorScreen'
import ShowBusses from '../../components/ShowBusses'

const PowerGenerator1Screen = observer(() => {
  const Sim = SimContext()
  const { PowerSys: { DsGen1, DsGenBreaker1 } } = Sim
  return (
    <SimulatorScreen>
      <View style={{
        flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-start',
      }}
      >
        <View style={{ flex: 1 }}><ShowBusses /></View>

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.subTitle}>{`Diesel generator 1 is ${TxtRunningStopped(DsGen1.isRunning)}`}</Text>
            <Button
              title={BtnStartStopTxt(DsGen1.isRunning)}
              onPress={() => DsGen1.Toggle()}
            />
          </View>

          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start',
          }}
          >
            <Text style={styles.text}>{`${DsGen1.HasFuel ? 'Has fuel' : 'Doesn\'t have fuel'}`}</Text>
            <Text style={styles.text}>{`, intake valve is ${TxtOpenClose(DsGen1.FuelIntakeValve.isOpen)}`}</Text>
            <Button
              title={BtnOpenCloseTxt(DsGen1.HasFuel)}
              onPress={() => DsGen1.FuelIntakeValve.Toggle()}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.text}>{`${DsGen1.HasCooling ? 'Has cooling' : 'Doesn\'t have cooling'}`}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.text}>{`${DsGen1.HasLubrication ? 'Has lubrication' : 'Doesn\'t have lubrication'}`}</Text>
            <Text style={styles.text}>{`, intake valve is ${TxtOpenClose(DsGen1.LubIntakeValve.isOpen)}`}</Text>
            <Button
              title={BtnOpenCloseTxt(DsGen1.HasLubrication)}
              onPress={() => DsGen1.LubIntakeValve.Toggle()}
            />
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.text}>{`Breaker is ${TxtOpenClose(DsGenBreaker1.isOpen)}`}</Text>
          <Button
            title={BtnOpenCloseTxt(DsGenBreaker1.isOpen)}
            onPress={() => DsGenBreaker1.Toggle()}
          />
        </View>
      </View>
    </SimulatorScreen>
  )
})

export default PowerGenerator1Screen
