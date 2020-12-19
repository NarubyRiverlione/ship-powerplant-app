import * as React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native-svg'

const ContentLabel = ({ Content, X, Y }) => (
  <Text x={X} y={Y} fontSize={20} stroke="white">
    {Content}
  </Text>
)

ContentLabel.propTypes = {
  Content: PropTypes.string.isRequired,
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
}

export default ContentLabel
