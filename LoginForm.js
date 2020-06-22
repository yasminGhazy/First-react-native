import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { Obj } from 'reinforcements';
import { AsyncStorage } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      username: '',
      password: '',
      token: ''
    };
  }
  onLogin = async () => {
    try {
      let username = this.state.username;
      let password = this.state.password;
      let { data } = await axios.post(
        'https://ecis-webapi.azurewebsites.net/api/Users/Login',
        {
          "email": username,
          "password": password,
        },
      )
      console.log(data);
      let token = data["data"].token;
      this.setState({ token });

      AsyncStorage.setItem(
        'user',
        JSON.stringify(this.state)
      );

      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          // We have data!!
          console.log(JSON.parse(value));
        }
      } catch (error) {
        console.log("error2");
      }
    }
    catch (error) {
      console.log("error");
    }

    this.navigation.navigate('Details');
  }
  render() {
    return (
     
        <Form>
          {/* <AntDesign name="user" size={24} color="white" alignSelf="center" /> */}

          <Item floatingLabel style={styles.item}>

            <Label style={styles.color}>
              Username</Label>
            <Input
              style={styles.input}

              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
            />
          </Item>

          <Item floatingLabel >
            <Label style={styles.color}>Password</Label>
            <Input
              secureTextEntry={true}
              style={styles.input}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <TouchableOpacity >
            <Button transparent light bordered
              style={styles.loginBtn}
              onPress={this.onLogin}

            >

              <Text style={styles.color}>Login</Text>
            </Button>
          </TouchableOpacity>
        </Form>
     

    );
  }
}
const styles = StyleSheet.create({
  color: {
    color: "white"
  },
  item: {
    alignSelf: 'center',

  },
  loginBtn: {
    alignSelf: 'center',
    margin: 35,
  },
  input: {
    color: "#fff",
    alignItems: 'center',

  },
});