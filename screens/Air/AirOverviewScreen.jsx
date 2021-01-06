import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'
import { TxtRunningStopped } from '../../CstTxt'
import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const AirOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { AirSys } = Sim
  const { EmergencyReceiver, EmergencyCompressor } = AirSys
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Start air</Text>
          </View>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={styles.text}>{`Start air receiver is ${TxtRunningStopped(EmergencyCompressor)}`}</Text>
            <Text style={styles.text}>{`Emergency start air receiver ${EmergencyReceiver.Tank.Content} %`}</Text>
          </View>
          <Button style={{ flex: 2 }} title="Go to start air" onPress={() => navigation.navigate('AirStartScreen')} />
        </View>

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.title}>Service air</Text>
        </View>
      </View>
    </SimulatorScreen>
  )
})

AirOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AirOverviewScreen
