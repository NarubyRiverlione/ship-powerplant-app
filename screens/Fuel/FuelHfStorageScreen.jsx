import { observer } from 'mobx-react-lite'
import React from 'react'
import { View } from 'react-native'
import SimContext from '../../SimulatorContext'

const FuelHfStorageScreen = observer(() => {
  const Sim = SimContext()
  return (
    <View />
  )
})

export default FuelHfStorageScreen
