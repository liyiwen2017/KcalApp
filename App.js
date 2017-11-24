import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginStack, Tabs } from './src/helpers/router';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.firebase = firebase.initializeApp({
      apiKey: 'AIzaSyCIyEJ8AFXHG-voYAF7mD71w8TfrpCWhJ0',
      authDomain: 'authentication-49f19.firebaseapp.com' ,
      databaseURL: 'https://authentication-49f19.firebaseio.com',
      projectId: 'authentication-49f19',
      storageBucket: 'authentication-49f19.appspot.com',
      messagingSenderId: '52073365905',
    });

    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //tell super that login changed
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  render() {
     const { loggedIn } = this.state;
      //check the loggedIn status, and navigate to appropiate page
      if (!loggedIn) {
        return <LoginStack screenProps={{firebase}}/>
      } else {
        return <Tabs screenProps={{firebase}}/>
      }
  }
}

export default App;
