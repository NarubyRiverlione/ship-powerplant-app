import React from 'react'
import { Path, G } from 'react-native-svg'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'

const PumpSvg = ({
  X, Y, Scale, isRunning,
}) => (
  <G data-name="Pump" transform={`translate(${X},${Y}) scale(${0.2 / Scale})`}>
    <Path
      d="M489.739 489.739H389.565V22.261h100.174v467.478z"
      fill={isRunning ? '#809ded' : 'salmon'}
    />
    <Path
      d="M456.348 489.739h-66.783V22.261h66.783v467.478z"
      fill={isRunning ? '#abc5ff' : 'red'}
    />
    <Path
      d="M300.522 356.174h33.391v33.391h-33.391c-6.147 0-11.13-4.983-11.13-11.13v-11.13c-.001-6.148 4.982-11.131 11.13-11.131zm0-233.739c-6.147 0-11.13 4.983-11.13 11.13v11.13c0 6.147 4.983 11.13 11.13 11.13h33.391v-33.391h-33.391z"
      fill="#5d7eac"
    />
    <Path
      d="M367.304 189.217v133.565H222.609V189.217h144.695zm-44.521 189.218h-33.391c0 6.147 4.983 11.13 11.13 11.13h33.391v-33.391h-11.13v22.261zm-22.261-222.609h33.391v-33.391h-11.13v22.261h-33.391c-.001 6.147 4.982 11.13 11.13 11.13z"
      fill="#344966"
    />
    <Path
      d="M512 11.13v22.261c0 6.147-4.983 11.13-11.13 11.13H378.435c-6.147 0-11.13-4.983-11.13-11.13V11.13c0-6.147 4.983-11.13 11.13-11.13H500.87C507.017 0 512 4.983 512 11.13zm-11.13 456.348H378.435c-6.147 0-11.13 4.983-11.13 11.13v22.261c0 6.147 4.983 11.13 11.13 11.13H500.87c6.147 0 11.13-4.983 11.13-11.13v-22.261c0-6.147-4.983-11.13-11.13-11.13zm0-356.174H356.174v77.913H222.609v89.043h133.565v122.435H500.87c6.147 0 11.13-4.983 11.13-11.13v-267.13c0-6.148-4.983-11.131-11.13-11.131z"
      fill="#5d7eac"
    />
    <Path
      d="M356.174 411.826h-22.261c-6.147 0-11.13-4.983-11.13-11.13V111.304c0-6.147 4.983-11.13 11.13-11.13h22.261c6.147 0 11.13 4.983 11.13 11.13v289.391c0 6.148-4.983 11.131-11.13 11.131z"
      fill="#809ded"
    />
    <G fill="#344966">
      <Path d="M512 122.435v267.13c0 6.147-4.983 11.13-11.13 11.13h-44.522V111.304h44.522c6.147 0 11.13 4.983 11.13 11.131zm-11.13 345.043h-44.522V512h44.522c6.147 0 11.13-4.983 11.13-11.13v-22.261c0-6.148-4.983-11.131-11.13-11.131zM500.87 0h-44.522v44.522h44.522c6.147 0 11.13-4.983 11.13-11.13V11.13C512 4.983 507.017 0 500.87 0zM256 166.957v178.088c0 12.295-9.966 22.261-22.261 22.261H22.261V144.696h211.478c12.295 0 22.261 9.966 22.261 22.261z" />
    </G>
    <Path
      d="M44.522 189.217H256v22.261H44.522v22.261H256V256H44.522v22.261H256v22.261H44.522v22.261H256v22.261H44.522v22.261H22.261C9.966 367.304 0 357.338 0 345.043V166.957c0-12.295 9.966-22.261 22.261-22.261h211.478c12.295 0 22.261 9.966 22.261 22.261H44.522v22.26z"
      fill="#5d7eac"
    />

  </G>
)

PumpSvg.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Scale: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
}
const AnimatedG = Animated.createAnimatedComponent(G)
const Pump = ({
  X, Y, cb, Scale, isRunning,
}) => (
  <AnimatedG onPress={cb}>
    <PumpSvg X={X} Y={Y} Scale={1 / Scale} isRunning={isRunning} />
  </AnimatedG>
)
Pump.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  cb: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  Scale: PropTypes.number,
}
Pump.defaultProps = {
  Scale: 1,
}
export default Pump