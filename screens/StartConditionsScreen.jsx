import React from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'
import SimContext from '../SimulatorContext'

const StartConditionsScreen = ({ navigation }) => {
  const Sim = SimContext()
  return (
    <View style={styles.container}>
      <View style={styles.partTitleView}>
        <Text style={styles.title}>Start conditions</Text>
      </View>
      <View style={styles.partContentView}>
        <Button onPress={() => { navigation.navigate('BottomTabNavigator') }} title="Cold & Dark" />
        <Text style={styles.subTitle}>No electricity, empty tanks</Text>
      </View>
    </View>
  )
}

StartConditionsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default StartConditionsScreen
