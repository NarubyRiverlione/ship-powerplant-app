import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'
import Svg from 'react-native-svg'

import { Text, View } from '../../components/Themed'
import Tank from '../../components/Tank'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
const limitZeroMax = (validate, max) => (validate < 0 ? 0 : validate > max ? max : validate) // eslint-disable-line

export default function PowerGenerator1Screen() {
  const tankVolume = 500
  const tankStep = 100
  const [Content, setContent] = useState(0)

  const addContent = () => {
    const newContent = limitZeroMax(Content + tankStep, tankVolume)
    setContent(newContent)
  }
  const removeContent = () => {
    const newContent = limitZeroMax(Content - tankStep, tankVolume)
    setContent(newContent)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diesel generator 1</Text>
      <Svg x={50} y={500} width={700} height={500}>
        <Tank
          X={100}
          Y={200}
          Size={300}
          //   ShowContent={`${Content} liter`}
          ContentPct={Content / (tankVolume / 100)}
          ContentColor="yellow"
        />
      </Svg>
      <Button title="add" onPress={addContent} />
      <Button title="remove" onPress={removeContent} />
    </View>
  )
}
