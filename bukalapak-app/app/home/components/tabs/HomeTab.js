import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from 'native-base'
import { Column as Col, Row } from 'react-native-flexbox-grid'

import styles from '../../../styles/Styles'
import Slider from './home/Slider'
import BlFeatured from './home/BlFeatured'
import InviteFriends from './home/InviteFriends'
import FlashDeal from './home/FlashDeal'
import BlCategory from './home/BlCategory'

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Star from '../../../components/Star'

import {
  getHandphoneProducts, getFashionProducts,
  getElektronicProducts, getKecantikanProducts,
  getAllHandphoneProducts, getAllFashionProducts,
  getAllElektronicProducts, getAllKecantikanProducts,
  saveProductDetail, saveTitleHeader
} from '../../actions'

class HomeTab extends Component {

  nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "rb" },
      { value: 1E6, symbol: "jt" },
    ];

    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

    var i;

    for( i = si.length - 1 ; i > 0; i-- ) {

      if (num >= si[i].value) {
        break;
      }

    }

    return( num / si[i].value ).toFixed( digits ).replace( rx , "$1" ) + si[i].symbol;
  }

  componentDidMount() {
    this.props.dispatch(getHandphoneProducts(8))
    this.props.dispatch(getElektronicProducts(510))
    this.props.dispatch(getFashionProducts(13))
    this.props.dispatch(getKecantikanProducts(2266))
  }

  handleNavigate( datas ) {
    if( datas == 'handphones' ) {
      this.props.dispatch(getAllHandphoneProducts(8))
      this.props.dispatch(saveTitleHeader('THR Cair? Saatnya Ganti HPmu'))
    } else if( datas == 'electronics' ) {
      this.props.dispatch(getAllElektronicProducts(510))
      this.props.dispatch(saveTitleHeader('Elektronik Baru Saat Lebaran'))
    } else if( datas == 'fashions' ) {
      this.props.dispatch(getAllFashionProducts(13))
      this.props.dispatch(saveTitleHeader('Antusias Lebaran Dengan Fashion Terbaru'))
    } else if( datas == 'kecantikans' ) {
      this.props.dispatch(getAllKecantikanProducts(2266))
      this.props.dispatch(saveTitleHeader('Paket Kecantikan Andalan Saat Lebaran'))
    }

    this.props.navigation.navigate( 'ProductList' )
  }

  handleNavigateSingle( product, productName ) {
    this.props.dispatch(saveProductDetail(product))

    this.props.dispatch(saveTitleHeader(productName))
    this.props.navigation.navigate( 'ProductDetail' )
  }

  render() {
    return(
      <ScrollView>
        <Slider/>
        <BlFeatured/>
        <InviteFriends/>
        <FlashDeal navigation={this.props.navigation}/>

        <View style={[styles.container, styles.section]}>
          <View style={[styles.BlFeaturedText, {flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
            <View>
              <Text style={styles.BlTitleHeader}>THR Cair? Saatnya Ganti HPmu</Text>
            </View>
            <View>
              <Text style={styles.BlTitleMore} onPress={() => this.handleNavigate('handphones')}>Lihat Semua ></Text>
            </View>
          </View>
          <View style={styles.container}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Row size={12} style={{width: 1500}}>
                {this.props.products.handphones.map((product, i)=> (
                  <Col sm={1} key={i} style={{paddingRight: 10}}>
                    <TouchableOpacity onPress={()=> this.handleNavigateSingle(product, product.name)}>
                      <Image
                        source={{uri: product.images[0]}}
                        style={{flex: 1, height: 150}}
                      />
                      <View>
                        <Text numberOfLines={2} style={{fontSize: 12}}>{product.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          {product.deal_info.original_price ? (<Text style={{fontSize: 12, textDecorationLine: 'line-through', color: '#888888', marginRight: 5}}>Rp{this.nFormatter(product.deal_info.original_price, 1)}</Text>) : (null)}
                          <Text style={{fontSize: 14, color: '#D71149'}}>Rp{this.nFormatter(product.price, 2)}</Text>
                        </View>
                        <Star value={product.rating.average_rate} reviewers={product.rating.user_count}/>
                      </View>
                    </TouchableOpacity>
                  </Col>
                ))}
              </Row>
            </ScrollView>
          </View>
        </View>

        <View style={[styles.container, styles.section]}>
          <View style={[styles.BlFeaturedText, {flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
            <View>
              <Text style={styles.BlTitleHeader}>Elektronik Baru Saat Lebaran</Text>
            </View>
            <View>
              <Text style={styles.BlTitleMore} onPress={() => this.handleNavigate('electronics')}>Lihat Semua ></Text>
            </View>
          </View>
          <View style={styles.container}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Row size={12} style={{width: 1500}}>
                {this.props.products.electronics.map((product, i)=> (
                  <Col sm={1} key={i} style={{paddingRight: 10}}>
                    <TouchableOpacity onPress={()=> this.handleNavigateSingle(product, product.name)}>
                      <Image
                        source={{uri: product.images[0]}}
                        style={{flex: 1, height: 150}}
                      />
                      <View>
                        <Text numberOfLines={2} style={{fontSize: 12}}>{product.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          {product.deal_info.original_price ? (<Text style={{fontSize: 12, textDecorationLine: 'line-through', color: '#888888', marginRight: 5}}>Rp{this.nFormatter(product.deal_info.original_price, 1)}</Text>) : (null)}
                          <Text style={{fontSize: 14, color: '#D71149'}}>Rp{this.nFormatter(product.price, 2)}</Text>
                        </View>
                        <Star value={product.rating.average_rate} reviewers={product.rating.user_count}/>
                      </View>
                    </TouchableOpacity>
                  </Col>
                ))}
              </Row>
            </ScrollView>
          </View>
        </View>

        <View style={[styles.container, styles.section]}>
          <View style={[styles.BlFeaturedText, {flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
            <View>
              <Text style={styles.BlTitleHeader}>Antusias Lebaran Dengan Fashion Terbaru</Text>
            </View>
            <View>
              <Text style={styles.BlTitleMore} onPress={() => this.handleNavigate('fashions')}>Lihat Semua ></Text>
            </View>
          </View>
          <View style={styles.container}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Row size={12} style={{width: 1500}}>
                {this.props.products.fashions.map((product, i)=> (
                  <Col sm={1} key={i} style={{paddingRight: 10}}>
                    <TouchableOpacity onPress={()=> this.handleNavigateSingle(product, product.name)}>
                      <Image
                        source={{uri: product.images[0]}}
                        style={{flex: 1, height: 150}}
                      />
                      <View>
                        <Text numberOfLines={2} style={{fontSize: 12}}>{product.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          {product.deal_info.original_price ? (<Text style={{fontSize: 12, textDecorationLine: 'line-through', color: '#888888', marginRight: 5}}>Rp{this.nFormatter(product.deal_info.original_price, 1)}</Text>) : (null)}
                          <Text style={{fontSize: 14, color: '#D71149'}}>Rp{this.nFormatter(product.price, 2)}</Text>
                        </View>
                        <Star value={product.rating.average_rate} reviewers={product.rating.user_count}/>
                      </View>
                    </TouchableOpacity>
                  </Col>
                ))}
              </Row>
            </ScrollView>
          </View>
        </View>

        <View style={[styles.container, styles.section]}>
          <View style={[styles.BlFeaturedText, {flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
            <View>
              <Text style={styles.BlTitleHeader}>Paket Kecantikan Andalan Saat Lebaran</Text>
            </View>
            <View>
              <Text style={styles.BlTitleMore} onPress={() => this.handleNavigate('kecantikans')}>Lihat Semua ></Text>
            </View>
          </View>
          <View style={styles.container}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Row size={12} style={{width: 1500}}>
                {this.props.products.kecantikans.map((product, i)=> (
                  <Col sm={1} key={i} style={{paddingRight: 10}}>
                    <TouchableOpacity onPress={()=> this.handleNavigateSingle(product, product.name)}>
                      <Image
                        source={{uri: product.images[0]}}
                        style={{flex: 1, height: 150}}
                      />
                      <View>
                        <Text numberOfLines={2} style={{fontSize: 12}}>{product.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          {product.deal_info.original_price ? (<Text style={{fontSize: 12, textDecorationLine: 'line-through', color: '#888888', marginRight: 5}}>Rp{this.nFormatter(product.deal_info.original_price, 1)}</Text>) : (null)}
                          <Text style={{fontSize: 14, color: '#D71149'}}>Rp{this.nFormatter(product.price, 2)}</Text>
                        </View>
                        <Star value={product.rating.average_rate} reviewers={product.rating.user_count}/>
                      </View>
                    </TouchableOpacity>
                  </Col>
                ))}
              </Row>
            </ScrollView>
          </View>
        </View>

        <View style={{paddingBottom: 50}}></View>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  }
}

export default connect(mapStateToProps)(HomeTab);
