import React from 'react'
import PropTypes from 'prop-types'
import { Rect } from 'react-native-svg'

const BigPipe = ({
  HasContent, ContentColor, x1, y1, x2, y2, Size,
}) => {
  const isHorizontal = () => y1 === y2

  const getCoords = () => {
    if (isHorizontal()) {
      const w = x2 - x1
      const h = Size
      return {
        x: x1, y: y1 - Size / 2, width: w, height: h,
      }
    }
    // Vertical
    const w = Size
    const h = y2 - y1
    return {
      x: x1 - Size / 2, y: y1, width: w, height: h,
    }
  }
  const {
    x, y, width, height,
  } = getCoords()

  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      stroke={ContentColor}
      strokeWidth={2}
      fill={HasContent ? ContentColor : 'white'}
    />
  )
}

BigPipe.propTypes = {
  HasContent: PropTypes.bool.isRequired,
  ContentColor: PropTypes.string.isRequired,
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  Size: PropTypes.number,
}

BigPipe.defaultProps = {
  Size: 8,
}

export default BigPipe
