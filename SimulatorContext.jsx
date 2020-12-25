import React from 'react'
import PropTypes from 'prop-types'

const Simulator = require('ship-powerplant-simulator')

const SimulatorContext = React.createContext()
const simulator = new Simulator()

// TODO workaround no lubrication nor cooling
simulator.PowerSys.DsGen1.HasCooling = true
simulator.PowerSys.DsGen1.HasLubrication = true

export const SimulatorProvider = ({ children }) => (
  <SimulatorContext.Provider value={simulator}>
    { children}
  </SimulatorContext.Provider>
)

SimulatorProvider.propTypes = {
  children: PropTypes.array.isRequired,
}

const SimContext = () => React.useContext(SimulatorContext)
export default SimContext