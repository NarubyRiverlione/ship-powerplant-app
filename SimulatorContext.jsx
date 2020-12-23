import React from 'react'
import PropTypes from 'prop-types'

const Simulator = require('ship-powerplant-simulator')

const SimulatorContext = React.createContext()
const simulator = new Simulator()

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
