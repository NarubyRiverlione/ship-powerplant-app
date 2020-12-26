import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const AirOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { AirSys } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Storage</Text>
          <Button style={{ flex: 1 }} title="Go to storage" onPress={() => navigation.navigate('AirStorageScreen')} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            {AirSys && AirSys.Storage && <Text style={styles.text}>{`Air storage tank ${AirSys.Storage.Tank.Content()} liter`}</Text>}
          </View>
        </View>
      </View>
    </SimulatorScreen>
  )
})

AirOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AirOverviewScreen
