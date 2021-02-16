import React from 'react'
import { Animated } from 'react-native'
import { Rect, G, Text } from 'react-native-svg'
import PropTypes from 'prop-types'

const AnimatedG = Animated.createAnimatedComponent(G)
const Navigate = ({
  navigation, X, Y, Width, Height, NavText, NavStack, NavScreen,
}) => (
  <AnimatedG onPress={() => navigation.navigate(NavStack, { screen: NavScreen })}>
    <Rect x={X} y={Y} width={Width} height={Height} stroke="grey" strokeWidth={2} strokeDasharray="10 5" />
    <Text x={X + 5} y={Y + 25} fill="black">{NavText}</Text>
  </AnimatedG>

)
Navigate.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Width: PropTypes.number.isRequired,
  Height: PropTypes.number,
  NavText: PropTypes.string.isRequired,
  NavStack: PropTypes.string.isRequired,
  NavScreen: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
}
Navigate.defaultProps = {
  Height: 40,
}

export default Navigate
