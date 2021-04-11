/* eslint max-len:off */

import React from 'react'
import { Animated } from 'react-native'
import {
  G, Path, Ellipse, Text, Circle,
} from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import LookingGlass from './LookingGlass'
import CstResourceColor from '../../constants/CstColors'
import Led from './Led'
import SafetyValve from './SafetyValve'
import Pipe from './Pipe'

const Flame = ({ X, Y, Scale }) => (
  <G data-name="Flame" transform={`translate(${X},${Y}) scale(${0.2 * Scale})`}>
    <Path
      d="M456.693 307.136c4.736 111.344-90.336 201.792-201.792 201.792S53.125 418.576 53.125 307.136c0 0-1.952-96.448 22.96-139.856 0 0 7.12 45.552 40.576 62.64s42.704 30.608 42.704 30.608S88.901 123.856 248.341 0c0 0-15.664 63.344 17.792 88.256s45.552 67.616 42 98.224c0 0 33.456-24.208 24.912-81.136 0 0 46.272 28.464 44.128 172.96 0 0 51.952-3.552 34.16-91.104 0 0 41.632 32.032 45.36 119.936z"
      fill="#e14b4b"
    />
    <Path
      d="M148.997 400s8.4 113.728 115.664 109.856c0 0 90.464-1.296 96.288-98.864 0 0-52 40.208-51.504-23.904.08-11.408 3.264-22.528 8.336-32.752 5.808-11.744 12.736-32.688 8.288-60.96 0 0-12.768 55.584-42.656 28.432-17.872-16.24-24.864-30.416-17.44-94.992 0 0-21.696 18.848-27.52 62.448-1.104 8.256-6.912 15.488-15.04 17.296-8 1.776-17.856-1.568-25.28-22.032 0 0-16.8 24.448 9.04 83.856 0 0 7.104 28.384-16.16 40.016s-42.016-8.4-42.016-8.4z"
      fill="#ffd83b"
    />
  </G>
)
Flame.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Scale: PropTypes.number,
}
Flame.defaultProps = {
  Scale: 1,
}

const AnimatedG = Animated.createAnimatedComponent(G)

