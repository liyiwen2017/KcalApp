import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Button, Card, CardSection, Input, Spinner } from '../components/common';
import styles from '../components/common/styles';
import { MeStack } from '../helpers/router';


class RegisterForm extends Component {

  state = {email: '' , password: '' };

  onButtonPress(){
    const { email, password }  = this.state;

    this.setState({error: '' , loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onRegisterSuccess.bind(this))

  }

  onRegisterSuccess() {
    this.setState({
      email: '',
      password: '',
    });
  }

  renderButton() {

    return(
      <Button onPress={this.onButtonPress.bind(this)} >
        Submit
      </Button>

    )
  }


  render(){

    return(
      <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
         style = {styles.logo}
         source={require('../images/icon.png')}
       />
       </View>
       <View style={styles.cardContainer}>
       <Card>
        <CardSection>
          <Input
            placeholder = "user@gmail.com"
            label = "Email"
            value = {this.state.email}
            onChangeText = {email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder = 'password'
            label = "Password"
            value = {this.state.password}
            onChangeText = {password => this.setState({ password})}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
     </Card>
     </View>
     </View>
   )
  }

}

export default RegisterForm;
