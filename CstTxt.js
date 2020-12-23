const CstTxt = {
  Open: 'open',
  Closed: 'closed',
  Closing: 'Close',
  Opening: 'Open',

  Starting: 'Start',
  Stopping: 'Stop',
  Running: 'running',
  Stopped: 'not running',
}

export const BtnStartStopTxt = (isRunning) => (isRunning ? CstTxt.Stopping : CstTxt.Starting)
export const BtnOpenCloseTxt = (isOpen) => (isOpen ? CstTxt.Closing : CstTxt.Opening)

export const TxtOpenClose = (isOpen) => (isOpen ? CstTxt.Open : CstTxt.Closed)
export const TxtRunningStopped = (isRunning) => (isRunning ? CstTxt.Running : CstTxt.Stopped)

export default CstTxt
