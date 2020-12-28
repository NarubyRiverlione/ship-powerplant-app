import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-native-svg'

const Pipe = ({
  HasContent, Color, x1, y1, x2, y2,
}) => (

  <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={Color} strokeWidth={HasContent ? 3 : 1} />
)

Pipe.propTypes = {
  HasContent: PropTypes.bool.isRequired,
  Color: PropTypes.string.isRequired,
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
}

export default Pipe
