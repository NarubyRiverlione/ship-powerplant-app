import React from 'react'
import Breaker from './Breaker'

export class MiniPowerSystem {
  constructor() {
    this.ShoreBreaker = new Breaker('shore breaker')
    this.ShoreBreaker.RatedFor = 100
  }
}

const SimulatorContext = React.createContext()

export const SimulatorProvider = ({ children }) =>
// const createNewSim = () => makeAutoObservable(new MiniPowerSystem())

(
  <SimulatorContext.Provider value={new MiniPowerSystem()}>
    {children}
  </SimulatorContext.Provider>
)

export const useSim = () => React.useContext(SimulatorContext)
