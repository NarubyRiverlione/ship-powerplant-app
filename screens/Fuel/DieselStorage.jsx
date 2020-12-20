import React from 'react'
import { Button, View, Text } from 'react-native'
import Svg from 'react-native-svg'
import PropTypes from 'prop-types'
import Tank from '../../components/Tank'
import styles from '../../styles'

export default function DieselStorage({ addContent, removeContent, ContentPct }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'right' }}>Storage tank</Text>
      <Tank
        X={-150}
        Y={-20}
        Size={300}
        ContentPct={ContentPct}
        ContentColor="yellow"
      />

      <Button title="add" onPress={addContent} />
      <Button title="remove" onPress={removeContent} />
    </View>
  )
}

DieselStorage.propTypes = {
  addContent: PropTypes.func.isRequired,
  removeContent: PropTypes.func.isRequired,
  ContentPct: PropTypes.number.isRequired,
}
