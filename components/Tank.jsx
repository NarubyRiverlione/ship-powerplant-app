import * as React from 'react'
import PropTypes from 'prop-types'

import Svg, { Circle, Rect } from 'react-native-svg'
import LookingGlass from './LookingGlass'

const Tank = ({
  X, Y,
  Size,
  ContentPct, ContentColor,
}) => {
  const Width = Size
  const Height = Size / 3
  return (
    <Svg width={Width} height={Height}>
      <Circle cx={X + Height / 2} cy={Y + Height / 2} r={Height / 2} fill="gray" />
      <Rect x={X + Height / 2} y={Y} width={Width - Height} height={Height} fill="gray" />
      <Circle cx={X + Width - Height + Height / 2} cy={Y + Height / 2} r={Height / 2} fill="gray" />
      {ContentPct !== null
        && (
          <LookingGlass
            X={X + Width / 3 * 2}
            Y={Y + 10}
            Size={Height - 20}
            ContentPct={ContentPct}
            Color={ContentColor}
          />
        )}
    </Svg>
  )
}

export default Tank

Tank.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number.isRequired,
  ContentPct: PropTypes.number,
  ContentColor: PropTypes.string,
}
Tank.defaultProps = {
  ContentPct: null,
  ContentColor: 'white',
}
