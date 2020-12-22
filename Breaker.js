const { makeAutoObservable } = require('mobx')

module.exports = class Breaker {
  constructor(name) {
    this.Name = name
    this.isOpen = true
    this.RatedFor = 0
    this.Load = 0
    this.Providers = 0
    makeAutoObservable(this)
  }

  // Load > RatedFor
  TestLoad() {
    if (this.Load > this.RatedFor) { this.isOpen = true }
  }

  // Load > Providers
  TestTripped() {
    if (this.Load > this.Providers) { this.isOpen = true }
  }

  Thick() {
    this.TestLoad()
    this.TestTripped()
  }

  Open() {
    this.isOpen = true
  }

  Close() {
    this.isOpen = false
    this.TestLoad()
  }
}
