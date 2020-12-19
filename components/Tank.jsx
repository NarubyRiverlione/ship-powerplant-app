import * as React from 'react'
import PropTypes from 'prop-types'

import Svg, { Circle, Rect } from 'react-native-svg'
import LookingGlass from './LookingGlass'
import ContentLabel from './ContentLabel'

const Tank = ({
  X, Y, Size,
  ContentPct, ContentColor, ShowContent,
}) => {
  const Width = Size
  const Height = Size / 3
  return (
    <Svg x={X} y={Y} width={Width} height={Height}>
      <Circle cx={Height / 2} cy={Height / 2} r={Height / 2} fill="gray" />
      <Rect x={Height / 2} y="0" width={Width - Height} height={Height} fill="gray" />
      <Circle cx={Width - Height + Height / 2} cy={Height / 2} r={Height / 2} fill="gray" />
      {ContentPct !== null
        && (
          <LookingGlass
            X={Width / 3 * 2}
            Y={10}
            Size={Height - 20}
            ContentPct={ContentPct}
            Color={ContentColor}
          />
        )}
      {ShowContent !== null
        && (
          <ContentLabel
            X={Width / 3}
            Y={Height / 2}
            Content={ShowContent}
          />
        )}
    </Svg>

  )
}

export default Tank

Tank.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Size: PropTypes.number.isRequired,
  ContentPct: PropTypes.number,
  ContentColor: PropTypes.string,
  ShowContent: PropTypes.number,
}
Tank.defaultProps = {
  ContentPct: null,
  ContentColor: null,
  ShowContent: null,
}
