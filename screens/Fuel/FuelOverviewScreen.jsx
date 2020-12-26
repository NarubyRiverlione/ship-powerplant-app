import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const FuelOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { FuelSys } = Sim
  const { DsStorage, DsService } = FuelSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Storage</Text>
          <Button style={{ flex: 1 }} title="Go to storage" onPress={() => navigation.navigate('FuelStorageScreen')} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={styles.text}>{`Diesel storage tank ${DsStorage.Tank.Content()} liter`}</Text>
            <Text style={styles.text}>{`Diesel service tank ${DsService.Tank.Content()} liter`}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.subTitle}>Storage SVG</Text>
          <Button title="Go to storage SVG" onPress={() => navigation.navigate('FuelStorageSVGScreen')} />
        </View>
      </View>
    </SimulatorScreen>
  )
})

FuelOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default FuelOverviewScreen
