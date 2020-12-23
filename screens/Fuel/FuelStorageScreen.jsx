import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'

import styles from '../../styles'
import SimulatorScreen from '../SimulatorScreen'
import SimContext from '../../SimulatorContext'
import { BtnOpenCloseTxt, TxtOpenClose } from '../../CstTxt'

const FuelStorageScreen = observer(() => {
  const Sim = SimContext()
  const {
    FuelSys: {
      DieselTank, DieselShoreFillValve, DsStorageOutletValve, DsServiceIntakeValve, DsServiceTank,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column', padding: 20 }}>

          <Text style={styles.title}>Diesel</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.subTitle}>Storage tank</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.text}>{`Shore intake valve ${TxtOpenClose(DieselShoreFillValve.isOpen)}`}</Text>
              <Button
                title={BtnOpenCloseTxt(DieselShoreFillValve.isOpen)}
                onPress={() => DieselShoreFillValve.Toggle()}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.text}>{`Content ${DieselTank.Content()} liter`}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.text}>{`Outlet valve ${TxtOpenClose(DsStorageOutletValve.isOpen)}`}</Text>
              <Button
                title={BtnOpenCloseTxt(DsStorageOutletValve.isOpen)}
                onPress={() => DsStorageOutletValve.Toggle()}
              />

            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.subTitle}>Service tank</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.text}>{`Service intake valve ${TxtOpenClose(DsServiceIntakeValve.isOpen)}`}</Text>
              <Button
                title={BtnOpenCloseTxt(DsServiceIntakeValve.isOpen)}
                onPress={() => DsServiceIntakeValve.Toggle()}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.text}>{`Content ${DsServiceTank.Content()} liter`}</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 2, flexDirection: 'column', padding: 20 }}>
          <Text style={styles.title}>Heavy fuel</Text>
        </View>

      </View>
    </SimulatorScreen>
  )
})

export default FuelStorageScreen
