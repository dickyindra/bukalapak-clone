import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Swiper from 'react-native-swiper'

import styles from '../../../../styles/Styles'

import { connect } from 'react-redux'
import { getBanners } from '../../../actions'

class Slider extends Component {

  componentDidMount() {
    this.props.dispatch(getBanners())
  }

  render() {
    return(
      <View style={{height: 240}}>
        <Swiper
          autoplay
          autoplayTimeout={2}
          dotStyle={styles.swiperDot}
          activeDotStyle={styles.swiperActiveDot}
          style={{height: 240}}
          paginationStyle={styles.swiperPagination}
        >
          {this.props.products.banners.map((banner, i)=> {
            return(
              <View
                style={{flex: .9, justifyContent: 'flex-start'}}
                key={i}
              >
                <Image
                  source={{uri: banner.image}}
                  style={{flex: 1}}
                />
              </View>
            )
          })}
        </Swiper>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  }
}

export default connect(mapStateToProps)(Slider);
