import React from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'
import SimContext from '../SimulatorContext'

const StartConditionButton = ({ title, startCon, cb }) => (
  <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
    <Button
      onPress={() => cb(startCon)}
      title={title}
    />
  </View>
)
StartConditionButton.propTypes = {
  title: PropTypes.string.isRequired,
  startCon: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
}

const StartConditionsScreen = ({ navigation }) => {
  const Sim = SimContext()
  const [startConditions, setStartConditions] = React.useState()

  // get list of start conditions from Simulator
  React.useEffect(() => {
    setStartConditions(Sim.GetStartConditions())
  }, [])

  // set simulator to selected start conditions & navigate to tabbar
  const setSimConditions = (condition) => {
    Sim.SetStartConditions(condition)
    navigation.navigate('RootStack')
  }
  return (
    <View style={styles.container}>
      <View style={styles.partTitleView}>
        <Text style={styles.title}>Start conditions</Text>
      </View>
      <View style={styles.partContentView}>
        <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
          <Button
            onPress={() => navigation.navigate('RootStack')}
            title="Cold & Dark"
          />
        </View>

        {startConditions
          && Object.keys(startConditions).map((keyStartCond) => (
            <StartConditionButton
              cb={setSimConditions}
              startCon={keyStartCond}
              title={startConditions[keyStartCond]}
              key={keyStartCond}
            />
          ))}
      </View>
    </View>
  )
}

StartConditionsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default StartConditionsScreen
