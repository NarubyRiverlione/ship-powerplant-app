import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import Svg, { Line, G } from 'react-native-svg'

const AnimatedG = Animated.createAnimatedComponent(G)
const ValveSvg = ({
  X, Y, LeftToRight, cb, Position,
}) => {
  const startX1 = LeftToRight ? X : X + 6
  const eindX1 = LeftToRight ? X + 14 : X + 20
  const startX2 = LeftToRight ? X + 60 : X + 66
  const eindX2 = LeftToRight ? X + 74 : X + 80

  const [isOpen, setIsOpen] = useState(Position)
  const changeValve = () => {
    setIsOpen(!isOpen)
    cb()
  }

  const color = () => (isOpen ? 'green' : 'red')

  return (
    <AnimatedG onPress={changeValve}>

      <Line x1={startX1} y1={Y} x2={eindX1} y2={Y} stroke={color()} />

      <Line x1={X + 20} y1={Y - 10} x2={X + 20} y2={Y + 10} stroke={color()} />
      <Line x1={X + 20} y1={Y - 10} x2={X + 60} y2={Y + 10} stroke={color()} />

      <Line x1={X + 40} y1={Y} x2={X + 40} y2={Y - 10} stroke={color()} />
      <Line x1={X + 35} y1={Y - 10} x2={X + 45} y2={Y - 10} stroke={color()} />

      <Line x1={X + 20} y1={Y + 10} x2={X + 60} y2={Y - 10} stroke={color()} />
      <Line x1={X + 60} y1={Y - 10} x2={X + 60} y2={Y + 10} stroke={color()} />

      <Line x1={startX2} y1={Y} x2={eindX2} y2={Y} stroke={color()} />

      {LeftToRight && (
        <Svg>
          <Line x1={eindX1} y1={Y - 3} x2={eindX1 + 6} y2={Y} stroke={color()} />
          <Line x1={eindX1} y1={Y + 3} x2={eindX1 + 6} y2={Y} stroke={color()} />
          <Line x1={eindX1} y1={Y + 3} x2={eindX1} y2={Y - 3} stroke={color()} />

          <Line x1={eindX2} y1={Y - 3} x2={eindX2 + 6} y2={Y} stroke={color()} />
          <Line x1={eindX2} y1={Y + 3} x2={eindX2 + 6} y2={Y} stroke={color()} />
          <Line x1={eindX2} y1={Y + 3} x2={eindX2} y2={Y - 3} stroke={color()} />
        </Svg>
      )}
      {!LeftToRight && (
        <Svg>
          <Line x1={X + 66} y1={Y - 3} x2={X + 60} y2={Y} stroke={color()} />
          <Line x1={X + 66} y1={Y + 3} x2={X + 60} y2={Y} stroke={color()} />
          <Line x1={X + 66} y1={Y + 3} x2={X + 66} y2={Y - 3} stroke={color()} />

          <Line x1={X + 6} y1={Y - 3} x2={X} y2={Y} stroke={color()} />
          <Line x1={X + 6} y1={Y + 3} x2={X} y2={Y} stroke={color()} />
          <Line x1={X + 6} y1={Y + 3} x2={X + 6} y2={Y - 3} stroke={color()} />
        </Svg>
      )}

    </AnimatedG>
  )
}

ValveSvg.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  LeftToRight: PropTypes.bool.isRequired,
  Position: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
}

export default ValveSvg
