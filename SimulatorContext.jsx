import React from 'react'
import PropTypes from 'prop-types'

import Simulator from 'ship-powerplant-simulator'

const SimulatorContext = React.createContext()
const simulator = new Simulator(true)

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
