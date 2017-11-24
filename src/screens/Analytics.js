import React, { Component } from 'react';
import ChartView from 'react-native-chart-view';
import { Text, View } from 'react-native';
import firebase from 'firebase';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.firebaseApp = props.screenProps.firebase;
    // realtime database reference
    this.itemsRef = this.firebaseApp.database().ref('/record');
    this.ref = null;
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.ref = firebase.database().ref('/record');
    this.ref.on('value', this.getItems);
  }

  getItems = (snapshot) => {
    let records = snapshot.val();
    console.log('YiwenLi', records);

    //get items, transform into correct format, and save to state
    const data =  Object.keys(records).map(key => {
      const foods = records[key];
      const totalCalories = this.calculateCalories(foods);
      return {
        //convert this into a date
        x: Date.parse(key),
        y: totalCalories
      }
    });

    console.log('data is', data);

    this.setState({ data });
  }

  //calculate calories on daily basis
  calculateCalories(day) {
    return Object.keys(day).reduce((acc, key) => {
      const values = day[key];
      return values.amount * values.calories + acc;
    }, 0);

  }

  render() {

      var Highcharts='Highcharts';

      var conf={
              chart: {
                  type: 'spline',
                  animation: Highcharts.svg,
                  marginleft: 30,
                  marginRight: 20,

              },
              title: {
                  text: 'Calories Consumed',
                  style: {
                    padding:50,
                    fontSize: 60,
                    fontWeight: 'bold',
                  },
                  x:50,
                  y:60
              },
              xAxis: {
                  type: 'datetime',
                  title: {
                      text: 'Date',
                      style: {
                        padding:50,
                        fontSize: 45,
                        fontWeight: 'bold',
                      },
                  },
                  labels: {
                    style: {
                      fontSize: 30,
                      marginTop:20,
                    },
                  },

              },
              yAxis: {
                  tickPixelInterval: 500,
                  title: {
                      text: 'Value',
                      style: {
                        fontSize: 45,
                        fontWeight: 'bold',
                      },
                  },
                  labels: {
                    style: {
                      fontSize: 30,
                    }
                  },
                  plotLines: [{
                      value: 0,
                      width: 2,
                      color: '#2ecc71'
                  }],
              },
              legend: {
                  enabled: false
              },
              exporting: {
                  enabled: false
              },
              series: [{
                  name: 'Data',
                  data: this.state.data
              }]
          };
      return (
        <ChartView
          style={{height:400,flex:1}}
          config={conf}
          >
        </ChartView>

      );
  }
}
export default Analytics;
