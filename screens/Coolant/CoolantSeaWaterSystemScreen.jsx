/* eslint-disable max-len */
import * as React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Svg, {
  Text, Line, TSpan, Rect, Polygon,
} from 'react-native-svg'

import { observer } from 'mobx-react-lite'
import BigValve from '../../components/svg/BigValve'
import BigPipe from '../../components/svg/BigPipe'
import Pump from '../../components/svg/Pump'
import Cooler from '../../components/svg/Cooler'
import SimulatorScreen from '../SimulatorScreen'
import SimContext from '../../SimulatorContext'
import CstResourceColor from '../../CstColors'

const CoolantSeaWaterSystemScreen = observer(() => {
  const Sim = SimContext()
  const {
    CoolingSys: {
      SeaChestLowSuctionIntakeValve, SeaChestHighSuctionIntakeValve,
      OverboardDumpValve, SuctionPump1, SuctionPump2, AuxPump,
      SteamCondensor, FwCoolerDsGen2, FwCoolerDsGen1,
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

          <BigPipe x1={50} y1={335} x2={100} y2={335} ContentColor={CstResourceColor.SeaWater} HasContent />
          <Text fill="black">
            <TSpan x={40} y={250}>{SeaChestHighSuctionIntakeValve.Name.replace('intake valve', '')}</TSpan>
            <TSpan x={100} y={300}>Intake valve</TSpan>
          </Text>
          <BigValve
            X={100}
            Y={300}
            isOpen={SeaChestLowSuctionIntakeValve.isOpen}
            cb={() => SeaChestLowSuctionIntakeValve.Toggle()}
          />
          <BigPipe x1={70} y1={535} x2={120} y2={535} ContentColor={CstResourceColor.SeaWater} HasContent />
          <Text fill="black">
            <TSpan x={40} y={450}>{SeaChestLowSuctionIntakeValve.Name.replace('intake valve', '')}</TSpan>
            <TSpan x={100} y={500}>Intake valve</TSpan>
          </Text>
          <BigValve
            X={120}
            Y={500}
            isOpen={SeaChestHighSuctionIntakeValve.isOpen}
            cb={() => SeaChestHighSuctionIntakeValve.Toggle()}
          />

          <BigPipe x1={150} y1={335} x2={184} y2={335} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestLowSuctionIntakeValve.isOpen} />
          <BigPipe x1={186} y1={331} x2={194} y2={506} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestLowSuctionIntakeValve.isOpen} />
          <Line x1={182} y1={332} x2={182} y2={338} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={170} y1={535} x2={184} y2={535} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestHighSuctionIntakeValve.isOpen} />
          <BigPipe x1={186} y1={506} x2={194} y2={539} ContentColor={CstResourceColor.SeaWater} HasContent={SeaChestHighSuctionIntakeValve.isOpen} />
          <Line x1={182} y1={532} x2={182} y2={538} strokeWidth={2} stroke={SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={182} y1={506} x2={672} y2={506} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <Line x1={183} y1={496} x2={189} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={183} y1={516} x2={189} y2={516} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={337} y1={450} x2={337} y2={496} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <BigPipe x1={487} y1={450} x2={487} y2={496} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <BigPipe x1={666} y1={430} x2={666} y2={496} ContentColor={CstResourceColor.SeaWater} Size={12} HasContent={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen} />
          <Line x1={328} y1={496} x2={346} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={478} y1={496} x2={496} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={661} y1={496} x2={671} y2={496} strokeWidth={2} stroke={SeaChestLowSuctionIntakeValve.isOpen || SeaChestHighSuctionIntakeValve.isOpen ? CstResourceColor.SeaWater : 'white'} />

          <Pump X={250} Y={350} isRunning={SuctionPump1.isRunning} cb={() => SuctionPump1.Toggle()} />
          <Text x={220} y={360} fill="black">{SuctionPump1.Name.replace('Sea water', '')}</Text>
          <Pump X={400} Y={350} isRunning={SuctionPump2.isRunning} cb={() => SuctionPump2.Toggle()} />
          <Text x={370} y={360} fill="black">{SuctionPump2.Name.replace('Sea water', '')}</Text>
          <Pump X={600} Y={360} Scale={0.75} isRunning={AuxPump.isRunning} cb={() => AuxPump.Toggle()} />
          <Text x={510} y={370} fill="black">{AuxPump.Name.replace('Sea water', '')}</Text>

          <BigPipe x1={327} y1={300} x2={673} y2={300} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={673} y1={300} x2={894} y2={300} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <BigPipe x1={666} y1={310} x2={666} y2={360} ContentColor={CstResourceColor.SeaWater} Size={12} HasContent={AuxPump.isRunning} />
          <Line x1={661} y1={310} x2={671} y2={310} strokeWidth={2} stroke={AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={487} y1={310} x2={487} y2={350} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump2.isRunning} />
          <Line x1={478} y1={310} x2={496} y2={310} strokeWidth={2} stroke={SuctionPump2.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={337} y1={310} x2={337} y2={350} ContentColor={CstResourceColor.SeaWater} Size={20} HasContent={SuctionPump1.isRunning} />
          <Line x1={328} y1={310} x2={346} y2={310} strokeWidth={2} stroke={SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={359} y1={250} x2={359} y2={290} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <Line x1={355} y1={290} x2={363} y2={290} strokeWidth={2} stroke={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={589} y1={250} x2={589} y2={290} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <Line x1={585} y1={290} x2={593} y2={290} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <BigPipe x1={889} y1={250} x2={889} y2={290} Size={10} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />
          <Line x1={885} y1={290} x2={893} y2={290} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Line x1={356} y1={250} x2={364} y2={250} strokeWidth={2} stroke={SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Text fill="black">
            <TSpan x={160} y={200}>Fresh water cooler</TSpan>
            <TSpan x={160} y={220}>{FwCoolerDsGen1.Name.replace('Fresh water cooler', '')}</TSpan>
          </Text>
          <Cooler X={270} Y={150} />

          <Text fill="black">
            <TSpan x={390} y={200}>Fresh water cooler</TSpan>
            <TSpan x={390} y={220}>{FwCoolerDsGen2.Name.replace('Fresh water cooler', '')}</TSpan>
          </Text>
          <Cooler X={500} Y={150} />

          <Text x={700} y={200} fill="black">{SteamCondensor.Name}</Text>
          <Cooler X={800} Y={150} />

          <BigPipe x1={295} y1={54} x2={295} y2={152} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={525} y1={54} x2={525} y2={152} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={820} y1={54} x2={820} y2={152} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <BigPipe x1={250} y1={50} x2={530} y2={50} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning || AuxPump.isRunning} />
          <BigPipe x1={530} y1={50} x2={824} y2={50} ContentColor={CstResourceColor.SeaWater} HasContent={SuctionPump1.isRunning || SuctionPump2.isRunning} />

          <Line x1={292} y1={54} x2={298} y2={54} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={522} y1={54} x2={528} y2={54} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning ? CstResourceColor.SeaWater : 'white'} />
          <Line x1={817} y1={54} x2={823} y2={54} strokeWidth={2} stroke={SuctionPump2.isRunning || SuctionPump1.isRunning ? CstResourceColor.SeaWater : 'white'} />

          <Text x={140} y={80} fontSize={12} fill="black">{OverboardDumpValve.Name}</Text>
          <BigValve
            X={200}
            Y={16}
            isOpen={OverboardDumpValve.isOpen}
            cb={() => OverboardDumpValve.Toggle()}
            OpenColor={CstResourceColor.SeaWater}
          />

          <BigPipe x1={0} y1={50} x2={200} y2={50} ContentColor={CstResourceColor.SeaWater} HasContent={OverboardDumpValve.isOpen && (SuctionPump2.isRunning || SuctionPump1.isRunning || AuxPump.isRunning)} />

        </Svg>
      </View>
    </SimulatorScreen>
  )
})

CoolantSeaWaterSystemScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CoolantSeaWaterSystemScreen
