import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import { Path, G } from 'react-native-svg'

const AnimatedG = Animated.createAnimatedComponent(G)
const Generator = ({
  X, Y, Scale, cb,
}) => (
  <AnimatedG onPress={cb}>
    <G data-name="Generator" transform={`translate(${X},${Y}) scale(${0.4 * Scale})`}>
      <Path d="M472 120v192h-32v-48h-16v-96h16v-48zm0 0" fill="#ffe477" />
      <Path
        d="M404.078 81.84L440 168h-16v96h16l-35.922 86.16A16.045 16.045 0 01389.36 360H90.641a16.045 16.045 0 01-14.72-9.84L40 264h16v-96H40l35.922-86.16A16.045 16.045 0 0190.64 72h298.718a16.045 16.045 0 0114.72 9.84zM328 312V120c-.027-8.824-7.176-15.973-16-16H168c-8.824.027-15.973 7.176-16 16v192c.027 8.824 7.176 15.973 16 16h144c8.824-.027 15.973-7.176 16-16zm0 0M96 440h288v32H96zm0 0"
        fill="#d8d7da"
      />
      <Path
        d="M368 360l16 80H96l24-80zm0 0M370.238 21.36L376 72H104l5.762-50.64C111.066 13.667 117.719 8.03 125.52 8h228.96c7.801.031 14.454 5.668 15.758 13.36zm0 0"
        fill="#ffe477"
      />
      <Path
        d="M328 120v192c-.027 8.824-7.176 15.973-16 16H168c-8.824-.027-15.973-7.176-16-16V120c.027-8.824 7.176-15.973 16-16h144c8.824.027 15.973 7.176 16 16zM208 280l88-88h-48l40-40h-86.16L184 192h25.36L200 216h32zm0 0"
        fill="#d80027"
      />
      <Path
        d="M296 192l-88 88 24-64h-32l9.36-24H184l17.84-40H288l-40 40zm0 0M56 168v96H40v48H8V120h32v48zm0 0"
        fill="#ffe477"
      />
      <Path d="M472 112h-32a8 8 0 00-8 8v8l-20.543-49.266A23.918 23.918 0 00389.359 64h-6.222l-5.016-43.945C376.22 8.469 366.191-.027 354.45 0H125.551c-11.883.004-21.977 8.707-23.727 20.465L96.855 64h-6.214a23.927 23.927 0 00-22.106 14.77L48 128v-8a8 8 0 00-8-8H8a8 8 0 00-8 8v192a8 8 0 008 8h32a8 8 0 008-8v-8l20.543 49.266A23.912 23.912 0 0090.641 368h18.605l-20.91 69.703a7.57 7.57 0 00-.055.89c-.133.458-.226.93-.281 1.407v32a8 8 0 008 8h288a8 8 0 008-8v-32a7.906 7.906 0 00-.176-.855 5.397 5.397 0 000-.711L377.762 368h11.597a23.927 23.927 0 0022.106-14.77L432 304v8a8 8 0 008 8h32a8 8 0 008-8V120a8 8 0 00-8-8zM117.664 22.68a7.997 7.997 0 017.887-6.68h228.898a7.915 7.915 0 017.832 6.273L367.031 64h-254.07zM48 256h-8a7.882 7.882 0 00-7.945 8H32v40H16V128h16v40h.055A7.882 7.882 0 0040 176h8zm328 208H104v-16h272zm-1.762-32H106.754l19.2-64H361.44zM424 272h4l-31.305 75.07a8.066 8.066 0 01-7.336 4.93H90.641a8.069 8.069 0 01-7.336-4.922L52 272h4a8 8 0 008-8v-96a8 8 0 00-8-8h-4l31.305-75.07A8.066 8.066 0 0190.64 80h298.718a8.069 8.069 0 017.336 4.922L428 160h-4a8 8 0 00-8 8v96a8 8 0 008 8zm40 32h-16v-40h-.055a7.882 7.882 0 00-7.945-8h-8v-80h8a7.882 7.882 0 007.945-8H448v-40h16zm0 0" />
      <Path d="M384 128h16v176h-16zm0 0M352 120h16v192h-16zm0 0M80 128h16v176H80zm0 0M112 120h16v192h-16zm0 0M128 400h16v16h-16zm0 0M336 400h16v16h-16zm0 0M136 32h16v16h-16zm0 0M328 32h16v16h-16zm0 0M312 96H168c-13.254 0-24 10.746-24 24v192c0 13.254 10.746 24 24 24h144c13.254 0 24-10.746 24-24V120c0-13.254-10.746-24-24-24zm8 216a8 8 0 01-8 8H168a8 8 0 01-8-8V120a8 8 0 018-8h144a8 8 0 018 8zm0 0" />
      <Path d="M296 184h-28.688l26.344-26.344a8.005 8.005 0 001.735-8.719A8.002 8.002 0 00288 144h-86.137a8.004 8.004 0 00-7.304 4.734l-17.864 40a7.998 7.998 0 00.594 7.618A7.989 7.989 0 00184 200h13.602l-5.098 13.105A8.002 8.002 0 00200 224h20.457l-19.953 53.184a8 8 0 0013.152 8.472l88-88a8.005 8.005 0 001.735-8.719A8.002 8.002 0 00296 184zm-67.543 64.223l11.04-29.407A8.002 8.002 0 00232 208h-20.305l5.098-13.105a8.005 8.005 0 00-.856-7.415 8.007 8.007 0 00-6.601-3.48h-13l10.719-24h61.601l-26.344 26.344a7.996 7.996 0 00-1.726 8.73A7.999 7.999 0 00248 200h28.688zm0 0" />

    </G>
  </AnimatedG>
)

Generator.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  Scale: PropTypes.number,
  cb: PropTypes.func,
}

Generator.defaultProps = {
  Scale: 1,
  cb: () => { },
}

export default Generator
