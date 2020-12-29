import { observer } from 'mobx-react-lite'
import React from 'react'
import { Animated } from 'react-native'
import { Circle, Line, G } from 'react-native-svg'
import PropTypes from 'prop-types'

const AnimatedG = Animated.createAnimatedComponent(G)
const color = (isOpen) => (isOpen ? 'green' : 'red')

const Breaker = observer(({
  X, Y, isOpen, cb,
}) => (
  <AnimatedG onPress={cb}>
    <Line x1={X} y1={Y + 30} x2={X + 25} y2={Y + 30} stroke={color(isOpen)} />
    {isOpen
      && <Line x1={X + 30} y1={Y} x2={X + 80} y2={Y + 30} stroke={color(isOpen)} />}
    {!isOpen
      && <Line x1={X + 30} y1={Y + 30} x2={X + 80} y2={Y + 30} stroke={color(isOpen)} />}

    <Line x1={X + 85} y1={Y + 30} x2={X + 110} y2={Y + 30} stroke={color(isOpen)} />
    <Circle cx={X + 30} cy={Y + 30} r={5} stroke={color(isOpen)} />
    <Circle cx={X + 80} cy={Y + 30} r={5} stroke={color(isOpen)} />
  </AnimatedG>
))

Breaker.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  cb: PropTypes.func,
}

Breaker.defaultProps = {
  cb: () => { },
}
export default Breaker
