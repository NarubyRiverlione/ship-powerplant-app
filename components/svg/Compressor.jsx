/* eslint max-len:off */
import React from 'react'
import { Animated } from 'react-native'
import { G, Path, Text } from 'react-native-svg'
import PropTypes from 'prop-types'
import Pipe from './Pipe'
import Navigate from './Navigate'
import CstResourceColor from '../../constants/CstColors'
import SafetyValve from './SafetyValve'
import { NavScreen, NavStack } from '../../constants/CstNav'

const ElectricalMotor = ({
  X, Y, isRunning,
}) => (
  <G data-name="Electric Motor-electronics" transform={`translate(${X},${Y}) scale(${3})`}>
    <Path d="M18 19h33v27H18z" fill="#898890" />
    <Path d="M3 29h8v6H3z" fill="#e0e0e2" />
    <Path d="M22 46h24v4H22z" fill="#57565c" />
    <Path d="M17 50h34v4H17z" fill="#2d2d30" />
    <Path
      d="M61 23v19a4 4 0 01-4 4h-6V19h6a4 4 0 014 4zM18 19v27h-5a2.006 2.006 0 01-2-2V21a2.006 2.006 0 012-2z"
      fill="#5aaae7"
    />
    <Path d="M23 22h23v3H23z" fill={isRunning ? '#02BD02' : '#CC0000'} />
    <Path d="M23 25h23v3H23z" fill={isRunning ? '#32DA32' : '#CF7878'} />
    <Path d="M23 28h23v8H23z" fill={isRunning ? '#8ED28E' : '#FF9595'} />
    <Path d="M23 36h23v3H23z" fill={isRunning ? '#32DA32' : '#CF7878'} />
    <Path d="M23 39h23v3H23z" fill={isRunning ? '#02BD02' : '#CC0000'} />

    <Path d="M24 15h10v4H24z" fill="#3e3d42" />
    <Path d="M20 7h18v8H20z" fill="#2488ff" />
    <Path d="M31 4h4v3h-4z" fill="#24FF63" />
    <Path d="M23 4h4v3h-4z" fill="#d80027" />
    <Path d="M57 18H35v-2h3a1 1 0 001-1V7a1 1 0 00-1-1h-2V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2h-2V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2h-2a1 1 0 00-1 1v8a1 1 0 001 1h3v2H13a3 3 0 00-3 3v7H3a1 1 0 00-1 1v6a1 1 0 001 1h7v8a3 3 0 003 3h8v2h-4a1 1 0 00-1 1v4a1 1 0 001 1h34a1 1 0 001-1v-4a1 1 0 00-1-1h-4v-2h10a5.006 5.006 0 005-5V23a5.006 5.006 0 00-5-5zm-7 27H19V20h31zM32 5h2v1h-2zm-8 0h2v1h-2zm-3 3h16v6H21zm4 8h8v2h-8zM4 34v-4h6v4zm12 11h-3a1 1 0 01-1-1V21a1 1 0 011-1h4v25zm34 8H18v-2h32zm-5-4H23v-2h22zm15-7a3 3 0 01-3 3h-5V20h5a3 3 0 013 3z" />
    <Path d="M54 23h4v2h-4zM54 27h4v2h-4zM22 22v20a1 1 0 001 1h23a1 1 0 001-1V22a1 1 0 00-1-1H23a1 1 0 00-1 1zm2 7h21v6H24zm0 8h21v1H24zm21-10H24v-1h21zM24 41v-1h21v1zm21-18v1H24v-1z" />
  </G>
)
ElectricalMotor.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
}

const AnimatedG = Animated.createAnimatedComponent(G)
const Compressor = ({
  X, Y, CompressorObj, cb, Scale, navigation,
}) => {
  const {
    isRunning, Name, SafetyOpen, Bus,
  } = CompressorObj
  return (
    <AnimatedG onPress={cb} transform={`scale(${Scale})`}>

      <Text x={X + 130} y={Y + 30} fill="black" fontSize={12}>{Name}</Text>
      <Pipe Size={3} x1={X} y1={Y + 30} x2={X + 60} y2={Y + 30} ContentColor={CstResourceColor.Electricity} HasContent={Bus.Voltage > 0} />
      <Navigate X={X + 5} Y={Y - 30} Width={105} Height={35} NavText={Bus.Name} navigation={navigation} NavStack={NavStack.Power} NavScreen={NavScreen.Power.SwitchboardScreen} />
      <ElectricalMotor X={X} Y={Y} isRunning={isRunning} />
      <Pipe x1={X + 180} y1={Y + 120} x2={X + 250} y2={Y + 120} ContentColor={CstResourceColor.CompressedAir} HasContent={isRunning} />
      <SafetyValve X={X + 180} Y={Y + 45} isOpen={SafetyOpen} />

    </AnimatedG>
  )
}

Compressor.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  CompressorObj: PropTypes.shape({
    isRunning: PropTypes.bool.isRequired,
    SafetyOpen: PropTypes.bool.isRequired,
    Name: PropTypes.string.isRequired,
    Bus: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Voltage: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

  cb: PropTypes.func.isRequired,
  Scale: PropTypes.number,
  navigation: PropTypes.object.isRequired,
}

Compressor.defaultProps = {
  Scale: 1,
}
export default Compressor
