import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as axios from 'axios';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  onLogin = () => {

let http = axios.create();

instance.defaults.baseURL = 'https://apps.mentoor.io/shera2/api/admin/';
const UserService = {
    getCallToAction() {
        return axios.get('https://apps.mentoor.io/shera2/api/admin/')
            .then(response => response.data)
             console.log(response.data)

            .catch(errorHandling);
    },
}
   
  }
  render() {
    return (

      <Content>
        <Form>
          <Item floatingLabel style={styles.item}>
            <Label style={styles.color}>Username</Label>
            <Input
              style={styles.input}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
            />
          </Item>

          <Item floatingLabel >
            <Label style={styles.color}>Password</Label>
            <Input
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
      </Content>

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

  },
});