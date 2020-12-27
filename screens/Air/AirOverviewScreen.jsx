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
  const { EmergencyReceiver } = AirSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Start air</Text>
          <Button style={{ flex: 1 }} title="Go to start air" onPress={() => navigation.navigate('AirStartScreen')} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={styles.text}>{`Emergency start air receiver ${EmergencyReceiver.Tank.Content()} %`}</Text>
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
