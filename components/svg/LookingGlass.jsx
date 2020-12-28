import * as React from 'react'
import PropTypes from 'prop-types'
import Svg, { Rect } from 'react-native-svg'

const limitPct = (pct) => (pct < 0 ? 0 : pct > 100 ? 100 : pct) // eslint-disable-line

const LookingGlass = ({
  X, Y, Size, ContentPct, ContentColor,
}) => {
  const height = Size
  const width = 20
  const fillPct = Size / 100 * limitPct(ContentPct)
  return (
    <Svg>
      <Rect x={X} y={Y} width={width} height={height} fill="black" stroke="white" />
      <Rect x={X} y={Size - fillPct + Y} width={width} height={fillPct} fill={ContentColor} stroke="white" />
    </Svg>

  )
}
LookingGlass.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number.isRequired,
  ContentPct: PropTypes.number.isRequired,
  ContentColor: PropTypes.string,
}
LookingGlass.defaultProps = {
  ContentColor: 'white',
}

export default LookingGlass
