/* eslint-disable max-len */
import * as React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Svg, {
  Text, Line, TSpan, Rect,
} from 'react-native-svg'

import { observer } from 'mobx-react-lite'
import Valve from '../../components/svg/Valve'
import Pipe from '../../components/svg/Pipe'
import Pump from '../../components/svg/Pump'
import Cooler from '../../components/svg/Cooler'
import SimulatorScreen from '../SimulatorScreen'
import SimContext from '../../SimulatorContext'
import CstResourceColor from '../../constants/CstColors'
import { NavScreen } from '../../constants/CstNav'

const CoolantSeaWaterSystemScreen = observer(({ navigation }) => {
  const Sim = SimContext()
  const {
    CoolingSys: {
      SeaChestLowSuctionIntakeValve, SeaChestHighSuctionIntakeValve,
      OverboardDumpValve, SuctionPump1, SuctionPump2, AuxPump,
      SteamCondensor, FwCoolerStartAir, FwCoolerDsGen,
    },
  } = Sim

  return (
    <SimulatorScreen>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Svg width="100%" height="100%">
          <Rect x={5} y={10} width={15} height={255} stroke="black" strokeWidth={5} fill="gray" />
          <Rect x={0} y={267} width={50} height={80} fill="darkblue" />
          <Rect x={0} y={200} width={3} height={500} fill="darkblue" />
          <Rect x={5} y={280} width={15} height={15} stroke="black" strokeWidth={5} fill="gray" />
          <Rect x={5} y={320} width={15} height={15} stroke="black" strokeWidth={5} fill="gray" />
          <Rect x={5} y={348} width={15} height={125} stroke="black" strokeWidth={5} fill="gray" />

          <Rect x={20} y={262} width={30} height={5} stroke="black" strokeWidth={2} />
          <Rect x={50} y={262} width={5} height={90} stroke="black" strokeWidth={2} />
          <Rect x={20} y={347} width={30} height={5} stroke="black" strokeWidth={2} />

          <Rect x={70} y={550} width={900} height={15} stroke="black" strokeWidth={5} fill="gray" />
          <Rect x={0} y={567} width={950} height={15} fill="darkblue" />

          <Rect x={0} y={475} width={70} height={100} fill="darkblue" />
          <Rect x={15} y={490} width={15} height={15} stroke="black" strokeWidth={5} fill="gray" />
          <Rect x={35} y={530} width={15} height={15} stroke="black" strokeWidth={5} fill="gray" />
          <Rect x={20} y={470} width={50} height={5} stroke="black" strokeWidth={2} />
          <Rect x={70} y={470} width={5} height={80} stroke="black" strokeWidth={2} />

          <Pipe x1={50} y1={335} x2={100} y2={335} ContentColor={CstResourceColor.SeaWater} HasContent />
          <Text fill="black">
            <TSpan x={40} y={250}>{SeaChestHighSuctionIntakeValve.Name.replace('intake valve', '')}</TSpan>
            <TSpan x={100} y={300}>Intake valve</TSpan>
          </Text>
          <Valve
            X={100}
            Y={300}
            ContentColor={CstResourceColor.SeaWater}
            ValveObj={SeaChestLowSuctionIntakeValve}
          />
          <Pipe x1={70} y1={535} x2={120} y2={535} ContentColor={CstResourceColor.SeaWater} HasContent />
          <Text fill="black">
            <TSpan x={40} y={450}>{SeaChestLowSuctionIntakeValve.Name.replace('intake valve', '')}</TSpan>
            <TSpan x={100} y={500}>Intake valve</TSpan>
          </Text>
          <Valve
            X={120}
            Y={500}
            ContentColor={CstResourceColor.SeaWater}
            ValveObj={SeaChestHighSuctionIntakeValve}
          />

          <Pipe x1={150} y1={335} x2={184} y2={335} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestLowSuctionIntakeValve.isOpen} />
          <Pipe x1={186} y1={331} x2={194} y2={506} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestLowSuctionIntakeValve.isOpen} />
          <Line x1={182} y1={332} x2={182} y2={338} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={170} y1={535} x2={184} y2={535} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestHighSuctionIntakeValve.isOpen} />
          <Pipe x1={186} y1={506} x2={194} y2={539} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestHighSuctionIntakeValve.isOpen} />
          <Line x1={182} y1={532} x2={182} y2={538} strokeWidth={2} stroke={SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={182} y1={506} x2={892} y2={506} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <Line x1={183} y1={496} x2={189} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={183} y1={516} x2={189} y2={516} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={337} y1={450} x2={337} y2={496} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <Pipe x1={487} y1={450} x2={487} y2={496} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <Pipe x1={886} y1={430} x2={886} y2={496} ContentColor={CstResourceColor.SeaWater} Size={12} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <Line x1={328} y1={496} x2={346} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={478} y1={496} x2={496} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={881} y1={496} x2={891} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <Pump X={250} Y={350} isRunning={SuctionPump1.isRunning} cb={() => SuctionPump1.Toggle()} />
          <Text x={220} y={360} fill="black">{SuctionPump1.Name.replace('Sea water', '')}</Text>
          <Pump X={400} Y={350} isRunning={SuctionPump2.isRunning} cb={() => SuctionPump2.Toggle()} />
          <Text x={370} y={360} fill="black">{SuctionPump2.Name.replace('Sea water', '')}</Text>
          <Pump X={820} Y={360} Scale={0.75} isRunning={AuxPump.isRunning} cb={() => AuxPump.Toggle()} />
          <Text x={730} y={370} fill="black">{AuxPump.Name.replace('Sea water', '')}</Text>

          <Pipe x1={327} y1={300} x2={884} y2={300} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <Pipe x1={487} y1={310} x2={487} y2={350} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump2.isRunning} />
          <Line x1={478} y1={310} x2={496} y2={310} strokeWidth={2} stroke={SuctionPump2.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={337} y1={310} x2={337} y2={350} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump1.isRunning} />
          <Line x1={328} y1={310} x2={346} y2={310} strokeWidth={2} stroke={SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={359} y1={250} x2={359} y2={290} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Line x1={355} y1={290} x2={363} y2={290} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={589} y1={250} x2={589} y2={290} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Line x1={585} y1={290} x2={593} y2={290} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Pipe x1={889} y1={250} x2={889} y2={310} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={AuxPump.isRunning || SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Pipe x1={889} y1={310} x2={889} y2={360} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={AuxPump.isRunning} />
          <Line x1={885} y1={310} x2={893} y2={310} strokeWidth={2} stroke={AuxPump.isRunning || SuctionPump2.isRunning || SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={884} y1={291} x2={884} y2={309} strokeWidth={2} stroke={AuxPump.isRunning || SuctionPump2.isRunning || SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Line x1={356} y1={250} x2={364} y2={250} strokeWidth={2} stroke={SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Text fill="black">
            <TSpan x={690} y={160}>Fresh water cooler</TSpan>
            <TSpan x={690} y={170}>{FwCoolerDsGen.Name.replace('Fresh water cooler ', '')}</TSpan>
          </Text>
          <Cooler
            X={800}
            Y={150}
            HasCooling={FwCoolerDsGen.hasCooling}
            IsCooling={FwCoolerDsGen.isCooling}
            cb={() => navigation.navigate(NavScreen.Coolant.FreshWaterSystemScreen)}
          />

          <Text fill="black">
            <TSpan x={390} y={160}>Fresh water cooler</TSpan>
            <TSpan x={390} y={170}>{FwCoolerStartAir.Name.replace('Fresh water cooler ', '')}</TSpan>
          </Text>
          <Cooler
            X={500}
            Y={150}
            HasCooling={FwCoolerStartAir.hasCooling}
            IsCooling={FwCoolerStartAir.isCooling}
            cb={() => navigation.navigate(NavScreen.Coolant.FreshWaterSystemScreen)}
          />

          <Text x={170} y={160} fill="black">{SteamCondensor.Name}</Text>
          <Cooler
            X={270}
            Y={150}
            HasCooling={SteamCondensor.hasCooling}
            IsCooling={SteamCondensor.isCooling}
            cb={() => navigation.navigate(NavScreen.Coolant.FreshWaterSystemScreen)}
          />

          <Pipe x1={295} y1={54} x2={295} y2={152} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Pipe x1={525} y1={54} x2={525} y2={152} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Pipe x1={820} y1={54} x2={820} y2={152} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />

          <Pipe x1={250} y1={50} x2={824} y2={50} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />

          <Line x1={292} y1={54} x2={298} y2={54} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={522} y1={54} x2={528} y2={54} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={817} y1={54} x2={823} y2={54} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Text x={140} y={80} fontSize={12} fill="black">{OverboardDumpValve.Name}</Text>
          <Valve
            X={200}
            Y={16}
            ContentColor={CstResourceColor.SeaWater}
            ValveObj={OverboardDumpValve}
          />

          <Pipe x1={0} y1={50} x2={200} y2={50} ContentColor={CstResourceColor.SeaWater} HasContent={OverboardDumpValve.isOpen && (SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning)} />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

CoolantSeaWaterSystemScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CoolantSeaWaterSystemScreen
