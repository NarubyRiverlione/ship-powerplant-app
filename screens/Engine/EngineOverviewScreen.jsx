import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const EngineOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { EngineSys } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Storage</Text>
          <Button style={{ flex: 1 }} title="Go to main engine" onPress={() => navigation.navigate('EngineScreen')} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            {EngineSys && EngineSys.Storage && <Text style={styles.text}>{`Engine storage tank ${EngineSys.Storage.Tank.Content} liter`}</Text>}
          </View>
        </View>
      </View>
    </SimulatorScreen>
  )
})

EngineOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default EngineOverviewScreen
