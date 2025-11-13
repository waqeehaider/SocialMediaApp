import { StyleSheet } from 'react-native';
const GlobalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#edf0f3ff',
    borderRadius: 100,
  },
  messageNotification: {
    backgroundColor: '#F35BAC',
    borderRadius: 100,
    alignItems: 'center',
    width: 10,
    height: 10,
    position: 'absolute',
    right: 12,
    top: 12,
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});
export default GlobalStyle;
