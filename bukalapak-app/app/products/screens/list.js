import React, { Component } from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Text, Icon, List, ListItem, Left, Body, Card, CardItem, Button, Container } from 'native-base'
import Swiper from 'react-native-swiper'
import { Row, Column as Col } from 'react-native-flexbox-grid'

import BlHeader from '../../components/BlHeader'
import Star from '../../components/Star'

import { connect } from 'react-redux'

import {
  saveProductDetail, saveTitleHeader
} from '../actions'

class ProductList extends Component {

  handleNavigateSingle( product, productName ) {
    this.props.dispatch(saveProductDetail(product))

    this.props.dispatch(saveTitleHeader(productName))
    this.props.navigation.navigate( 'ProductDetail' )
  }

  render() {
    return(
      <Container>
        <BlHeader title={this.props.title} navigation={this.props.navigation}/>

        <ScrollView style={{backgroundColor: '#FFF'}}>
          <Row size={12}>
            {this.props.products.datas.map((product,i) => (
              <Col sm={4} key={i}>
                <TouchableOpacity onPress={() => this.handleNavigateSingle(product, product.name)}>
                  <View style={{borderWidth: 1, borderColor: '#F1F1F1'}}>
                    <Image
                      source={{uri: product.images[0]}}
                      style={{height: 180}}/>
                    <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
                      <Text numberOfLines={2} style={{marginBottom: 20, fontSize: 14}}>{product.name}</Text>
                      <Text style={{marginBottom: 20, fontSize: 14}}>Rp{product.price}</Text>

                      <Star value={product.rating.average_rate} reviewers={product.rating.user_count}/>
                      <View style={{marginBottom: 5, marginTop: 5}}>
                        <Text style={{fontSize: 12, color: '#888'}}>Blue Komputer</Text>
                        <Text style={{fontSize: 12, color: '#888'}}>95% (5599 feedback)</Text>
                      </View>
                      <TouchableOpacity>
                        <Text full style={{paddingVertical: 7, fontWeight: 'bold', backgroundColor: '#D71149', fontSize: 14, color: '#FFF', borderRadius: 3, textAlign: 'center'}} onPress={() => Navigator.navigate('Cart')}>Beli</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Col>
            ))}
          </Row>
        </ScrollView>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  }
}

export default connect(mapStateToProps)(ProductList);
