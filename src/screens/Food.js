import React, { Component } from 'react';
import { Text, View, DatePickerIOS, FlatList, ScrollView} from 'react-native';
import firebase from 'firebase';
import { CardSection, Button } from '../components/common';
import { food } from '../helpers/data';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from 'react-native-modal';
import colors from '../helpers/colors';
import styles from '../components/common/styles';
import ListItem from '../components/FoodItem/ListItem';


class Food extends Component {
  constructor(props) {
    super(props);
    // pass props
    this.firebaseApp = props.screenProps.firebase;
    // realtime database reference
    this.itemsRef = this.firebaseApp.database().ref('/record');
    this.state = {
      amount: '',
      calories: '',
      date: new Date(),
      records: {}
    };
  }

  componentWillMount() {
    //Load the items from firebase
    this.refreshRecordsForDate(this.state.date);
  }

  refreshRecordsForDate(date) {
    console.log("setting records for date");
    this.setState({date});
    // only keep year, month and day
    const dateString = date.toISOString().slice(0,10);
    const dateRef = this.firebaseApp.database().ref('/record/' + dateString);
    dateRef.on('value', snapshot => {
      let records = snapshot.val();
      //save this to state and load properly
      if (!records) {
        records = {};
      }
      this.setState({
        date,
        records,
      });
    });
  }

  //Save current report from state into firebase
  handleSave() {
    console.log('records:', this.state.records);
    const dateString = this.state.date.toISOString().slice(0,10);
    const dateRef = this.firebaseApp.database().ref('/record/' + dateString);
    dateRef.set(this.state.records);
  }

  //calculate total calories
  calculateCalories() {
    const { records } = this.state;
    return Object.keys(records).reduce((acc, key) => {
      const values = records[key];
      return values.amount * values.calories + acc;
    }, 0);

  }

  recordItemUpdated({value, calories, name}) {
    const { records } = this.state;
    const item = {
      calories,
      amount: value,
    };
    records[name] = item;
    this.setState({records});
  }

  render() {
    const { records } = this.state;
    console.log('records', records);

    const total = 0;

    return (
      <ScrollView style={{backgroundColor: colors.background , flex:1}}>
        <CardSection>
          <Text style={styles.textTitle} >Date</Text>
        </CardSection>
        <DatePickerIOS
          mode='date'
          date={this.state.date}
          onDateChange={date => {
            this.refreshRecordsForDate(date);
          }}
        />
        <CardSection>
          <Text style={styles.textTitle} >Items</Text>
        </CardSection>
        <FlatList
          style={{backgroundColor: colors.background}}
          data={food}
          renderItem={({item}) => {
            const recordItem = records[item.name];
            let amount = '0';
            if (recordItem && recordItem.amount) {
              amount = recordItem.amount;
            }
            return (
              <ListItem
                amount={amount}
                calories={item.calories}
                foodName={item.name}
                amountChanged={(value) => this.recordItemUpdated(value)}
                pictureUri={item.picture}
              />
            );
           }
          }
          keyExtractor={(item) => item.calories}
        />
        <Button onPress={() => this.handleSave()}>Save</Button>
        <CardSection>
          <Text style={styles.textTitle} >Sum</Text>
        </CardSection>
        <Text style={styles.chevron}>{'Total Calories : '+ this.calculateCalories() }</Text>
      </ScrollView>
    );
  }
}

export default Food;
