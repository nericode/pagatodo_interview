import {StyleSheet} from 'react-native';

const bankStyles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  wrapperRound: {
    marginRight: 10,
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // Support shadow to Android & iOS
    shadowColor: '#4C5BDF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  imageRounded: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '5%',
    marginTop: '5%',
  },
});

export default bankStyles;
