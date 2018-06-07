import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Button } from 'native-base'

import styles from '../../../../styles/Styles'



export default class BlFeatured extends Component {

  state = {
    featuredMenu: [
      {name: 'Bukalapak Credits', imageIcon: 'https://image.ibb.co/bSmrwT/blcredits.png'},
      {name: 'Pulsa Prabayar', imageIcon: 'https://image.ibb.co/bwUpJJ/pulsa.png'},
      {name: 'Listrik Prabayar', imageIcon: 'https://image.ibb.co/hVMmyJ/listrik.png'},
      {name: 'Listrik Pascabayar', imageIcon: 'https://image.ibb.co/dbNtdJ/listrikpasca.png'},
      {name: 'Air PDAM', imageIcon: 'https://image.ibb.co/hhuLsd/air.png'},
      {name: 'Pembeli Prioritas', imageIcon: 'https://image.ibb.co/c3B8Cd/prioritas.png'},
      {name: 'Tiket Kereta', imageIcon: 'https://image.ibb.co/b8hRyJ/kereta.png'},
      {name: 'Tiket Pesawat', imageIcon: 'https://image.ibb.co/gf0Pky/pesawat.png'},
      {name: 'BukaEmas', imageIcon: 'https://image.ibb.co/d4DAQy/emas.png'},
      {name: 'BukaReksa', imageIcon: 'https://image.ibb.co/jbwx5y/reksa.png'},
      {name: 'Redeem Voucher', imageIcon: 'https://image.ibb.co/dDo25y/voucher.png'}
    ]
  }

  render() {
    return(
      <View>
        <View style={[styles.container, styles.BlFeaturedText]}>
          <Text>E-Voucher, tiket, & investasi</Text>
        </View>
        <View style={styles.BlFeaturedWrappper}>
          {this.state.featuredMenu.map((menu, i)=> (
          <Button
            key={i}
            transparent
            style={styles.BlFeaturedMenu}
          >
            <Image
              source={{uri: menu.imageIcon}}
              style={styles.BlFeaturedMenuIcon}
            />
            <Text style={styles.BlFeaturedMenuText}>{menu.name}</Text>
          </Button>
          ))}
        </View>
      </View>
    )
  }

}
