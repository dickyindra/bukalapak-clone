import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Card, CardItem , Body, Icon } from 'native-base'
import { LinearGradient } from 'expo'

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allProducts, saveProductDetail, saveTitleHeader } from '../../../actions'

import { Row, Column as Col } from 'react-native-flexbox-grid'

import styles from '../../../../styles/Styles'
import Star from '../../../../components/Star'

class FlashDeal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      timer: ''
    }
  }

  handleNavigateSingle( product, productName ) {
    this.props.dispatch(saveProductDetail(product))

    this.props.dispatch(saveTitleHeader(productName))
    this.props.navigation.navigate( 'ProductDetail' )
  }

  componentDidMount() {
    this.props.dispatch(allProducts())

    this.timer = setInterval(
      () => this._countdown(),
      1000
    )
  }

  _countdown() {
    var countDownDate = new Date("12 September 2018").getTime();

    var now = new Date().getTime()
    var distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    var timer = hours + ' : ' + minutes + ' : ' + seconds

    this.setState({
      timer: timer
    })
  }

  render() {
    return(
      <View>
        <LinearGradient
          colors={['#e93b6b', '#ff7f7f']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={[styles.flashDealWrapper]}
        >
          <ScrollView style={{paddingLeft: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingRight: 20}}>
              <View style={{width: Dimensions.get('window').width / 7, height: 281, marginRight: 40, flexDirection: 'column', justifyContent: 'space-between'}}>
                <View>
                  <View style={{backgroundColor: '#FFFFFF', width: 45, height: 45, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 54}}>
                    <Image
                      source={{uri: 'https://image.ibb.co/byAQsd/flashdeal.png'}}
                      style={{width: 30, height: 30}}
                    />
                  </View>
                  <Text style={{fontSize: 28, color: '#FFFFFF'}}><Text style={{fontWeight: 'bold'}}>Flash</Text> Deal</Text>
                </View>
                <View>
                  <Text style={{color: '#FFF', fontSize: 14}}>Dimulai dalam</Text>
                  <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 16}}>{this.state.timer}</Text>
                </View>
                <View>
                  <Text style={{fontSize: 12, color: '#FFF'}}>Lihat Semua ></Text>
                </View>
              </View>
              <View style={{width: 1000, flexDirection: 'row', marginRight: 20}}>
                {this.props.products.results.map((product, i)=> (
                  <TouchableOpacity onPress={() => this.handleNavigateSingle(product, product.name)} key={i}>
                  <Card style={{width: 150, marginRight: 10}}>
                    <CardItem cardBody style={{position: 'relative'}}>
                      <Image source={{uri: product.images[0]}}
                        style={{flex: 1, height: 150}}
                      />
                      <Text style={{padding: 7, backgroundColor: '#D71149', color: '#FFF', fontSize: 8, borderRadius: 54, position: 'absolute', top: 10, right: 10}}>
                        1%
                      </Text>
                    </CardItem>
                    <CardItem style={{flex: 1,flexDirection: 'column', alignItems: 'flex-start'}}>
                      <Text numberOfLines={1} style={{fontSize: 10}}>{product.name}</Text>
                      <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 5, marginBottom: 5}}>Coming Soon</Text>
                      <Star flashdeal={true} value={product.rating.average_rate} reviewers={product.rating.user_count}/>
                      <Text style={{fontSize: 10, color: '#A1A1A1', marginTop: 3}}>
                        <Icon name="map" style={{fontSize: 12, color: '#DDD'}}/>
                        <Text style={{marginLeft: 5}}>{product.city}</Text>
                      </Text>
                      <Row size={12} style={{marginTop: 15}}>
                        <Col sm={12}>
                          <Text style={{fontSize: 10, marginBottom: 3}}>{product.stock} Tersisa</Text>
                        </Col>
                        <Col sm={12}>
                          <Text full style={{height: 4, backgroundColor: '#8BC34A', borderRadius: 10}}></Text>
                        </Col>
                      </Row>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  }
}

export default connect(mapStateToProps)(FlashDeal);
