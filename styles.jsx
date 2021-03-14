import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // VIEWS
  container: {
    flex: 1,
    // flexDirection: 'row',
  },
  partTitleView: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  partContentView: {
    flex: 9,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'azure',
    flexDirection: 'column',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  // TEXT
  title: {
    // flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    // flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    // flex: 1,
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

})

export default styles
