import React from 'react'
import { G } from 'react-native-svg'
import PropTypes from 'prop-types'
import Generator from './Generator'
import Motor from './Motor'

const DieselGenerator = ({
  X, Y, DsGen,
}) => (
  <G>
    <Motor X={X} Y={Y} isRunning={DsGen.isRunning} cb={() => DsGen.Toggle()} />
    <Generator X={X - 190} Y={Y + 30} isRunning={DsGen.isRunning} />
  </G>
)

DieselGenerator.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
  DsGen: PropTypes.object.isRequired,
}

export default DieselGenerator
