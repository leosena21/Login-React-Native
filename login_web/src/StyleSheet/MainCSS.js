import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({                                                                                                      
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    margin:10,
    padding:20,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 25,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  newText: {
    color: '#FFFF',
  },
  buttonDigital: {
    height: 40,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#FF3C33',
    borderRadius: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPassword: {
    height: 40,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#64BC05',
    borderRadius: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCad: {
    height: 40,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#F88810',
    borderRadius: 4,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});