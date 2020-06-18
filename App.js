import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, View, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AnatomyExample from './nativebase';
import { ImageBackground, StyleSheet } from 'react-native'
import LoginForm from './LoginForm';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>

        <ImageBackground
          source={require('./img/4.jpg')}
          style={{ flex: 1 }}

        >
          <LinearGradient
            colors={['rgba(255,255,255,0)', '#000000']}
            style={styles.linearGradient}
          />
          <Content style={styles.MainContainer}>
            <LoginForm />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    marginTop: 200,
  },
  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
});