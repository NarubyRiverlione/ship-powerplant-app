import React from 'react'
import { Animated } from 'react-native'
import { Path, G } from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

const AnimatedG = Animated.createAnimatedComponent(G)

const Motor = observer(({
  X, Y, isRunning, cb,
}) => (
  <AnimatedG onPress={cb}>
    <G data-name="Motor" fill="dimgrey" transform={`translate(${X},${Y}) scale(0.75 0.5)`}>
      <Path d="M118.517 70.814H396.87v311.604H118.517z" fill={isRunning ? '#8ae897' : 'orangered'} />
      <G fill="#6987a0">
        <Path d="M504.5 127.041v211.414l-35.282 43.943h-72.347V70.814h72.347zM58.04 99.213h60.477v254.805
      H58.04zM159.907 121.098h195.574v37.169H159.907zM159.907 208.031
      h195.574V245.2H159.907zM159.907 294.965h195.574v37.169H159.907z"
        />
      </G>
      <Path
        d="M7.5 143.214h50.54v166.804H7.5zM135.837 382.418h67.899l17.32 35.149v23.622H118.517v-23.622z
      M380.722 382.418h67.9l17.319 35.149v23.622H363.403v-23.622z"
        fill="#c5d9ec"
      />
      <Path d="M118.517 70.814h20v311.604h-20z" fill={isRunning ? '#00ce8b' : 'red'} />
      <Path
        d="M396.871 70.814h20v311.584h-20zM58.04 99.213h20v254.805h-20zM159.907 121.098h20v37.168h-20z
      M159.907 208.031h20v37.168h-20zM159.907 294.965h20v37.169h-20z"
        fill="#57758d"
      />
      <Path
        d="M7.5 143.214h20v166.804h-20zM155.837 382.418h-20l-17.32 35.149v23.622h20v-23.622zM400.722 382.418
      h-20l-17.319 35.149v23.622h20v-23.622z"
        fill="#85b0d7"
      />
      <Path d="M512 341.089V124.883l-38.632-61.572H111.02v326.61h12.758l-12.761 25.898v32.869h117.538V415.82l-12.761-25.898
    h152.869l-12.762 25.898v32.869H473.44V415.82l-12.771-25.918h12.146zm-298.444 78.225v14.375h-87.538v-14.375l14.483-29.393h58.572zm244.885
    14.375h-87.539v-14.375l14.483-29.393c9.803 0 9.72-.004 58.571-.004l14.484 29.396v14.376zm-54.071-58.787V122.511
    h-15v252.406l-263.35.004V78.311h263.35v29.2h15v-29.2h60.701L497 129.2v206.614l-31.377 39.088zM50.54 135.711
    H0v181.81h50.54v44h37.98v-15H65.54v-66.52h-15v22.52H15v-151.81h35.54v114.29h15v-158.29 h22.98v-15H50.54z"
      />
      <Path d="M152.407 165.767h210.574v-52.169H152.407zm15-37.169h180.574v22.169H167.407zM152.407 252.7h210.574
    v-52.168H152.407zm15-37.168h180.574V237.7H167.407
    zM152.407 339.633h210.574v-52.169H152.407zm15-37.169h180.574v22.169H167.407z"
      />
      <Path
        d="M481.384 307.685h-15V215.85h15zm0-106.835h-15v-15h15zm0-30h-15v-15h15z"
        fill="#fff"
      />
    </G>
  </AnimatedG>
))

Motor.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  cb: PropTypes.func,
}

Motor.defaultProps = {
  cb: () => { },
}

export default Motor
