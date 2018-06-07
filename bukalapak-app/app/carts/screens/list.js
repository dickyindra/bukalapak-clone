import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Icon, Text, Footer, FooterTab, Button, Container } from 'native-base'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Checkbox from 'react-native-check-box'

import BlHeader from '../../components/BlHeader'
import { saveCartDetail, allCarts, deleteCart } from '../actions'

class CartList extends Component {

  componentDidMount() {
    this.props.dispatch(allCarts())
  }

  handleDelete(id) {
    this.props.dispatch(deleteCart(id))
      .then(()=> this.props.dispatch(allCarts()))
  }

  handleBuy(product) {
    this.props.dispatch(saveCartDetail(product))
    this.props.navigation.navigate('Order')
  }

  render() {
    return(
      <Container>
        <BlHeader isManual isTitle="Keranjang Belanja"/>

        <ScrollView style={{backgroundColor: '#F1F1F1'}}>
          <View style={{padding: 10, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
            <Checkbox onClick={()=>alert('test')} style={{marginRight: 15}}/>
            <Text style={{fontSize: 14}}>Pilih Semua Transaksi</Text>
          </View>
          {this.props.carts.results.map((cart)=> (
            <View style={{marginBottom: 20}} key={cart._id}>
              <View style={{padding: 15, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center'}}>
                <Checkbox onClick={()=>alert('test')} style={{marginRight: 15}}/>
                <Text style={{fontSize: 14, borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}}>{cart.seller_name}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}}>
                <View style={{flex: 1,backgroundColor: '#FFF', padding: 20}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={{uri: cart.images[0]}}
                      style={{width: 80, height: 80, marginRight: 20}}
                      resizeMode="stretch"
                    />
                    <View>
                      <Text style={{fontSize: 14}}>{cart.name}</Text>
                      <Text style={{fontSize: 12, color: '#8BC34A'}}>Cicilan 0%</Text>
                    </View>
                  </View>
                </View>
                <View style={{backgroundColor: '#F1F1F1', padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity onPress={()=> this.handleDelete(cart._id)}>
                    <View>
                      <Icon name="trash" style={{fontSize: 24, color: '#888'}}/>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{padding: 15, backgroundColor: '#FFF'}}>
                <Text style={{fontSize: 12, color: '#888'}}>SUBTOTAL</Text>
                <Text style={{fontSize: 14}}>{cart.price}</Text>
                <Text style={{fontSize: 10}}>Belum termasuk biaya kirim dan asuransi</Text>
                <TouchableOpacity style={{marginTop: 15}}>
                  <Text full style={{paddingVertical: 7, fontWeight: 'bold', backgroundColor: '#D71149', fontSize: 14, color: '#FFF', borderRadius: 3, textAlign: 'center'}} onPress={() => this.handleBuy(cart)}>Beli</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <Footer>
          <FooterTab style={{backgroundColor: '#FFFFFF'}} >
            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="apps"/>
              <Text uppercase={false} onPre>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="heart"/>
              <Text uppercase={false}>Favorit</Text>
            </Button>
            <Button vertical active onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon name="cart" active/>
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

const mapStateToProps = (state) => {
  return {
    carts: state.cartReducer
  }
}

export default connect(mapStateToProps)(CartList);
