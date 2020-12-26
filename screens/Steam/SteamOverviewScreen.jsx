import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const SteamOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { SteamSys } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Oil boiler</Text>
          <Button style={{ flex: 1 }} title="Go to boiler" onPress={() => navigation.navigate('SteamBoilerScreen')} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            {SteamSys
              && <Text style={styles.text}>{`Steam boiler ${SteamSys.Boiler.Content()} bar`}</Text>}
          </View>
        </View>
      </View>
    </SimulatorScreen>
  )
})

SteamOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SteamOverviewScreen
