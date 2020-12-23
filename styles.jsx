import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // VIEWS
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    flex: 9,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'azure',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  // TEXT
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // paddingTop: 10,
    // marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
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
