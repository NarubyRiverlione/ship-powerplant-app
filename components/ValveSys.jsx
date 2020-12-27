import React from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import styles from '../styles'
import { BtnOpenCloseTxt, TxtOpenClose } from '../CstTxt'

const ValveSys = observer(({ Sys, Name }) => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Text style={styles.subTitle}>{Name}</Text>
    </View>

    <View style={{ flex: 2, flexDirection: 'row' }}>
      <Text style={styles.text}>{`${Name} ${TxtOpenClose(Sys.isOpen)}`}</Text>
      <Button
        title={BtnOpenCloseTxt(Sys.isOpen)}
        onPress={() => Sys.Toggle()}
      />
    </View>
  </View>
))

ValveSys.propTypes = {
  Sys: PropTypes.object.isRequired,
  Name: PropTypes.string.isRequired,
}

export default ValveSys
