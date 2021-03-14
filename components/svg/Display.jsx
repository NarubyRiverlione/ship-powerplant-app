import React from 'react'
import { G, Text, Rect } from 'react-native-svg'
import PropTypes from 'prop-types'

const Xoffset = (Title) => (!Title ? 10 : Title.length * 15 + 20)

const Display = ({
  Title, Txt, Width, ErrorMsg,
}) => (
  <G data-name="Digital-Display">

    {/* show title if provided */}
    {Title && <Text x="10" y="32">{Title}</Text>}

    {/* display text in rect */}
    <Rect x={Xoffset(Title)} y="5" width={Width} height="40" fill="black" stroke="gray" strokeWidth={2} />

    <Text
      x={Xoffset(Title) + 10}
      y="32"
      fontFamily="LiquidCrystal"
      fill={ErrorMsg ? 'red' : 'green'}
      fontSize="1.25rem"
      textShadow="0 0"
      textAlign="center"
    >
      {Txt}
    </Text>

  </G>
)

Display.propTypes = {
  Title: PropTypes.string,
  Txt: PropTypes.string.isRequired,
  Width: PropTypes.number.isRequired,
  ErrorMsg: PropTypes.bool,
}

Display.defaultProps = {
  Title: '',
  ErrorMsg: false,
}
export default Display
