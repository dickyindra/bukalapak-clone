import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Card, CardItem, Body, Text, Left, Right } from 'native-base'

import styles from '../../../../styles/Styles'

export default class InviteFriends extends Component {

  render() {
    return(
      <View style={[styles.inviteFriendsWrapper],[styles.container]}>
        <Card>
          <CardItem>
            <Image
              source={{uri: 'https://image.ibb.co/n19b0y/invitefriends.png'}}
              style={styles.inviteFriendsIcon}
            />
            <Text style={styles.inviteFriendsText}>Ajak teman dan dapatkan Credits hingga Rp200.000</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={[styles.inviteFriendsText, {marginLeft: 0}]}>Lihat selengkapnya</Text>
            </Left>
            <Right>
              <Text style={[styles.inviteFriendsNext, styles.inviteFriendsText]}>></Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    )
  }

}
