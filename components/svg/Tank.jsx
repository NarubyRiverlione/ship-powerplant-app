import * as React from 'react'
import PropTypes from 'prop-types'

import Svg, { Circle, Rect } from 'react-native-svg'
import LookingGlass from './LookingGlass'

const TankSvg = ({
  X, Y, TankColor,
  Size,
  Tank, ContentColor,
}) => {
  const Width = Size
  const Height = Size / 3
  const { Volume, Content } = Tank
  const ContentPct = Content / Volume * 100
  return (
    <Svg>
      <Circle cx={X + Height / 2} cy={Y + Height / 2} r={Height / 2} fill={TankColor} stroke="black" />
      <Circle cx={X + Width - Height + Height / 2} cy={Y + Height / 2} r={Height / 2} fill={TankColor} stroke="black" />
      <Rect x={X + Height / 2} y={Y} width={Width - Height} height={Height} fill={TankColor} stroke="black" />

      <LookingGlass
        X={X + Width / 3 * 2}
        Y={Y + 10}
        Size={Height - 20}
        ContentPct={ContentPct}
        ContentColor={ContentColor}
      />

    </Svg>
  )
}

export default TankSvg

TankSvg.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number.isRequired,
  Tank: PropTypes.shape({ Volume: PropTypes.number.isRequired, Content: PropTypes.number.isRequired }).isRequired,
  ContentColor: PropTypes.string,
  TankColor: PropTypes.string,
}
TankSvg.defaultProps = {
  ContentColor: 'white',
  TankColor: 'grey',
}
