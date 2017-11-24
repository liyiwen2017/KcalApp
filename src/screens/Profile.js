import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ListView, TextInput, Picker, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem, Icon, FormLabel, FormInput } from 'react-native-elements';
import { Button } from '../components/common';
import { Header, Actions } from '../components/UserItem';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from 'react-native-modal';
import firebase from 'firebase';
import { me } from '../helpers/data';
import data from '../helpers/intro.json';


export default class Profile extends Component {
//initial state
state = {
  isDateTimePickerVisible: false,
  isGenderPickerVisible: false,
  birthDate: data.DOB,
  visibleModal: null,
  fullname: data.Fname + " " + data.Lname,
  gender: data.gender,
  email: data.email
};


  // set state show the date picker or not
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });


  // handle date that user has picked
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({
      birthDate: moment(date).format('YYYY-MM-DD')
    });
    this._hideDateTimePicker();
  };

  // handle name that user has enthered
  handleName= (text) => {
    this.setState({ fullname: text })
  }

  // handle gender that user has picked
  handleGender= (text) => {
    this.setState({ gender: text })
  }

  // handle email that user has entered
  handleEmail= (text) => {
    this.setState({ email: text })
  }


  //set button props
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={{color: '#ffff'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );


    // set name props
  _renderModalName = () => (
    <View style={styles.modalContent}>
      <Text style = {{color: '#e74c3c', textAlign: 'center'}} >Name</Text>
        <TextInput style = {styles.input}
          placeholder = {this.state.fullname}
          placeholderTextColor = 'gray'
          autoCapitalize = "none"
          onChangeText = {this.handleName}/>
        {this._renderButton('Submit', () => this.setState({ visibleModal: null }))}
    </View>
  );

  // set gender props
  _renderModalGender = () => (
    <View style={styles.modalContent}>
      <Text style = {{color: '#e74c3c', textAlign: 'center'}} >Gender</Text>
        <Picker selectedValue = {this.state.gender} onValueChange = {this.handleGender}>
          <Picker.Item label = "Male" value = "Male" />
          <Picker.Item label = "Female" value = "Female" />
          <Picker.Item label = "Other" value = "Other" />
        </Picker>
        {this._renderButton('Submit', () => this.setState({ visibleModal: null }))}
    </View>
  );

  // set email props
  _renderModalMail = () => (
    <View style={styles.modalContent}>
      <Text style = {{color: '#e74c3c', textAlign: 'center'}}>E-mail</Text>
        <TextInput style = {styles.input}
          placeholder = {this.state.email}
          placeholderTextColor = 'gray'
          autoCapitalize = "none"
          alignItems= 'center'
          onChangeText = {this.handleEmail}/>
        {this._renderButton('Submit', () => this.setState({ visibleModal: null }))}
    </View>
  );

render(){
  const { navigate } = this.props.navigation;
  // list item
  const list = [
    {
      title: 'Name',
      icon: 'account-circle',
      subtitle: this.state.fullname,
      nav: () => this.setState({ visibleModal: 1 }),
    },
    {
      title: 'Date of Birth',
      icon: 'date-range',
      subtitle: this.state.birthDate,
      nav: this._showDateTimePicker,
    },
    {
      title: 'Gender',
      icon: 'people',
      subtitle: this.state.gender,
      nav: () => this.setState({ visibleModal: 2}),
    },
    {
      title: 'E-mail',
      icon: 'email',
      subtitle: this.state.email,
      nav: () => this.setState({ visibleModal: 3 }),
    },
  ]

  return (

    <View style={{ flex: 1, backgroundColor:'white' }}>
      <ScrollView>
        <Header {...me} />

        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                subtitle={item.subtitle}
                leftIcon={{name: item.icon}}
                onPress = {item.nav}
              />
            ))
          }
        </List>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <Modal isVisible={this.state.visibleModal === 1} style={styles.bottomModal}>
          {this._renderModalName()}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 2} style={styles.bottomModal}>
          {this._renderModalGender()}
        </Modal>
        <Modal isVisible={this.state.visibleModal === 3} style={styles.bottomModal}>
          {this._renderModalMail()}
        </Modal>
        //User can log out
        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    padding: 20,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonText:{
    color: '#ffff'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input: {
    margin: 15,
    height: 40,
    width: 200,
    borderColor: '#e74c3c',
    borderWidth: 1,
    alignSelf: 'center'
 },
 icon: {
    height: 20,
    width: 20,
 },
 name:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
 },
});