const Boiler = observer(({
  X, Y, Scale, BoilerObj, cb,
}) => (
  <AnimatedG onPress={cb}>
    <G data-name="Boiler" transform={`translate(${X},${Y}) scale(${0.8 * Scale})`}>
      <Path
        d="M228.871 504.5v-50.088l-29.153-6.478V504.5zM312.01 504.5v-56.566l-29.153 6.478V504.5z"
        fill="#878b91"
      />
      <Path
        d="M102.542 50.49c0-11.848 7.837-22.269 19.228-25.532C146.337 17.921 193.283 7.5 255.864 7.5c64.244 0 110.286 10.267 134.291 17.3 11.296 3.31 19.031 13.704 19.031 25.473V378c0 11.848-7.837 22.269-19.228 25.532-24.566 7.037-71.513 17.458-134.094 17.458-64.244 0-110.286-10.267-134.291-17.3-11.296-3.31-19.031-13.704-19.031-25.473z"
        fill="#e2faff"
      />
      <Path
        d="M390.155 24.8C366.15 17.767 320.108 7.5 255.864 7.5c-5.539 0-10.949.085-16.238.239C295.147 9.31 335.293 18.394 357.155 24.8c11.296 3.31 19.031 13.704 19.031 25.473V378c0 11.848-7.837 22.269-19.228 25.532-22.392 6.414-63.385 15.636-117.855 17.219 5.443.154 11.026.239 16.762.239 62.581 0 109.527-10.421 134.094-17.458 11.391-3.263 19.228-13.684 19.228-25.532V50.273c-.002-11.769-7.736-22.163-19.032-25.473z"
        fill="#cbf4ff"
      />
      <Path
        d="M363.05 400.273v34.338c0 7.466-4.905 14.058-12.07 16.159-16.762 4.913-50.172 12.602-95.116 12.602-46.074 0-78.756-7.553-95.152-12.471-7.14-2.141-12.034-8.695-12.034-16.148v-34.479H363.05z"
        fill="#82d5f2"
      />
      <Path
        d="M330.05 400.273v34.338c0 7.466-4.905 14.058-12.07 16.159-14.672 4.301-42.1 10.728-78.854 12.264 5.364.219 10.945.338 16.738.338 44.944 0 78.354-7.689 95.116-12.602 7.165-2.1 12.07-8.693 12.07-16.159v-34.338z"
        fill="#67c6e4"
      />
      <Ellipse
        cx={255.864}
        cy={131.961}
        fill="#82d5f2"
        rx={49.872}
        ry={49.866}
      />
      <Path
        d="M102.542 308.121v70.094c0 11.77 7.735 22.164 19.031 25.473 24.005 7.033 70.047 17.3 134.291 17.3 62.581 0 109.527-10.421 134.094-17.458 11.391-3.263 19.228-13.684 19.228-25.532V308.12H102.542z"
        fill="#baeefc"
      />
      <Path
        d="M376.185 308.121V378c0 11.848-7.837 22.269-19.228 25.532-22.392 6.414-63.385 15.636-117.855 17.219 5.443.154 11.026.239 16.762.239 62.581 0 109.527-10.421 134.094-17.458 11.391-3.263 19.228-13.684 19.228-25.532v-69.878h-33.001z"
        fill="#a2e1f8"
      />
      <Path
        d="M313.235 131.961c0-31.632-25.737-57.366-57.372-57.366s-57.372 25.734-57.372 57.366 25.737 57.366 57.372
    57.366 57.372-25.734 57.372-57.366zm-99.743 0c0-23.361 19.008-42.366 42.372-42.366s42.372 19.005 42.372 42.366-19.008
    42.366-42.372 42.366-42.372-19.005-42.372-42.366z"
        fill="grey"
      />
      <Path
        d="M275.702 122.48c6.81-6.809-3.786-17.427-10.605-10.607l-15.037 15.035c-6.713 6.712 3.738 17.475
    10.605 10.607z"
        fill="black"
      />
      <Path
        d="M416.686 50.273c0-15.023-10.043-28.458-24.422-32.67C369.827 11.029 322.273 0 255.864 0c-15.982
    0-32.011.681-47.642 2.023-9.595.824-8.324 15.772 1.283 14.945A544.066 544.066 0 01255.864 15c64.536 0 110.517
    10.649 132.182 16.998 8.031 2.353 13.64 9.868 13.64 18.276v250.348H110.042V50.49c0-8.461 5.672-15.996 13.793-18.322
     11.309-3.239 23.561-6.107 36.416-8.525 9.464-1.78 6.705-16.528-2.773-14.741-13.31 2.503-26.019 5.48-37.772
     8.847-14.521 4.159-24.663 17.623-24.663 32.742v327.726c0 15.023 10.043 28.458 24.422 32.67 5.667 1.661
     12.942 3.605 21.713 5.585v18.281c0 10.837 6.984 20.214 17.38 23.333 7.447 2.233 18.809 5.175 33.661 7.673V504.5c0
     9.63 15 9.644 15 0v-36.56c4.486.556 9.207 1.055 14.153 1.478V504.5c0 9.63 15 9.644 15 0v-34.09c6.213.293 12.708.461
     19.493.461 6.55 0 13.051-.16 19.493-.475V504.5c0 9.63 15 9.644 15 0v-35.135c4.758-.42 9.477-.929 14.153-1.525v36.66c0
     9.63 15 9.644 15 0v-38.899c3.651-.626 7.275-1.3 10.862-2.036 9.434-1.936 6.432-16.631-3.016-14.693-53.191 10.916-112.262
     10.508-164.49-5.155-4.001-1.2-6.689-4.803-6.689-8.965v-15.181c25.125 4.743 58.83 8.919 99.687 8.919 40.222 0 74.192-4.317
     99.687-9.174v15.295c0 9.63 15 9.644 15 0V416.2c8.587-1.936 15.796-3.833 21.472-5.458 14.521-4.159 24.663-17.623
     24.663-32.742V50.273zm-28.793 346.048c-22.385 6.412-69.304 17.168-132.029 17.168-64.536
      0-110.517-10.649-132.182-16.998-8.031-2.353-13.64-9.868-13.64-18.276V315.62h291.644V378c0 8.461-5.672 15.995-13.793 18.321z"
        fill="grey"
      />
      <Path d="M203.737 351.74c-9.652 0-9.668 15 0 15 9.651 0 9.667-15 0-15zM255.864 351.74c-9.652 0-9.668 15 0 15 9.652 0 9.668-15 0-15zM307.991 351.74c-9.652 0-9.668 15 0 15 9.652 0 9.668-15 0-15z" />

      <Text x={X - 370} y={Y - 50} fill="black" fontSize={20} fontWeight="bold">{`${BoilerObj.Pressure.toFixed(1)} bar`}</Text>
      <Text x={X - 370} y={Y - 30} fill="black" fontSize={20}>{`${BoilerObj.Temperature.toFixed(0)} °C`}</Text>
      <Text x={X - 410} y={Y + 270} fill="black" fontSize={20}>{`Hotwel level ${BoilerObj.WaterLevel.toFixed(0) - 50}`}</Text>
      {/* <LookingGlass X={X - 270} Y={Y + 230} Size={60} ContentColor={CstResourceColor.FreshWater} ContentPct={BoilerObj.WaterTank.Content} /> */}
    </G>

    <Led X={X + 350} Y={Y + 270} Status={BoilerObj.HasEnoughWaterForFlame} Label="Enough water" />
    <Led X={X + 350} Y={Y + 290} Status={BoilerObj.HasFuel} Label="Has fuel" />
    <Led X={X + 350} Y={Y + 320} Status={BoilerObj.TempInsideAutoZone} Label="Auto available" />

    <Pipe x1={X + 147} y1={Y - 65} x2={X + 147} y2={Y + 15} Size={25} HasContent={BoilerObj.Pressure > 1} ContentColor={CstResourceColor.Steam} />
    <SafetyValve X={X + 160} Y={Y - 97} isOpen={BoilerObj.SafetyRelease.isOpen} Scale={1.7} />

    {BoilerObj.HasFlame && <Flame X={X + 160} Y={Y + 150} />}
  </AnimatedG>
))
// 650 80
Boiler.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  cb: PropTypes.func.isRequired,
  BoilerObj: PropTypes.shape({
    Temperature: PropTypes.number.isRequired,
    Pressure: PropTypes.number.isRequired,
    HasFlame: PropTypes.bool.isRequired,
    HasEnoughWaterForFlame: PropTypes.bool.isRequired,
    HasFuel: PropTypes.bool.isRequired,
    AutoFlame: PropTypes.bool.isRequired,
    WaterTank: PropTypes.shape({ Content: PropTypes.number.isRequired }).isRequired,
    SafetyRelease: PropTypes.shape({ isOpen: PropTypes.bool.isRequired }).isRequired,
  }).isRequired,
  Scale: PropTypes.number,
}

Boiler.defaultProps = {
  Scale: 1,
}

export default Boiler
