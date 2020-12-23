import React from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import styles from '../../styles'
import { useSim } from '../../SimulatorContext'

const ShowBusses = observer(() => {
  const Sim = useSim()
  const { PowerSys: { MainBus1, EmergencyBus } } = Sim

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <Text style={styles.text}>{`Main bus ${MainBus1.Voltage} volts / ${MainBus1.Providers} kW`}</Text>
      <Text style={styles.text}>{`Emergency bus: ${EmergencyBus.Voltage} volts / ${EmergencyBus.Providers} kW`}</Text>
    </View>
  )
})

export default ShowBusses
