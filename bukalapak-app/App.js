import React, { Component } from 'react';
import { BackHandler, View } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import Expo from 'expo';

import RootNavigator from './app/navigators/RootNavigator';
import store from './app/redux/store';

const addListener = createReduxBoundAddListener("root");

class App extends Component {

  state = {
    isLoadFont: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    })

    this.setState({isLoadFont : true})
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;

    if( nav.index === 0 ) {
      return false
    }

    dispatch(NavigationActions.back());

    return true
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.isLoadFont ? (
          <RootNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener,
          })} />
        ):(null)}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
