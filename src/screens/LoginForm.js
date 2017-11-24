import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Button, Card, CardSection, Input, Spinner } from '../components/common';
import styles from '../components/common/styles';
import { AuthStack, MeStack, Tabs} from '../helpers/router';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.firebaseApp = props.screenProps.firebase;
    this.state = {email: '' , password: '' , error: '' , loading: false};
  }
  static navigationOptions = {
     header: null
   }

  onButtonPress(){
    const { email, password }  = this.state;

    this.setState({error: '' , loading: true });
    //different situations when login
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  // a error message will pop up when login failed
  onLoginFail(){
    this.setState({error: 'Authentication Failed', loading: false });
  }

  // login successfully
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size = "small" />;
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)} >
        Log in
      </Button>
    )
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
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
          
          <Text style ={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
            <Button onPress={() => navigate('Register')} >
              Register
            </Button>
          </CardSection>
       </Card>
       </View>
      </View>
     )
  }
}

export default LoginForm;
