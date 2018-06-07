import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Tabs, Tab, Text } from 'native-base'

import styles from '../../styles/Styles'
import HomeTab from './tabs/HomeTab'

export default class BlHeaderTabs extends Component {

  render() {

    return(
      <Tabs
        initialPage={0}
        locked={true}
        tabBarUnderlineStyle={styles.HeaderTabsUnderline}
      >
        <Tab
          heading="Home"
          tabStyle={styles.HeaderTabStyle}
          activeTabStyle={styles.HeaderActiveTabStyle}
          activeTextStyle={styles.HeaderTabsTextStyle}
          textStyle={styles.HeaderTabsTextStyle}
        >
          <HomeTab navigation={this.props.navigation}/>
        </Tab>
        <Tab
          heading="Kategori"
          tabStyle={styles.HeaderTabStyle}
          activeTabStyle={styles.HeaderActiveTabStyle}
          activeTextStyle={styles.HeaderTabsTextStyle}
          textStyle={styles.HeaderTabsTextStyle}
        >
          <Text>Halaman 2</Text>
        </Tab>
        <Tab
          heading="Brand Resmi"
          tabStyle={styles.HeaderTabStyle}
          activeTabStyle={styles.HeaderActiveTabStyle}
          activeTextStyle={styles.HeaderTabsTextStyle}
          textStyle={styles.HeaderTabsTextStyle}
        >
          <Text>Halaman 2</Text>
        </Tab>
        <Tab
          heading="Langganan"
          tabStyle={styles.HeaderTabStyle}
          activeTabStyle={styles.HeaderActiveTabStyle}
          activeTextStyle={styles.HeaderTabsTextStyle}
          textStyle={styles.HeaderTabsTextStyle}
        >
          <Text>Halaman 2</Text>
        </Tab>
      </Tabs>
    )

  }

}
