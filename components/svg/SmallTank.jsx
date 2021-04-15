import * as React from 'react'
import PropTypes from 'prop-types'

import Svg, { Rect } from 'react-native-svg'
import LookingGlass from './LookingGlass'

const SmallTank = ({
  X, Y, TankColor,
  Size,
  Tank, ContentColor,
}) => {
  const { Volume, Content } = Tank
  const ContentPct = Content / Volume * 100
  return (
    <Svg>
      <Rect x={X + Size / 2} y={Y} width={Size} height={Size} fill={TankColor} stroke="black" />
      <LookingGlass
        X={X + Size + 20}
        Y={Y + 20}
        Size={Size / 1.5}
        ContentPct={ContentPct}
        ContentColor={ContentColor}
      />

    </Svg>
  )
}

export default SmallTank

SmallTank.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number.isRequired,
  Tank: PropTypes.shape({ Volume: PropTypes.number.isRequired, Content: PropTypes.number.isRequired }).isRequired,
  ContentColor: PropTypes.string,
  TankColor: PropTypes.string,
}
SmallTank.defaultProps = {
  ContentColor: 'white',
  TankColor: 'grey',
}
