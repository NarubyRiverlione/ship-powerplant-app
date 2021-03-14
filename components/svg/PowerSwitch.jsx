/* eslint-disable max-len */
import React from 'react'
import { Animated } from 'react-native'
import { G, Path } from 'react-native-svg'

import PropTypes from 'prop-types'

const SwitchOn = () => (
  <G>
    <Path
      d="M160.507 92.097a4.008 4.008 0 00-5.66 0 3.989 3.989 0 00-1.03 3.87c.17.66.52 1.28 1.03 1.79.52.52 1.14.86 1.8 1.03 1.33.36 2.82.01 3.86-1.03a4.008 4.008 0 000-5.66z"
      fill="#04f56c"
    />
    <Path
      d="M140.477 109.307c1.09.78 2.04 1.74 2.82 2.83l13.35-13.35a3.918 3.918 0 01-1.8-1.03c-.51-.51-.86-1.13-1.03-1.79zM139.507 119.077c-.01-3.32-2.69-6-6-6-3.32 0-6 2.68-6.01 6z"
      fill="#ccd1d9"
    />
    <Path
      d="M143.297 112.137c-.78-1.09-1.73-2.05-2.82-2.83a11.992 11.992 0 00-6.97-2.229c-6.63 0-12 5.369-12.01 12h6a6.006 6.006 0 0112.01 0h6c0-2.592-.82-4.981-2.21-6.941z"
      fill="#e6e9ed"
    />
    <Path
      d="M121.498 119.077h-5.99c-2.2 0-4 1.8-4 4h44.01c0-2.2-1.8-4-4-4h-24.02z"
      fill="#656d78"
    />
    <Path d="M117.507 138.087h38.01v-15.01h-44.01v15.01z" fill="#656d78" />
    <Path d="M111.507 138.087h-5v6h54.01v-6h-43.01z" fill="#545c66" />
    <Path d="M101.524 144.088a1 1 0 001 1h61.998a1 1 0 100-2h-61.998a1 1 0 00-1 1z" />
    <Path d="M105.506 138.088v6a1 1 0 102 0v-5h52.014v5a1 1 0 102 0v-6a1 1 0 00-1-1h-54.014a1 1 0 00-1 1z" />
    <Path d="M110.506 123.077v15.015a1 1 0 102 0v-15.015c0-1.654 1.346-3 3-3h36.007c1.654 0 3 1.346 3 3v15.015a1 1 0 102 0v-15.015c0-2.757-2.243-5-5-5h-36.007c-2.756 0-5 2.243-5 5z" />
    <Path d="M120.501 119.085a1 1 0 102 0c0-6.068 4.937-11.005 11.005-11.005 6.068 0 11.004 4.937 11.004 11.005a1 1 0 102 0c0-7.171-5.834-13.005-13.005-13.005-7.171 0-13.004 5.834-13.004 13.005z" />
    <Path d="M126.5 119.085a1 1 0 102 0 5.01 5.01 0 015.005-5.005 5.01 5.01 0 015.005 5.005 1 1 0 102 0c0-3.862-3.143-7.005-7.005-7.005s-7.005 3.143-7.005 7.005zM142.3 112.131a.999.999 0 001.707.707l13.343-13.342a.999.999 0 10-1.414-1.414l-13.342 13.342a.997.997 0 00-.293.707zM139.472 109.302a.999.999 0 001.707.707l13.34-13.34a.999.999 0 10-1.413-1.415l-13.341 13.341a.997.997 0 00-.293.707z" />
    <Path d="M152.677 94.925c0 1.336.52 2.592 1.465 3.536a5.005 5.005 0 007.07 0 4.969 4.969 0 001.465-3.536 4.968 4.968 0 00-1.465-3.535 5.005 5.005 0 00-7.07 0 4.968 4.968 0 00-1.465 3.535zm8 0a3.002 3.002 0 01-5.121 2.122c-1.132-1.134-1.134-3.11 0-4.243a3.002 3.002 0 015.12 2.12zM110.506 123.077a1 1 0 001 1h44.007a1 1 0 100-2h-44.007a1 1 0 00-1 1zM148.506 136.087v2.005a1 1 0 102 0v-2.005a1 1 0 10-2 0zM140.506 136.087v2.005a1 1 0 102 0v-2.005a1 1 0 10-2 0zM132.506 136.087v2.005a1 1 0 102 0v-2.005a1 1 0 10-2 0zM124.506 136.087v2.005a1 1 0 102 0v-2.005a1 1 0 10-2 0zM116.506 136.087v2.005a1 1 0 102 0v-2.005a1 1 0 10-2 0z" />

  </G>
)
const SwitchOff = () => (
  <G>
    <Path
      d="M106.54 92.097a4.008 4.008 0 015.66 0 3.989 3.989 0 011.03 3.87c-.17.66-.522 1.28-1.03 1.79-.52.52-1.14.86-1.8 1.03-1.33.36-2.82.01-3.86-1.03a4.008 4.008 0 010-5.66z"
      fill="#ed5565"
    />
    <Path
      d="M126.569 109.307c-1.09.78-2.04 1.74-2.82 2.83l-13.35-13.35c.66-.17 1.28-.511 1.8-1.03.51-.51.86-1.13 1.03-1.79zM127.539 119.077c.01-3.32 2.69-6 6-6 3.32 0 6 2.68 6.01 6z"
      fill="#ccd1d9"
    />
    <Path
      d="M123.749 112.137c.78-1.09 1.73-2.05 2.82-2.83a11.992 11.992 0 016.97-2.229c6.63 0 12 5.369 12.01 12h-6a6.006 6.006 0 00-12.01 0h-6c0-2.592.82-4.981 2.21-6.941z"
      fill="#e6e9ed"
    />
    <Path
      d="M145.548 119.077h5.99c2.2 0 4 1.8 4 4h-44.01c0-2.2 1.8-4 4-4h24.02z"
      fill="#656d78"
    />
    <Path d="M149.539 138.087h-38.01v-15.01h44.01v15.01z" fill="#656d78" />
    <Path d="M155.539 138.087h5v6h-54.01v-6h43.01z" fill="#545c66" />
    <Path d="M165.522 144.088a1 1 0 01-1 1h-61.998a1 1 0 110-2h61.998a1 1 0 011 1z" />
    <Path d="M161.54 138.088v6a1 1 0 11-2 0v-5h-52.014v5a1 1 0 11-2 0v-6a1 1 0 011-1h54.014a1 1 0 011 1z" />
    <Path d="M156.54 123.077v15.015a1 1 0 11-2 0v-15.015c0-1.654-1.346-3-3-3h-36.007c-1.654 0-3 1.346-3 3v15.015a1 1 0 11-2 0v-15.015c0-2.757 2.243-5 5-5h36.007c2.756 0 5 2.243 5 5z" />
    <Path d="M146.545 119.085a1 1 0 11-2 0c0-6.068-4.937-11.005-11.005-11.005-6.068 0-11.004 4.937-11.004 11.005a1 1 0 11-2 0c0-7.171 5.834-13.005 13.005-13.005 7.171 0 13.004 5.834 13.004 13.005z" />
    <Path d="M140.545 119.084a1 1 0 11-2 0 5.01 5.01 0 00-5.005-5.005 5.01 5.01 0 00-5.005 5.005 1 1 0 11-2 0c0-3.862 3.143-7.005 7.005-7.005s7.005 3.143 7.005 7.005zM124.745 112.13a.999.999 0 01-1.707.707l-13.342-13.341a.999.999 0 111.414-1.414l13.342 13.342a.997.997 0 01.293.707zM127.574 109.302a.999.999 0 01-1.707.707l-13.34-13.341a.999.999 0 111.413-1.414l13.341 13.34a.997.997 0 01.293.708z" />
    <Path d="M114.37 94.925a4.969 4.969 0 01-1.466 3.536 5.005 5.005 0 01-7.07 0 4.969 4.969 0 01-1.465-3.536c0-1.335.521-2.591 1.465-3.535a5.005 5.005 0 017.07 0 4.968 4.968 0 011.465 3.535zm-8 0c0 .802.312 1.555.878 2.122a3.002 3.002 0 004.242 0c1.132-1.134 1.134-3.11 0-4.243a3.002 3.002 0 00-5.12 2.12zM156.54 123.077a1 1 0 01-1 1h-44.006a1 1 0 110-2h44.007a1 1 0 011 1zM118.54 136.087v2.005a1 1 0 11-2 0v-2.005a1 1 0 112 0zM126.54 136.087v2.005a1 1 0 11-2 0v-2.005a1 1 0 112 0zM134.54 136.087v2.005a1 1 0 11-2 0v-2.005a1 1 0 112 0zM142.54 136.087v2.005a1 1 0 11-2 0v-2.005a1 1 0 112 0zM150.54 136.087v2.005a1 1 0 11-2 0v-2.005a1 1 0 112 0z" />
  </G>
)
// {X - 105},${Y - 130}
const AnimatedG = Animated.createAnimatedComponent(G)
const PowerSwitch = ({
  X, Y, Scale, Vertical, isOpen, cb,
}) => {
  const x = Vertical ? X + 135 : X - 105
  const y = Vertical ? Y - 110 : Y - 130
  return (
    <AnimatedG onPress={cb}>
      <G
        data-name="Switch"
        transform={`translate(${x},${y}) scale(${1 * Scale}) rotate(${Vertical ? 90 : 0}) `}
      >
        {isOpen && <SwitchOff />}
        {!isOpen && <SwitchOn />}
      </G>
    </AnimatedG>
  )
}

PowerSwitch.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  Scale: PropTypes.number,
  Vertical: PropTypes.bool,
  cb: PropTypes.func.isRequired,
}
PowerSwitch.defaultProps = {
  Scale: 1, Vertical: false,
}

export default PowerSwitch
