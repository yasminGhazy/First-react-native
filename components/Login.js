import * as React from 'react';
import LoginForm from './LoginForm';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, ImageBackground, StyleSheet } from 'react-native'
import { Container, Text, View, Content } from 'native-base';

export default function Login({ navigation }) {
    return (
        <ImageBackground
            source={require('./img/4.jpg')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <LinearGradient
                colors={['rgba(255,255,255,0)', '#000000']}
                style={styles.linearGradient}
            />
            
                <LoginForm navigation={navigation} />
           
        </ImageBackground>

    );
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