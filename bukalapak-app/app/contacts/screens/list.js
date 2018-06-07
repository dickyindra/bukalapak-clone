import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Item, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allContacts } from '../actions'

class ContactsList extends Component {

  componentDidMount() {
    this.props.dispatch(allContacts())
  }

  handleCreate(){
    this.props.navigation.navigate('ContactsCreate')
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {this.props.contacts.results.map((item, index) => (
              <ListItem key={index} >
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.address}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>

        <Fab onPress={()=> this.handleCreate()} >
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer
  }
}

export default connect(mapStateToProps)(ContactsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
