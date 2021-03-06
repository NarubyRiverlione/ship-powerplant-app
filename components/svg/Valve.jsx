import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import { Path, G } from 'react-native-svg'
import { observer } from 'mobx-react-lite'

const AnimatedG = Animated.createAnimatedComponent(G)
const Valve = observer(({
  X, Y, ContentColor, ValveObj, Scale, Vertical,
}) => (
  <AnimatedG onPress={() => { ValveObj.Toggle() }}>
    <G data-name="Valve" transform={`translate(${X},${Y}) scale(${0.1 * Scale}) rotate(${Vertical ? 90 : 0})`}>
      <G fill="#78b9eb">
        <Path d="M8.533 294.398H76.8v102.4H8.533zM230.4 149.331h51.2v34.133h-51.2z" />
      </G>
      <Path fill="#0a87eb" d="M307.2 149.331v-34.133H204.8v34.133H281.6z" />
      <Path
        d="M384 115.198V98.131c0-9.429-7.637-17.067-17.067-17.067H145.067c-9.429 0-17.067 7.637-17.067 17.067v17.067h256z"
        fill={ValveObj.isOpen ? 'lightgreen' : '#ed1c24'}
      />
      <Path
        d="M187.819 396.798c28.186 37.658 81.553 45.338 119.211 17.152a85.566 85.566 0 0017.152-17.152h42.752v-102.4
        h-42.752a80.108 80.108 0 00-16.981-16.981 80.873 80.873 0 00-8.533-5.632v-54.187h-85.333v54.187a80.873 80.873
        0 00-8.533 5.632 80.108 80.108 0 00-16.981 16.981h-42.752v102.4h42.75z"
        fill={ValveObj.Content !== 0 ? ContentColor : 'white'}
      />
      <G fill="#0a87eb">
        <Path d="M324.267 217.598v-34.134H187.733v34.134h110.934zM110.933 430.931h34.134V251.731h-34.134V413.864zM76.8
         413.864h34.133V277.331H76.8V396.798z"
        />
      </G>
      <Path fill="#78b9eb" d="M435.2 294.398h68.267v102.4H435.2z" />
      <G fill="#0a87eb">
        <Path d="M366.933 430.931h34.134v-179.2h-34.134v145.067zM435.2 413.864V277.331h-34.133v136.533z" />
      </G>
      <Path
        d="M512 285.864h-68.267v-17.067H409.6v-25.6h-51.2v42.667h-30.046a88.606 88.606 0 00-16.034-15.283 88.089 88.089
         0 00-5.12-3.575v-40.875h25.6v-51.2h-42.667v-17.067h25.6v-34.133H384a8.536 8.536 0 008.533-8.533V98.131
         c0-14.14-11.46-25.6-25.6-25.6H145.067c-14.14 0-25.6 11.46-25.6 25.6v17.067a8.536 8.536 0 008.533 8.533h68.267
         v34.133h25.6v17.067H179.2v51.2h25.6v40.875a76.103 76.103 0 00-5.06 3.541 88.604 88.604 0 00-16.094 15.317H153.6
         v-42.667h-51.2v25.6H68.267v17.067H0v119.467h68.267v17.067H102.4v17.067h51.2v-34.133h30.063c32.905 39.953 91.964
         45.662 131.917 12.757a93.832 93.832 0 0012.757-12.757H358.4v34.133h51.2v-17.067h34.133v-17.067H512V285.864
         zm-375.467-179.2v-8.533a8.536 8.536 0 018.533-8.533h221.867a8.536 8.536 0 018.533 8.533v8.533H136.533zm76.8
         17.067h85.333v17.067h-85.333v-17.067zm25.6 34.133h34.133v17.067h-34.133v-17.067zm-42.666 34.134h119.467v17.067
         H196.267v-17.067zm-179.2 196.266v-85.333h51.2v85.333h-51.2zm68.266 17.067V285.864H102.4v119.467H85.333zm51.2
         17.067h-17.067V260.264h17.067v162.134zm187.648-34.134a8.53 8.53 0 00-6.827 3.413c-25.353 33.886-73.378 40.798-107.264
         15.445a76.579 76.579 0 01-15.445-15.445 8.53 8.53 0 00-6.827-3.413H153.6v-85.333h34.219a8.55 8.55 0 006.827-3.473
         76.21 76.21 0 0122.955-20.258 8.544 8.544 0 004.267-7.415v-45.653h68.267v45.653a8.538 8.538 0 004.267 7.415 73.316
         73.316 0 017.68 5.12 71.444 71.444 0 0115.172 15.172 8.55 8.55 0 006.827 3.473H358.4v85.299h-34.219zm51.286
         34.134V260.264h17.067v162.133h-17.067zm34.133-17.067V285.864h17.067v119.467H409.6zm85.333-17.067h-51.2v-85.333h51.2v85.333z"
        fill="#231f20"
      />
    </G>
  </AnimatedG>
))

Valve.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  ContentColor: PropTypes.string.isRequired,
  Scale: PropTypes.number,
  Vertical: PropTypes.bool,

  ValveObj: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    Content: PropTypes.number.isRequired,
    Toggle: PropTypes.func.isRequired,
  }).isRequired,
}

Valve.defaultProps = {
  Scale: 1,
  Vertical: false,
}

export default Valve
