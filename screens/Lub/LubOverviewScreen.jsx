import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const LubOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const { LubSys } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Text style={styles.subTitle}>Storage</Text>
          <Button style={{ flex: 1 }} title="Go to storage" onPress={() => navigation.navigate('LubStorageScreen')} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={styles.text}>{`Lubrication storage tank ${LubSys.Storage.Tank.Content} %`}</Text>
          </View>
        </View>
      </View>
    </SimulatorScreen>
  )
})

LubOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default LubOverviewScreen
