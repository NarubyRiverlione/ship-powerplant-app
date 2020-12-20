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

export default function FuelStorageScreen() {
  const tankVolume = 2500
  const tankStep = 100
  const [Content, setContent] = useState(0)
  let filling = null

  const addContent = () => {
    const newContent = limitZeroMax(Content + tankStep, tankVolume)
    setContent(newContent)
  }
  const removeContent = () => {
    const newContent = limitZeroMax(Content - tankStep, tankVolume)
    setContent(newContent)
  }

  const DSshoreIntakeCb = (isOpen) => {
    // stop filling
    if (isOpen && filling) {
      clearInterval(filling)
      filling = null
    }
    // start filling
    if (!isOpen) {
      filling = setInterval(() => { addContent() }, 1000)
    }
  }

  return (
    <View style={styles.container}>
      <View style={localStyle.DSview}>

        <View style={styles.titleView}>
          <Text style={styles.title}>Diesel fuel</Text>
        </View>

        <View style={styles.contentView}>
          <DieselStorage
            DSshoreIntakeCb={DSshoreIntakeCb}
            ContentPct={Content / (tankVolume / 100)}
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
  )
}
