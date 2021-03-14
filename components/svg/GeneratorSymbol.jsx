import React from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import { Circle, Text, G } from 'react-native-svg'
import { observer } from 'mobx-react-lite'

const AnimatedG = Animated.createAnimatedComponent(G)
const GeneratorSymbol = observer(({
  X, Y, isRunning, cb, Name,
}) => (
  <AnimatedG onPress={cb}>
    <Circle cx={X} cy={Y} r={30} stroke="red" strokeWidth={isRunning ? 3 : 1} />
    <Text x={X - 5} y={Y + 5} fontSize={15} fill="red" fontWeight={isRunning ? 'bold' : 'normal'}>G</Text>
    <Text x={X + 40} y={Y - 5} fill="black">{Name}</Text>
  </AnimatedG>
))

GeneratorSymbol.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  isRunning: PropTypes.bool.isRequired,
  cb: PropTypes.func,
}

GeneratorSymbol.defaultProps = {
  cb: () => { },
}

export default GeneratorSymbol
