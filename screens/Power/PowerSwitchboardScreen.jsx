/* eslint-disable max-len */
import React from 'react'
import { View } from 'react-native'
import Svg, {
  G, Text, Circle, Line,
} from 'react-native-svg'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

import SimulatorScreen from '../SimulatorScreen'
import Generator from '../../components/svg/Generator'
import Navigate from '../../components/svg/Navigate'
import BigPipe from '../../components/svg/BigPipe'
import PowerSwitch from '../../components/svg/PowerSwitch'
import SimContext from '../../SimulatorContext'
import CstResourceColor from '../../CstColors'

const PowerSwitchboardScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    PowerSys: {
      EmergencyGen, EmergencyBus, MainBus1, MainBreaker1, DsGen1, DsGenBreaker1,
    },
  } = Sim
  // 30 290
  return (
    <SimulatorScreen>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">

          <Text x={820} y={90} fill="black">{EmergencyGen.Name}</Text>
          <Generator X={850} Y={100} Scale={0.4} cb={() => EmergencyGen.Toggle()} />
          <BigPipe x1={800} y1={130} x2={850} y2={130} Size={3} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyGen.isRunning} />
          <BigPipe x1={800} y1={130} x2={750} y2={200} Size={3} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyGen.isRunning} />

          <Text x={820} y={400} fill="black">{EmergencyBus.Name}</Text>
          <Text x={820} y={420} fill="black">{`${EmergencyBus.Voltage} V`}</Text>
          <BigPipe x1={800} y1={300} x2={800} y2={500} Size={3} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyBus.Content !== 0} />

          <BigPipe x1={50} y1={250} x2={745} y2={250} ContentColor={CstResourceColor.Electricity} Size={6} HasContent={!DsGenBreaker1.isOpen && DsGen1.isRunning} />

          <BigPipe x1={50} y1={247} x2={50} y2={305} ContentColor={CstResourceColor.Electricity} Size={6} HasContent={!DsGenBreaker1.isOpen && DsGen1.isRunning} />
          <BigPipe x1={50} y1={345} x2={50} y2={500} ContentColor={CstResourceColor.Electricity} Size={6} HasContent={MainBus1.Content !== 0} />
          <PowerSwitch X={50} Y={300} Vertical isOpen={MainBreaker1.isOpen} cb={() => MainBreaker1.Toggle()} />
          <Text x={80} y={400} fill="black">{MainBus1.Name}</Text>
          <Text x={80} y={420} fill="black">{`${MainBus1.Voltage} V`}</Text>

          <Circle cx={800} cy={300} r={5} stroke="red" strokeWidth={2} />
          <Circle cx={800} cy={200} r={5} stroke="red" strokeWidth={2} />
          <Circle cx={750} cy={250} r={5} stroke="red" strokeWidth={2} />

          {EmergencyGen.isRunning
            && <BigPipe x1={800} y1={200} x2={800} y2={300} Size={3} ContentColor={CstResourceColor.Electricity} HasContent={EmergencyBus.Content !== 0} />}

          {!EmergencyGen.isRunning
            && (
              <G>
                <Line x1={752} y1={250} x2={802} y2={300} stroke={CstResourceColor.Electricity} strokeWidth={2} />
                <Line x1={748} y1={250} x2={798} y2={300} stroke={CstResourceColor.Electricity} strokeWidth={2} />
                { EmergencyBus.Content !== 0
                  && <Line x1={750} y1={250} x2={800} y2={300} stroke={CstResourceColor.Electricity} strokeWidth={2} />}
              </G>
            )}

          <Navigate X={120} Y={5} Width={115} NavTo="PowerGenerator1Screen" NavText={DsGen1.Name} navigation={navigation} />
          <Generator X={100} Y={50} Scale={0.8} cb={() => { navigation.navigate('PowerGenerator1Screen') }} />
          <BigPipe x1={250} y1={120} x2={296} y2={120} ContentColor={CstResourceColor.Electricity} Size={6} HasContent={DsGen1.isRunning} />
          <BigPipe x1={300} y1={117} x2={300} y2={155} ContentColor={CstResourceColor.Electricity} Size={6} HasContent={DsGen1.isRunning} />
          <BigPipe x1={300} y1={165} x2={300} y2={247} ContentColor={CstResourceColor.Electricity} Size={6} HasContent={!DsGenBreaker1.isOpen && DsGen1.isRunning} />
          <PowerSwitch X={300} Y={150} Vertical isOpen={DsGenBreaker1.isOpen} cb={() => DsGenBreaker1.Toggle()} />
        </Svg>
      </View>
    </SimulatorScreen>
  )
})

PowerSwitchboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default PowerSwitchboardScreen
