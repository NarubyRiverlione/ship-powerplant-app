import React from 'react'
import { G, Line } from 'react-native-svg'
import PropTypes from 'prop-types'

const Arrow = ({
  X, Y, Size, Color, Left, Right, Up, Down,
}) => {
  const rotation = Left ? -180
    : Up ? -90
      : Down ? 90
        : 0

  return (
    <G transform={`rotate(${rotation},${X},${Y})`} stroke={Color} strokeWidth={Size / 10}>
      <Line x1={X} y1={Y + Size / 2} x2={X + Size} y2={Y + Size / 2} />
      <Line x1={X + (Size / 3 * 2)} y1={Y} x2={X + Size} y2={Y + Size / 2} />
      <Line x1={X + (Size / 3 * 2)} y1={Y + Size} x2={X + Size} y2={Y + Size / 2} />
    </G>
  )
}

Arrow.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number,
  Color: PropTypes.string,
  Left: PropTypes.bool,
  Right: PropTypes.bool,
  Up: PropTypes.bool,
  Down: PropTypes.bool,
}

Arrow.defaultProps = {
  Size: 10,
  Color: 'grey',
  Right: true,
  Left: false,
  Up: false,
  Down: false,
}

export default Arrow
