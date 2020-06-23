import React, { Component } from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as axios from 'axios';
import { AsyncStorage } from 'react-native';
import User from '../user'
import cache from '../core/cache';
import http from '../core/endpoint';

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
      let { data } = await http.post('/login', {
        "email": this.state.username,
        "password": this.state.password,
      })
      console.log("current", data);
      let token = data["data"].token;
      this.setState({ token });
      User.login(this.state);
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