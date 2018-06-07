import { StyleSheet, Dimensions } from 'react-native'

const primaryColor = '#D71149'

export default StyleSheet.create({
  Header: {
    backgroundColor: primaryColor,
    paddingTop: 60,
    paddingBottom: 30,
    height: 80
  },
  HeaderTabsUnderline: {
    backgroundColor: primaryColor
  },
  HeaderTabStyle: {
    backgroundColor: '#FFFFFF'
  },
  HeaderActiveTabStyle: {
    backgroundColor: '#FFFFFF'
  },
  HeaderTabsActiveTextStyle: {
    color: '#333333'
  },
  HeaderTabsTextStyle: {
    color: '#888888',
    fontWeight: 'normal',
    fontSize: 14
  },
  swiperDot: {
    backgroundColor: '#DDDDDD',
    width: 10,
    height: 10,
    borderRadius: 54
  },
  swiperActiveDot: {
    backgroundColor: primaryColor,
    width: 10,
    height: 10,
    borderRadius: 54
  },
  swiperPagination: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container: {
    paddingHorizontal: 20
  },
  BlFeaturedWrappper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10
  },
  BlFeaturedText: {
    paddingTop: 20,
    paddingBottom: 20
  },
  BlFeaturedMenu: {
    margin: 5,
    width: Dimensions.get('window').width / 5.7,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 10
  },
  BlFeaturedMenuIcon: {
    width: 25,
    height: 25,
    marginBottom: 10
  },
  BlFeaturedMenuText: {
    fontSize: 11
  },
  inviteFriendsCardItem: {
    color: 'red'
  },
  inviteFriendsWrapper: {
    paddingTop: 20
  },
  inviteFriendsIcon: {
    width: 35,
    height: 30,
    marginRight: 10
  },
  inviteFriendsText: {
    fontSize: 14
  },
  inviteFriendsNext: {
    color: primaryColor
  },
  section: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  flashDealWrapper: {
    marginTop: 20,
    paddingTop: 40,
    paddingBottom: 40
  },
  BlTitleHeader: {
    fontSize: 16
  },
  BlTitleMore: {
    fontSize: 14,
    color: '#888888'
  }
})
