import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  colorWhite: {
    color: '#ffffff',
  },
  colorOffWhite: {
    color: '#ffffff',
    opacity: 0.5,
  },
  colorBlack: {
    color: '#000000',
  },
  containerPadding: {
    padding: 20,
  },
  fontBold: {
    fontWeight: '600',
  },
  textUpper: {
    textTransform: 'uppercase',
  },
  icon: {
    height: 50,
    width: 50,
  },
  backgroundOrange: {
    backgroundColor: '#F9B023',
  },
  containerRadius: {
    borderRadius: 20,
  },
  secondaryBackground: {
    backgroundColor: '#F8F9FB',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  flexRowWrap: {
    flexWrap: 'wrap',
  },
  listContainer: {
    flex: 1,
    gap: 20,
    justifyContent: 'space-between',
  },
  image: {
    width: '90%',
    height: 'auto',
    maxHeight: 100,
    objectFit: 'contain',
    aspectRatio: 1,
  },
});
