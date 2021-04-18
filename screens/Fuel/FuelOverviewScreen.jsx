import * as React from 'react'
import { Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import SimContext from '../../SimulatorContext'

import { NavScreen } from '../../constants/CstNav'
import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'

const FuelOverviewScreen = observer(({ navigation }) => {
  const Sim = SimContext()

  const {
    DsFuelSys: { DsStorage, DsService },
    HfFuelSys: {
      HfForeBunker, HfAftBunker, HfPortBunker, HfStarboardBunker, HfSettelingTank, HfServiceTank,
    },
  } = Sim
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Diesel oil storage</Text>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Diesel storage tank ${(DsStorage.Tank.Content / DsStorage.Tank.Volume * 100).toFixed(0)} % full`}</Text>
            <Text style={styles.text}>{`Diesel service tank ${(DsService.Tank.Content / DsService.Tank.Volume * 100).toFixed(0)} % full`}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Button title="Go to diesel oil storage" onPress={() => navigation.navigate(NavScreen.Fuel.DsStorageScreen)} />
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <Text style={styles.title}>Heavy fuel storage</Text>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Fore bunker tank ${(HfForeBunker.Content / HfForeBunker.Tank.Volume * 100).toFixed(0)} % `}</Text>
            <Text style={styles.text}>{`Port bunker tank ${(HfPortBunker.Content / HfPortBunker.Tank.Volume * 100).toFixed(0)} % `}</Text>
            <Text style={styles.text}>{`Starboard bunker tank ${HfStarboardBunker.Content / HfStarboardBunker.Tank.Volume * 100} % `}</Text>
            <Text style={styles.text}>{`Aft bulk tank ${HfAftBunker.Content / HfAftBunker.Tank.Volume * 100} % `}</Text>
          </View>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Fore bunker tank ${HfForeBunker.Temperature}°C `}</Text>
            <Text style={styles.text}>{`Port bunker tank ${HfPortBunker.Temperature}°C  `}</Text>
            <Text style={styles.text}>{`Starboard bunker tank ${HfStarboardBunker.Temperature}°C `}</Text>
            <Text style={styles.text}>{`Aft bulk tank ${HfAftBunker.Temperature}°C  `}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Button title="Go to heavy fuel storage" onPress={() => navigation.navigate(NavScreen.Fuel.HfStorageScreen)} />
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <Text style={styles.title}>Heavy fuel service</Text>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Setteling tank ${(HfSettelingTank.Content / HfSettelingTank.Tank.Volume * 100).toFixed(0)} % full`}</Text>
            <Text style={styles.text}>{`Service tank ${(HfServiceTank.Content / HfServiceTank.Tank.Volume * 100).toFixed(0)} % full`}</Text>
          </View>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <Text style={styles.text}>{`Setting  tank ${HfSettelingTank.Temperature}°C `}</Text>
            <Text style={styles.text}>{`Service tank ${HfServiceTank.Temperature}°C `}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Button title="Go to heavy fuel service" onPress={() => navigation.navigate(NavScreen.Fuel.HfServiceScreen)} />
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
