import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'

export default class Star extends Component {

  render() {
    var stars = [];

    for( let i = 0 ; i < 5 ; i++ ) {

      if( i < this.props.value ) {

        if( this.props.flashdeal ) {

          stars.push(
            <Icon name="ios-star" key={i} style={{flex: 0.15, fontSize: 12, color: '#f9b700', marginRight: 3}}/>
          )

        } else {

          stars.push(
            <Icon name="ios-star" key={i} style={{fontSize: 12, color: '#f9b700', marginRight: 3}}/>
          )

        }

      } else {

        if( this.props.flashdeal ) {

          stars.push(
            <Icon name="ios-star" key={i} style={{flex: 0.15, fontSize: 12, color: '#DDD', marginRight: 3}}/>
          )

        } else {

          stars.push(
            <Icon name="ios-star" key={i} style={{fontSize: 12, color: '#DDD', marginRight: 3}}/>
          )

        }

      }
    }

    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        { stars }
        <Text style={{fontSize: 10, color: '#888'}}>({this.props.reviewers})</Text>
      </View>
    )
  }
}
