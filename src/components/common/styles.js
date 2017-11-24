import { StyleSheet , Dimensions } from 'react-native';
import colors from '../../helpers/colors';

const window = Dimensions.get('window');
export const CHEVRON_SIZE = 25;
export const ICON_SIZE = 25;

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryText,
  },
  calories: {
    fontSize: 13,
    color: colors.subtleText,
  },
  separator: {},
  chevronContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  chevron: {
    alignSelf: 'flex-end',
    fontSize:20,
  },
  image: {
    width: window.width / 3,
    height: window.width / 3,
    borderRadius: window.width / 6,
  },
  textTitle: {
    fontSize: 22,
    color: colors.primaryText,
    marginTop: 10,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: window.width / 3,
    height: window.width / 3,
    borderRadius: window.width / 6,
  },
  name: {
    fontSize: 22,
    color: colors.primaryText,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    color: colors.primaryText,
    marginTop: 10,
  },
  actionContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    backgroundColor: colors.grayBackground,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  actionInfo: {
    flexDirection: 'column',
  },
  actionIcons: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginLeft: 13,
  },
  actionLabel: {
    color: colors.subtleText,
    fontSize: 12,
    marginBottom: 3,
  },
  actionBody: {
    fontSize: 16,
    color: colors.primaryText,
    marginBottom: 5,
  },
  infoContainer: {
    paddingVertical: 15,
  },
  textValue:{
    height: 20,
    width:40,
    borderColor: 'gray',
    borderWidth: 1,

  },
  chevronContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexDirection: 'row'
  },
  newChevron: {
    alignSelf: 'flex-end',
    marginLeft: 10
  },
  logo: {
    width: window.width / 2.5,
    height: window.width / 2.5,
  },
  container: {
    backgroundColor: 'white',
    flex:1
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 100
  },
  cardContainer: {
    marginTop: 100
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center'
  }
});
