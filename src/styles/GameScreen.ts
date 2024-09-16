import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  cupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 80,
  },
  cupWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cup: {
    width: 80,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cupImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  ball: {
    marginLeft: 25,
    marginBottom: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    alignItems: 'center',
    marginTop: 140,
  },
  viewImage: {
    paddingBottom: 90,
  },
  resultImage: {
    marginBottom: 20,
  },
});
export default styles;
