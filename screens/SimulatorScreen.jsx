import React from 'react'
import { View, Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { observer } from 'mobx-react-lite'

import CstTxt, { BlackoutWarningTxt } from '../constants/CstTxt'
import SimContext from '../SimulatorContext'
import { RootStackName } from '../constants/CstNav'

import { AppColors } from '../constants/CstColors'
import useColorScheme from '../hooks/useColorScheme'
import styles from '../styles'

const Blackout = (EmergencyBus) => (EmergencyBus.Voltage === 0 ? 'darkgrey' : 'whitesmoke')

const SimulatorScreen = observer(({ children }) => {
  const Sim = SimContext()
  const { PowerSys: { EmergencyBus } } = Sim
  const navigation = useNavigation()
  const Running = () => (Sim.Running ? CstTxt.Running : CstTxt.Stopped)
  const colorScheme = useColorScheme()
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: AppColors[colorScheme].background,
    }}
    >
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContents: 'flex-end',
        alignItems: 'center',
        backgroundColor: Blackout(EmergencyBus),
      }}
      >
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Button title="<- Back" onPress={() => { navigation.goBack() }} />
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          {EmergencyBus.Voltage === 0
            && (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.BlackoutWarning}>{BlackoutWarningTxt}</Text>
              </View>
            )}
          {EmergencyBus.Voltage !== 0
            && <Button title="Alarms" onPress={() => { navigation.navigate(RootStackName.AlarmModal) }} />}
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Button title={`Simulator is ${Running()}`} onPress={() => Sim.Toggle()} />
        </View>
      </View>

      <View style={{
        flex: 9, flexDirection: 'column', padding: 5, justifyContent: 'flex-start', backgroundColor: Blackout(EmergencyBus),
      }}
      >
        {children}
      </View>
    </View>
  )
})

export default SimulatorScreen
