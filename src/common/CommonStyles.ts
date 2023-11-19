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
  colorPrimary: {
    color: '#2B4BA1',
  },
  containerPadding: {
    padding: 20,
  },
  paddingSmall: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
  smallIcon: {
    width: 25,
    height: 25,
    objectFit: 'contain',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '90%',
    height: 'auto',
    maxHeight: 100,
    objectFit: 'contain',
    aspectRatio: 1,
  },
  marginTop: {
    marginTop: 20,
  },
  widthMaxContent: {
    flex: 0,
    alignSelf: 'flex-start',
  },
  paddingButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  paddingTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    width: 90,
  },
  roundedBackground: {
    backgroundColor: '#F8F9FB',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    backgroundColor: '#F8F9FB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listPaddingBottom: {
    paddingBottom: 60,
  },
  wFull: {
    width: '100%',
  },
});
