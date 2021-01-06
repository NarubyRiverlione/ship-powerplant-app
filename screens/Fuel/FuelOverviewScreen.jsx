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
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
        {/*
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
  <Text style={styles.subTitle}>Storage</Text>
  <Button style={{ flex: 1 }} title="Go to storage" onPress={() => navigation.navigate('FuelStorageScreen')} />
  </View>
*/}
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Diesel oil storage</Text>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Diesel storage tank ${DsStorage.Tank.Content.toFixed(0)} % full`}</Text>
            <Text style={styles.text}>{`Diesel service tank ${DsService.Tank.Content.toFixed(0)} % full`}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Button title="Go to diesel oil storage" onPress={() => navigation.navigate('FuelDsStorageScreen')} />
          </View>
        </View>

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={styles.title}>Heavy fuel storage</Text>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Aft bulk tank ${0} % `}</Text>
            <Text style={styles.text}>{`Port bunker tank ${0} % `}</Text>
            <Text style={styles.text}>{`Starboard bunker tank ${0} % `}</Text>
            <Text style={styles.text}>{`Fore bunker tank ${0} % `}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Button title="Go to heavy fuel storage" onPress={() => navigation.navigate('FuelHfStorageScreen')} />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Heavy fuel service</Text>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Heavy fuel setteling tank ${0} % full`}</Text>
            <Text style={styles.text}>{`Heavy fuel service tank ${0} % full`}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Button title="Go to heavy fuel service" onPress={() => navigation.navigate('FuelHfServiceScreen')} />
          </View>
        </View>
      </View>
    </SimulatorScreen>
  )
})

FuelOverviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default FuelOverviewScreen
