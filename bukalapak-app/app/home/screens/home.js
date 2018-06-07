import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Icon } from 'native-base'


import BlHeader from '../../components/BlHeader'
import BlHeaderTabs from '../components/BlHeaderTabs'

export default class HomeScreen extends Component {

  render() {
    return(
      <Container>
        <BlHeader isHome={true}/>
        <BlHeaderTabs navigation={this.props.navigation}/>
        <Footer>
          <FooterTab style={{backgroundColor: '#FFFFFF'}} >
            <Button vertical active onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="apps"/>
              <Text uppercase={false} onPre>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="heart"/>
              <Text uppercase={false}>Favorit</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('CartList')}>
              <Icon name="cart"/>
              <Text uppercase={false}>Keranjang</Text>
            </Button>
            <Button vertical>
              <Icon name="cash"/>
              <Text uppercase={false}>Transaksi</Text>
            </Button>
            <Button vertical>
              <Icon name="md-person"/>
              <Text uppercase={false}>Akun</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
