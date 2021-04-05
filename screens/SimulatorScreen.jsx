import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { observer } from 'mobx-react-lite'

import CstTxt from '../constants/CstTxt'
import SimContext from '../SimulatorContext'
import { RootStackName } from '../constants/CstNav'

import { AppColors } from '../constants/CstColors'
import useColorScheme from '../hooks/useColorScheme'

const SimulatorScreen = observer(({ children }) => {
  const Sim = SimContext()
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
        flex: 1, flexDirection: 'row', justifyContents: 'flex-end', alignItems: 'center', backgroundColor: 'snow',
      }}
      >
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Button title="<- Back" onPress={() => { navigation.goBack() }} />
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button title="Alarms" onPress={() => { navigation.navigate(RootStackName.AlarmModal) }} />
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Button title={`Simulator is ${Running()}`} onPress={() => Sim.Toggle()} />
        </View>
      </View>

      <View style={{
        flex: 9, flexDirection: 'column', padding: 5, justifyContent: 'flex-start', backgroundColor: 'whitesmoke',
      }}
      >
        {children}
      </View>
    </View>
  )
})

export default SimulatorScreen
