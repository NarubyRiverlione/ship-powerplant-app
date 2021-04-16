import React from 'react'
import {
  Path, Rect, Circle, G,
} from 'react-native-svg'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'

const AnimatedG = Animated.createAnimatedComponent(G)

const Machine = ({
  X, Y, isRunning, cb,
}) => (
  <AnimatedG onPress={cb}>
    <G data-name="generic machine" transform={`translate(${X},${Y}) scale(0.3)`}>
      <Path d="M136 432h240v64H136z" fill="#7e8589" />
      <Rect fill="#ced8dc" height={432} rx={32} width={304} x={104} y={16} />
      <Circle cx={256} cy={104} fill={isRunning ? 'green' : 'red'} r={24} />
      <G fill="#a0a8b3">
        <Circle cx={176} cy={280} r={8} />
        <Circle cx={208} cy={280} r={8} />
        <Circle cx={336} cy={280} r={8} />
        <Circle cx={176} cy={312} r={8} />
        <Circle cx={208} cy={312} r={8} />
        <Circle cx={240} cy={312} r={8} />
        <Circle cx={272} cy={312} r={8} />
        <Circle cx={304} cy={312} r={8} />
        <Circle cx={240} cy={280} r={8} />
        <Circle cx={272} cy={280} r={8} />
        <Circle cx={304} cy={280} r={8} />
        <Circle cx={176} cy={248} r={8} />
        <Circle cx={208} cy={248} r={8} />
        <Circle cx={336} cy={248} r={8} />
        <Circle cx={240} cy={248} r={8} />
        <Circle cx={272} cy={248} r={8} />
        <Circle cx={304} cy={248} r={8} />
        <Circle cx={176} cy={216} r={8} />
        <Circle cx={208} cy={216} r={8} />
        <Circle cx={336} cy={216} r={8} />
        <Circle cx={240} cy={216} r={8} />
        <Circle cx={272} cy={216} r={8} />
        <Circle cx={304} cy={216} r={8} />
        <Circle cx={336} cy={312} r={8} />
        <Circle cx={176} cy={344} r={8} />
        <Circle cx={208} cy={344} r={8} />
        <Circle cx={240} cy={344} r={8} />
        <Circle cx={272} cy={344} r={8} />
        <Circle cx={304} cy={344} r={8} />
        <Circle cx={336} cy={344} r={8} />
        <Circle cx={176} cy={376} r={8} />
        <Circle cx={208} cy={376} r={8} />
        <Circle cx={240} cy={376} r={8} />
        <Circle cx={272} cy={376} r={8} />
        <Circle cx={304} cy={376} r={8} />
        <Circle cx={336} cy={376} r={8} />
        <Circle cx={176} cy={408} r={8} />
        <Circle cx={208} cy={408} r={8} />
        <Circle cx={240} cy={408} r={8} />
        <Circle cx={272} cy={408} r={8} />
        <Circle cx={304} cy={408} r={8} />
        <Circle cx={336} cy={408} r={8} />
      </G>
      <Path
        d="M104 80a32 32 0 0132 32v256a32 32 0 01-32 32V80zM408 400a32 32 0 01-32-32V112a32 32 0 0132-32v320z"
        fill="#7e8589"
      />
      <Path d="M408 496H104a8 8 0 010-16h304a8 8 0 010 16z" fill="#ced8dc" />
    </G>
  </AnimatedG>
)

Machine.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
}

export default Machine
