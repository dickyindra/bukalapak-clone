import React, { Component } from 'react'
import { View, ScrollView, Picker, Image } from 'react-native'
import { Text, Icon, Input, Item, InputGroup } from 'native-base'
import Checkbox from 'react-native-check-box'

import { connect } from 'react-redux'

import BlHeader from '../../components/BlHeader'

class Order extends Component {

  state = {
    qty: 1,
    price: this.props.order.datas.price,
    kurir: 'JNE'
  }

  handlePrice(price, qty) {
    this.setState({qty})

    var sum = price * qty
    this.setState({price: sum})
  }

  handlePayment() {
    this.props.navigation.navigate('Payment')
  }

  render() {
    return(
      <View style={{flex: 1,backgroundColor: '#FFF'}}>
        <BlHeader isManual isTitle="Pengiriman"/>
        <View style={{borderTopWidth: 1, borderBottomWidth: 3, borderColor: '#F1F1F1', flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{borderTopWidth: 2, borderTopColor: '#D71149', flex: 1, padding: 10}}>
            <Text style={{color: '#555', fontSize: 12, textAlign: 'center'}}>PENGIRIMAN</Text>
          </View>
          <View style={{flex: 1, padding: 5}}>
            <Text style={{color: '#DDDDDD', fontSize: 12, textAlign: 'center'}}>PEMBAYARAN</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 24, color: '#555'}}>Ke mana barang pesananmu dikirimkan?</Text>
          </View>
          <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}}>
            <View>
              <Text style={{color: '#A1A1A1', marginBottom: 15, fontSize: 12}}>ALAMAT UTAMA</Text>
            </View>
            <View style={{marginBottom: 15}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Banyumas</Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Dicky Indra Asmara</Text>
            </View>
            <View>
              <Text style={{fontSize: 14}}>Jalan Moch. Yamin Gang 9 Karangpucung</Text>
              <Text style={{fontSize: 14}}>Purwokerto Selatan, Banyumas</Text>
              <Text style={{fontSize: 14}}>Jawa Tengah, 53142</Text>
            </View>
            <View>
              <Text style={{fontSize: 14}}>085600284363</Text>
            </View>
          </View>
          <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14}}>Kirim ke alamat lain</Text>
            <Icon name="arrow-forward" style={{fontSize: 14, color: '#888'}}/>
          </View>
          <View style={{backgroundColor: '#F1F1F1', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 30, alignItems: 'center'}}>
            <Checkbox style={{marginRight: 15}}/>
            <Text style={{fontSize: 12}}>Kirim pesanan dengan namamu sebagai pelapak</Text>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#F1F1F1', paddingHorizontal: 20, paddingVertical: 30}}>
            <Text style={{fontSize: 24, color: '#555'}}>Apakah pesananmu sudah benar?</Text>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#F1F1F1', paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>{this.props.order.datas.seller_name}</Text>
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#F1F1F1', paddingHorizontal: 20, paddingVertical: 30, flexDirection: 'row'}}>
            <Image source={{uri: this.props.order.datas.images[0]}}
              style={{width: 80, height: 80}}
              resizeMode="stretch"
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 14}}>{this.props.order.datas.name}</Text>
              <Picker
                selectedValue={this.state.qty}
                style={{ height: 50, width: 100}}
                textStyle={{fontSize: 14}}
                onValueChange={(value)=> this.handlePrice(this.props.order.datas.price, value)}
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
              </Picker>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Rp{this.state.price}</Text>
            </View>
          </View>
          <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}}>
            <View style={{marginBottom: 30}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>JASA PENGIRIMAN</Text>
              <Picker
                selectedValue={this.state.kurir}
                style={{ height: 50, width: 100}}
                onValueChange={(value)=> this.setState({kurir: value})}
              >
                <Picker.Item label="JNE" value="JNE" />
                <Picker.Item label="J&T" value="J&T" />
                <Picker.Item label="Ninja Express" value="Ninja Express" />
                <Picker.Item label="TIKI" value="TIKI" />
              </Picker>
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>CATATAN PELAPAK</Text>
              <Item>
                <InputGroup inputFontSize="12">
                <Input placeholder="Warna, jenis, ukuran" textStyle={{fontSize: 14}}/>
                </InputGroup>
              </Item>
            </View>
          </View>
          <View style={{padding: 20, backgroundColor: '#F1F1F1'}}>
            <Text>Jika pesanan ditolak/tidak ditanggapi pelapak, apakah kamu ingin kami carikan barang pengganti?</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox style={{marginRight: 15}}/>
              <Text style={{fontSize: 12, color: '#888'}}>Ya, carikan saya barang pengganti</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <Text full style={{paddingVertical: 7, fontWeight: 'bold', backgroundColor: '#D71149', fontSize: 14, color: '#FFF', borderRadius: 3, textAlign: 'center'}} onPress={() => this.handlePayment()}>Lanjut ke Pembayaran</Text>
          </View>
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    order: state.cartReducer
  }
}

export default connect(mapStateToProps)(Order);
