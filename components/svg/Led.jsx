import React from 'react'
import PropTypes from 'prop-types'
import { G, Circle, Text } from 'react-native-svg'

const Led = ({
  X, Y, Label, Status,
}) => (
  <G>
    <Circle cx={X} cy={Y} r={6} stroke="grey" strokeWidth={2} fill={Status ? 'green' : 'red'} />
    {Label && <Text x={X + 10} y={Y + 4} fill="black">{Label}</Text>}
  </G>
)

Led.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Status: PropTypes.bool.isRequired,
  Label: PropTypes.string,
}

Led.defaultProps = {
  Label: '',
}

export default Led
