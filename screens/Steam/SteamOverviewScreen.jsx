import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import { NavScreen } from '../../constants/CstNav'

const SteamOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { SteamSys: { Boiler } } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Oil boiler</Text>
          <Button style={{ flex: 1 }} title="Go to boiler" onPress={() => navigation.navigate(NavScreen.Steam.BoilerScreen)} />
          <View style={{
            flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Steam boiler ${Boiler.Content.toFixed(1)} bar`}</Text>
            <Text style={styles.text}>{`Steam temperature ${Boiler.Temperature.toFixed(1)} °C`}</Text>
            <Text style={styles.text}>{`Steam water lever ${Boiler.WaterTank.Content.toFixed(0)} %`}</Text>
            <Text style={styles.text}>{`Steam water  ${Boiler.hasFlame ? 'has' : 'no'} flame`}</Text>
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
