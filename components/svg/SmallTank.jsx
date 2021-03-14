import * as React from 'react'
import PropTypes from 'prop-types'

import Svg, { Rect } from 'react-native-svg'
import LookingGlass from './LookingGlass'

const SmallTank = ({
  X, Y, TankColor,
  Size,
  ContentPct, ContentColor,
}) => (
  <Svg>
    <Rect x={X + Size / 2} y={Y} width={Size} height={Size} fill={TankColor} stroke="black" />
    {ContentPct !== null
      && (
        <LookingGlass
          X={X + Size + 20}
          Y={Y + 20}
          Size={Size / 1.5}
          ContentPct={ContentPct}
          ContentColor={ContentColor}
        />
      )}
  </Svg>
)

export default SmallTank

SmallTank.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number.isRequired,
  ContentPct: PropTypes.number,
  ContentColor: PropTypes.string,
  TankColor: PropTypes.string,
}
SmallTank.defaultProps = {
  ContentPct: null,
  ContentColor: 'white',
  TankColor: 'grey',
}
