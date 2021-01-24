import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles'

const AlarmModalScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
      <View style={{
        flex: 1,
        margin: 50,
        backgroundColor: 'snow',
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 10,
      }}
      >
        <Text style={styles.title}>Alarm list</Text>
        <Button title="Close" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default AlarmModalScreen
