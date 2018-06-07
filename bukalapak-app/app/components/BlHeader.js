import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Item, Input, Button, Text, Icon, Left, Body, Title, Right } from 'native-base'

import styles from '../styles/Styles'

import { connect } from 'react-redux'

class BlHeader extends Component {

  state = {
    title: '',
  }

  componentDidMount() {
    this.props.isManual ? this.setState({title: this.props.isTitle}) : this.setState({title: this.props.title})
  }

  render() {
    return(
      <View>
        {this.props.title ? (
          <View>
          {this.props.isHome ? (
            <Header searchBar rounded style={styles.Header}>
              <Item>
                <Icon name="ios-search"/>
                <Input placeholder="BukaLapak"/>
                <Icon name="ios-people"/>
              </Item>
            </Header>
          ):(
            <Header style={styles.Header}>
              <Left style={{marginLeft: 20}}>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon
                    name="ios-arrow-back"
                    style={{color: '#FFF'}}
                  />
                </Button>
              </Left>
              <Body>
                <Title>{this.state.title}</Title>
              </Body>
            </Header>
          )}
          </View>
        ):(
          <Header searchBar rounded style={styles.Header}>
            <Item>
              <Icon name="ios-search"/>
              <Input placeholder="BukaLapak"/>
              <Icon name="ios-people"/>
            </Item>
          </Header>
        )}
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    title: state.productsReducer.title
  }
}

export default connect(mapStateToProps)(BlHeader);
