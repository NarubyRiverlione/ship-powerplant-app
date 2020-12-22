import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'

import { observer } from 'mobx-react-lite'
import styles from '../../styles'
import { useSim } from '../../MiniPowerSystem'

const CstOpen = 'Open'
const CstClosed = 'Closed'

const FuelOverviewScreen = observer(({ navigation }) => {
  const Simulator = useSim()
  const { ShoreBreaker } = Simulator

  const ToggleBreaker = () => {
    console.log(`shore breaker was : ${ShoreBreaker.isOpen}`)
    if (ShoreBreaker.isOpen) ShoreBreaker.Close()
    else ShoreBreaker.Open()

    console.log(`shore breaker is now: ${ShoreBreaker.isOpen}`)
  }

  const Overload = () => {
    ShoreBreaker.Load = 200
    ShoreBreaker.Thick()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Storage</Text>
      <Button title="Go to storage" onPress={() => navigation.navigate('FuelStorageScreen')} />

      <Text style={styles.subTitle}>Service</Text>
      <Button title="Go to service" onPress={() => navigation.navigate('FuelServiceScreen')} />

      <Text>Shore breaker</Text>
      <Button
        title={ShoreBreaker.isOpen ? CstOpen : CstClosed}
        onPress={() => ToggleBreaker()}
      />
      <Button title="Trip breaker by overloading" onPress={() => Overload()} />
    </View>
  )
})

FuelOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default FuelOverviewScreen
