import React from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import styles from '../styles'
import { BtnOpenCloseTxt, TxtOpenClose } from '../CstTxt'

const TankSys = observer(({ Sys, Name }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
    <View style={{ flex: 2 }}>
      <Text style={styles.subTitle}>{Name}</Text>
    </View>

    <View style={{
      flex: 2, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',
    }}
    >
      <Text style={styles.text}>{`${Name} intake valve ${TxtOpenClose(Sys.IntakeValve.isOpen)}`}</Text>
      <Button
        title={BtnOpenCloseTxt(Sys.IntakeValve.isOpen)}
        onPress={() => Sys.IntakeValve.Toggle()}
      />
    </View>

    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>{`${Name} tank content ${Sys.Tank.Content().toFixed(1)} %`}</Text>
    </View>

    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>{`${Name} outlet valve ${TxtOpenClose(Sys.OutletValve.isOpen)}`}</Text>
      <Button
        title={BtnOpenCloseTxt(Sys.OutletValve.isOpen)}
        onPress={() => Sys.OutletValve.Toggle()}
      />
    </View>

    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>{`${Name} drain valve ${TxtOpenClose(Sys.DrainValve.isOpen)}`}</Text>
      <Button
        title={BtnOpenCloseTxt(Sys.DrainValve.isOpen)}
        onPress={() => Sys.DrainValve.Toggle()}
      />
    </View>
  </View>
))

TankSys.propTypes = {
  Sys: PropTypes.object.isRequired,
  Name: PropTypes.string.isRequired,
}

export default TankSys
