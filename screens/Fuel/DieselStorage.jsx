import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import PropTypes from 'prop-types'
import styles from '../../styles'

import Tank from '../../components/Tank'
import Valve from '../../components/Valve'

export default function DieselStorage({ DSshoreIntakeCb, ContentPct }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ flex: 1, textAlign: 'right' }}>Storage tank</Text>

      <View style={{
        flex: 2, borderColor: 'yellow', borderWidth: '1', flexDirection: 'row',
      }}
      >
        <View style={{ flex: 1 }}>
          <Valve X={0} Y={20} LeftToRight cb={DSshoreIntakeCb} />
          <Svg>
            <Line x1={80} y1={20} x2={150} y2={20} stroke="black" />
          </Svg>

        </View>
        <View style={{ flex: 3 }}>
          <Tank Size={250} X={0} Y={0} ContentPct={ContentPct} ContentColor="yellow" />
        </View>
      </View>

      <View style={{ flex: 3, borderColor: 'red', borderWidth: '1' }}>
        <Text>Service tank & valves</Text>
      </View>
    </View>
  )
}

DieselStorage.propTypes = {
  DSshoreIntakeCb: PropTypes.func.isRequired,
  ContentPct: PropTypes.number.isRequired,
}

/*
   <Tank
          X={50}
          Y={200}
          Size={200}
          ContentPct={ContentPct}
          ContentColor="yellow"
        />
        */
