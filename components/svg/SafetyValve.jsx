/* eslint max-len:off */
import React from 'react'
import { Text, Path, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import CstTxt, { TxtOpenClose } from '../../constants/CstTxt'

const SafetyValve = observer(({
  isOpen, Scale, X, Y, Vertical,
}) => (
  <G transform={`translate(${X},${Y}) scale(${0.8 * Scale}) rotate(${Vertical ? 90 : 0})`}>
    <Text
      x={X + (Vertical ? -480 : -220) * Scale}
      y={Y + (Vertical ? -20 : -50)}
      fill={isOpen ? 'red' : 'grey'}
      fontSize={isOpen ? 18 : 12}
    >
      {`${CstTxt.SafetyValve} ${TxtOpenClose(isOpen)}`}
    </Text>
    <G
      fill={isOpen ? 'green' : 'grey'}
      data-name="Safety valve"
    >
      <Path d="M61 22h-8a1 1 0 00-1 1v1h-8.06a2.876 2.876 0 00.26-1.2 2.995 2.995 0 00-4.58-2.54 14.147 14.147 0 00-15.24 0 2.995 2.995 0 00-4.58 2.54 2.876 2.876 0 00.26 1.2H12v-1a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h8a1 1 0 001-1v-1h8.06a2.876 2.876 0 00-.26 1.2 2.987 2.987 0 003 2.99 2.981 2.981 0 001.58-.45 14.081 14.081 0 0015.24 0 2.947 2.947 0 001.57.45 2.988 2.988 0 003.01-2.99 2.876 2.876 0 00-.26-1.2H52v1a1 1 0 001 1h8a1 1 0 001-1V23a1 1 0 00-1-1zM10 40H4v-4h6zm0-6H4v-4h6zm0-6H4v-4h6zm30.49-5.9a1 1 0 111.41 1.41l-6.47 6.47a3.969 3.969 0 00-1.41-1.41zm-1.13 13.02L36.24 32l3.12-3.11a8.016 8.016 0 010 6.23zM32 34a2 2 0 112-2 2.006 2.006 0 01-2 2zm3.11 5.36a8.016 8.016 0 01-6.23 0L32 36.24zM32 27.76l-3.11-3.12a8.016 8.016 0 016.23 0zm6.09-6.09l-1.48 1.48a9.987 9.987 0 00-9.21 0l-1.49-1.48a12.111 12.111 0 0112.18 0zm-15.99.43a1 1 0 011.41 0l6.47 6.47a3.969 3.969 0 00-1.41 1.41l-6.36-6.36-.11-.11a.978.978 0 010-1.41zm5.66 9.9l-3.12 3.11a8.016 8.016 0 010-6.23zm-8.4 6H12V26h7.36a14.223 14.223 0 000 12zm2.31-12.09l1.48 1.48a10.008 10.008 0 000 9.22l-1.48 1.48a12.111 12.111 0 010-12.18zm1.84 15.99a1 1 0 11-1.41-1.41l6.47-6.47a3.969 3.969 0 001.41 1.41zm2.4.43l1.48-1.48a9.871 9.871 0 009.21 0l1.49 1.48a12.111 12.111 0 01-12.18 0zm15.99-.43a1 1 0 01-1.41.01l-6.47-6.48a3.969 3.969 0 001.41-1.41l6.47 6.47a.978.978 0 010 1.41zm.43-3.81l-1.48-1.48a10.008 10.008 0 000-9.22l1.48-1.48a12.111 12.111 0 010 12.18zM52 38h-7.36a14.223 14.223 0 000-12H52zm8 2h-6v-4h6zm0-6h-6v-4h6zm0-6h-6v-4h6z" />

    </G>
  </G>
))

SafetyValve.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  Scale: PropTypes.number,
  Vertical: PropTypes.bool,
}

SafetyValve.defaultProps = {
  Scale: 1,
  Vertical: false,
}

export default SafetyValve
