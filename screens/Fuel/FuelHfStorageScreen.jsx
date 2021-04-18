import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react-lite'
import Svg, { Text, Line, Rect } from 'react-native-svg'

import SimContext from '../../SimulatorContext'
import SimulatorScreen from '../SimulatorScreen'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import Navigate from '../../components/svg/Navigate'

import SmallHeatedTankValves from '../../components/svg/SmallHeatedTankValves'
import Arrow from '../../components/svg/Arrow'

import CstResourceColor from '../../constants/CstColors'
import { NavScreen, NavStack } from '../../constants/CstNav'
import Pump from '../../components/svg/Pump'

const FuelHfStorageScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    HfFuelSys: {
      HfShoreValve,
      HfForeBunker, HfAftBunker, HfPortBunker, HfStarboardBunker,
      HfPump, HfPumpOutletValve,
      HfSettelingTank, HasOutlet,
    },
  } = Sim
  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Pipe
            x1={10}
            y1={200}
            x2={40}
            y2={200}
            ContentColor={CstResourceColor.HeavyFuel}
            HasContent
          />
          <Arrow X={20} Y={180} />

          <Valve
            X={40}
            Y={165}
            ContentColor={CstResourceColor.HeavyFuel}
            ValveObj={HfShoreValve}
          />
          <Text x={10} y={220} fill="black" fontSize={12}>{HfShoreValve.Name}</Text>

          <SmallHeatedTankValves
            X={350}
            Y={50}
            Name={HfForeBunker.Tank.Name}
            HeatedTankSys={HfForeBunker}
            ContentColor={CstResourceColor.HeavyFuel}
            TankColor="gray"
          />
          <SmallHeatedTankValves
            X={400}
            Y={300}
            Name={HfAftBunker.Tank.Name}
            HeatedTankSys={HfAftBunker}
            ContentColor={CstResourceColor.HeavyFuel}
            TankColor="gray"
            Left
          />
          <SmallHeatedTankValves
            X={50}
            Y={300}
            Name={HfPortBunker.Tank.Name}
            HeatedTankSys={HfPortBunker}
            ContentColor={CstResourceColor.HeavyFuel}
            TankColor="gray"
          />
          <SmallHeatedTankValves
            X={800}
            Y={300}
            Name={HfStarboardBunker.Tank.Name}
            HeatedTankSys={HfStarboardBunker}
            ContentColor={CstResourceColor.HeavyFuel}
            TankColor="gray"
            Left
          />

          <Pipe x1={46} y1={300} x2={804} y2={300} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Pipe x1={50} y1={304} x2={50} y2={353} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Pipe x1={400} y1={304} x2={400} y2={353} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Pipe x1={800} y1={304} x2={800} y2={353} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Pipe x1={300} y1={96} x2={300} y2={296} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Pipe x1={304} y1={100} x2={354} y2={100} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Pipe x1={90} y1={200} x2={296} y2={200} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfShoreValve.Content !== 0} />
          <Arrow X={280} Y={180} Up />
          <Arrow X={290} Y={220} Down />

          <Arrow X={700} Y={220} />
          <Arrow X={360} Y={530} />
          <Arrow X={710} Y={530} />
          <Arrow X={1080} Y={530} Up />
          <Arrow X={1080} Y={440} Up />

          <Pipe x1={342} y1={550} x2={1104} y2={550} ContentColor={CstResourceColor.HeavyFuel} HasContent={HasOutlet} />
          <Pipe x1={346} y1={464} x2={346} y2={546} ContentColor={CstResourceColor.HeavyFuel} HasContent={HasOutlet} />
          <Pipe x1={700} y1={464} x2={700} y2={546} ContentColor={CstResourceColor.HeavyFuel} HasContent={HasOutlet} />
          <Pipe x1={1100} y1={214} x2={1100} y2={546} ContentColor={CstResourceColor.HeavyFuel} HasContent={HasOutlet} />
          <Pipe x1={650} y1={210} x2={1104} y2={210} ContentColor={CstResourceColor.HeavyFuel} HasContent={HasOutlet} />

          <Pipe x1={740} y1={170} x2={740} y2={210} ContentColor={CstResourceColor.HeavyFuel} HasContent={HasOutlet} />
          <Pipe x1={740} y1={46} x2={740} y2={70} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfPump.Content !== 0} />
          <Pipe x1={744} y1={50} x2={760} y2={50} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfPump.Content !== 0} />
          <Pipe x1={810} y1={50} x2={855} y2={50} ContentColor={CstResourceColor.HeavyFuel} HasContent={HfPumpOutletValve.Content !== 0} />
          <Valve X={760} Y={15} ValveObj={HfPumpOutletValve} ContentColor={CstResourceColor.HeavyFuel} />

          <Pipe x1={690} y1={5} x2={690} y2={100} Size={4} ContentColor={CstResourceColor.Electricity} HasContent={HfPump.Bus.Voltage !== 0} />
          <Navigate X={600} Y={20} NavText={HfPump.Bus.Name} Width={80} NavStack={NavStack.Power} NavScreen={NavScreen.Power.SwitchboardScreen} navigation={navigation} />
          <Pump X={650} Y={70} cb={() => { HfPump.Toggle() }} isRunning={HfPump.isRunning} />

          <SmallHeatedTankValves
            X={850}
            Y={0}
            Name={HfSettelingTank.Tank.Name}
            HeatedTankSys={HfSettelingTank}
            ContentColor={CstResourceColor.HeavyFuel}
            TankColor="gray"
            Left
          />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

export default FuelHfStorageScreen
