import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { View } from 'native-base';

const Cards = (props) => {
  return (
    <ScrollView>
      <View style={styles.card} >
        <Image source={props.source} style={styles.img} />
      </View>
      <View style={styles.review}>

        <View style={styles.rating}>
          <Image source={require('../Assets/icons/fb.png')} style={styles.icon} />
          <Text style={styles.rate} >{props.review}</Text>
        </View>

        <View style={styles.rating}>
          <Image source={require('../Assets/icons/star.png')} style={styles.icon} />
          <Text style={styles.rate} >{props.star}</Text>
        </View>

      </View>
      <Text style={styles.txt} >{props.description}</Text>
    </ScrollView>
  );
}

export default Cards;

const styles = StyleSheet.create({

  card: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    height: 400,
    width: '90%',
    alignSelf:'center',
    margin:10
  },
  
  img: {
    alignSelf:'center',
    height: 400,
    width: '90%',
    resizeMode: "stretch",

  },

  txt: {
    alignSelf: 'center',
    margin: 10,
    fontSize: 20,
    color:'grey'
  },

  review: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    margin: 10,
    height: 25,
    width: 25,
  },

  rating: {
    flexDirection: 'row'
  },

  rate: {
    margin: 10,
    fontSize: 20,
    left:-10
  }


});