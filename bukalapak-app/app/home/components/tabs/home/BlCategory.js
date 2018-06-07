import React, { Component } from 'react'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Text } from 'native-base'

import styles from '../../../../styles/Styles'
import Star from '../../../../components/Star'

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { getProductsByCategory } from '../../../actions'

import { Row, Column as Col } from 'react-native-flexbox-grid'

class BlCategory extends Component {

  componentDidMount() {

    this.props.dispatch(getHandphoneProducts())
    this.props.dispatch(getElektronicProducts())
    this.props.dispatch(getFashionProducts())
    this.props.dispatch(getKecantikanProducts())
  }

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

  render() {
    return(
      <View style={[styles.container, styles.section]}>
        <View style={[styles.BlFeaturedText, {flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
          <View>
            <Text style={styles.BlTitleHeader}>{ this.props.categoryname }</Text>
          </View>
          <View>
            <Text style={styles.BlTitleMore} onPress={() => Navigator.navigate('ProductList')}>Lihat Semua ></Text>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Row size={12} style={{width: 1500}}>
              {this.state.products.map((product, i)=> (
                <Col sm={1} key={i} style={{paddingRight: 10}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('Product')}>
                    <Image
                      source={{uri: product.images[0]}}
                      style={{flex: 1, height: 150}}
                    />
                    <View>
                      <Text numberOfLines={2} style={{fontSize: 12}}>{product.nameProduct}</Text>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {product.priceBefore ? (<Text style={{fontSize: 12, textDecorationLine: 'line-through', color: '#888888', marginRight: 5}}>Rp{this.nFormatter(product.priceBefore, 1)}</Text>) : (null)}
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
    )
  }

}
