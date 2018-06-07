import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Icon, Input, Item, InputGroup, Radio } from 'native-base'
import Checkbox from 'react-native-check-box'

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import { connect } from 'react-redux'

import BlHeader from '../../components/BlHeader'

const CONTENT = [
  {
    title: 'BukaDompet',
    content: 'bukadompet'
  },
  {
    title: 'Transfer',
    content: 'transfer'
  },
  {
    title: 'DANA',
    content: 'dana'
  },
  {
    title: 'BCA KlikPay',
    content: 'bcaklikpay'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)'
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  activeSelector: {
    fontWeight: 'bold'
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10
  }
});

class Payment extends Component {

  constructor() {
    super();

    this.state = {
      activeSection: false,
      collapsed: true,
      radioSelect: 'transfer'
    }
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[{paddingHorizontal: 20},isActive ? {backgroundColor: '#FFF'} : {backgroundColor: '#FDFDFD'}]}
        transition="backgroundColor"
      >
        <View style={{flex: 1, flexDirection: 'row', paddingVertical: 20, borderBottomWidth: 1, borderColor: '#DDDDDD'}}>
          <Radio
            selected={isActive}
            style={{marginRight: 10}}
            color="#555"
            selectedColor="#D71149"
          />
          <Text>{section.title}</Text>
        </View>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? {backgroundColor: '#FFF'} : {backgroundColor: '#FDFDFD'}]}
        transition="backgroundColor"
      >
        <Animatable.View animation={isActive ? 'fadeInDown' : undefined}>
          {section.content === 'bukadompet' ? (
            <View>
              <Text style={{fontSize: 14, marginBottom: 10}}>Saldo BukaDompetmu <Text style={{fontSize: 14, color: '#8BC34A'}}>Rp0</Text></Text>
              <Text style={{fontSize: 14, marginBottom: 10}}>Saldo kamu <Text style={{fontSize: 14, color: '#D71149'}}>tidak mencukupi</Text> untuk membayar transaksi ini. Silahkan pilih metode pembayaran lainnya.</Text>
              <Text style={{fontSize: 14, marginBottom: 10}}>Bayar lebih mudah dan cepat dengan menggunakan BukaDompet</Text>
            </View>
          ) : undefined}

          {section.content === 'transfer' ? (
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#D71149', marginBottom: 15}}>Baca Ketentuan</Text>
              <Text style={{fontSize: 14}}>{'\u2022'} Total belanja Anda <Text style={{fontSize: 14, color: '#D71149'}}>belum termasuk</Text> kode pembayaran.</Text>
              <Text style={{fontSize: 14}}>{'\u2022'} Transaksi dengan menggunakan metode pembayaran transfer akan ditambahkan kode pembayaran.</Text>
              <Text style={{fontSize: 14}}>{'\u2022'} Pembayaran dengan angka yang tidak tepat akan menyebabkan verifikasi pembayaran menjadi terhambat.</Text>
            </View>
          ) : undefined}

          {section.content === 'dana' ? (
            <View>
              <Text style={{fontSize: 14}}>Ketentuan pembayaran DANA:</Text>
              <Text style={{fontSize: 14}}>{'\u2022'} Pembayaran akan diproses di halaman DANA.</Text>
              <Text style={{fontSize: 14}}>{'\u2022'} Metode pembayaran ini menggunakan <Text style={{fontSize: 14, fontWeight: 'bold'}}>one time password (OTP)</Text> melalui SMS dan <Text style={{fontSize: 14, fontWeight: 'bold'}}>PIN</Text> untuk menjamin keamanan pembayaranmu.</Text>
              <Text style={{fontSize: 14}}>{'\u2022'} DANA menyediakan alternatif metode pembayaran <Text style={{fontSize: 14, fontWeight: 'bold'}}>transfer virtual account</Text> dan <Text style={{fontSize: 14, fontWeight: 'bold'}}>kartu kredit</Text>, jika <Text style={{fontSize: 14, fontWeight: 'bold'}}>saldo</Text> kamu <Text style={{fontSize: 14, fontWeight: 'bold'}}>tidak mencukupi</Text>.</Text>
            </View>
          ) : undefined}

          {section.content === 'bcaklikpay' ? (
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#D71149', marginBottom: 15}}>Baca Ketentuan</Text>
              <Text style={{fontSize: 14}}>1. Untuk pembayaran tunai, Anda harus memiliki fasilitas KlikBCA Individu.</Text>
              <Text style={{fontSize: 14}}>2. Nilai minimum per transaksi yang diperbolehkan adalah Rp10.000</Text>
              <Text style={{fontSize: 14}}>3. Nilai maksimum per transaksi yang diperbolehkan adalah Rp100.000.000</Text>
            </View>
          ) : undefined}
        </Animatable.View>
      </Animatable.View>
    );
  }


  render() {
    return(
      <View style={{flex: 1,backgroundColor: '#FFF'}}>
        <BlHeader isManual isTitle="Pembayaran"/>
        <View style={{borderTopWidth: 1, borderBottomWidth: 3, borderColor: '#F1F1F1', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="checkmark" style={{fontSize: 16, marginRight: 5, color: '#D71149'}}/>
            <Text style={{color: '#DDD', fontSize: 12, textAlign: 'center'}}>PENGIRIMAN</Text>
          </View>
          <View style={{borderTopWidth: 2, borderTopColor: '#D71149', flex: 1, padding: 10}}>
            <Text style={{color: '#555', fontSize: 12, textAlign: 'center'}}>PEMBAYARAN</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{padding: 20, paddingBottom: 50}}>
            <Text style={{fontSize: 24, color: '#555'}}>Metode pembayaran apa yang ingin dipakai?</Text>
          </View>
          <View>
            <View style={styles.container}>
              <Accordion
                activeSection={this.state.activeSection}
                sections={CONTENT}
                touchableComponent={TouchableOpacity}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                duration={400}
                onChange={this._setSection.bind(this)}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#F9F9F9', padding: 20, paddingVertical: 30}}>
            <Text>Punya kode voucher?</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
              <Checkbox onClick={()=>alert('clicked')}/>
              <Text style={{fontSize: 14, marginLeft: 15}}>Ya, saya ingin menggunakan voucher</Text>
            </View>
          </View>
          <View style={{padding: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize:14}}>Total harga barang</Text>
              <Text style={{fontSize:14}}>Rp{this.props.payment.datas.price}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#F1F1F1'}}>
              <Text style={{fontSize:14}}>Biaya kirim</Text>
              <Text style={{fontSize:14}}>Rp20.000</Text>
            </View>
            <View style={{paddingTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Total belanja</Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Rp{this.props.payment.datas.price + 20000}</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#F1F1F1', padding: 10}}>

          </View>
          <View style={{padding: 20, paddingVertical: 10}}>
            <TouchableOpacity>
              <Text full style={{paddingVertical: 10, fontWeight: 'bold', backgroundColor: '#D71149', color: '#FFF', borderRadius: 3, textAlign: 'center'}}>Bayar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    payment: state.cartReducer
  }
}

export default connect(mapStateToProps)(Payment);
