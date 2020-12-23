import React, { useState } from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import styles from '../../styles'

import DieselStorage from './DieselStorage'

const limitZeroMax = (validate, max) => (validate < 0 ? 0 : validate > max ? max : validate) // eslint-disable-line

const localStyle = StyleSheet.create({
  DSview: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'green',
  },
  HFview: {
    flex: 2,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'purple',
  },

})

const DSshoreIntake = (isOpen) => {
  let fillingTimer = null
  // stop filling
  if (isOpen && filling) {
    clearInterval(filling)
    fillingTimer = null
  }
  // start filling
  if (!isOpen) {
    fillingTimer = setInterval(() => {
      const newContent = limitZeroMax(DSstorage + tankStep, tankVolume)
      setDSstorage(newContent)
      debugger
    }, 2000)
  }
}

export default function FuelStorageScreen() {
  const tankVolume = 2500
  const tankStep = 100
  const [DSstorage, setDSstorage] = useState(0)
  const filling = null

  const addContent = () => {
    const newContent = limitZeroMax(DSstorage + tankStep, tankVolume)
    setDSstorage(newContent)
  }
  const removeContent = () => {
    debugger
    const newContent = limitZeroMax(DSstorage - tankStep, tankVolume)
    setDSstorage(newContent)
  }

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={localStyle.DSview}>

          <View style={styles.titleView}>
            <Text style={styles.title}>Diesel fuel</Text>
          </View>

          <View style={styles.contentView}>
            <DieselStorage
              DSshoreIntakeCb={DSshoreIntakeCb}
            //   ContentPct={DSstorage / (tankVolume / 100)}
            />

          </View>

        </View>

        <View style={localStyle.HFview}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Heavy Fuel</Text>
          </View>
          <View style={styles.contentView} />
        </View>
      </View>
    </SimulatorScreen>
  )
}
