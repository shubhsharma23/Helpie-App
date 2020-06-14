import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Color from '../Constant/Color';

export const SearchBar = () => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.inputbox}
      />
      <Image source={require('../Assets/icons/search.png')} style={styles.search} />
    </View>
  )
}



export const ClickableIcon = (props) => {
  return (
    <TouchableOpacity style={styles.iconcontainer} onPress={props.onPress} >
      <Image source={props.source} style={styles.icons} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export const CustomInput = (props) => {
  return (

    <View>
      <TextInput
        type={props.type}
        name={props.name}
        style={props.style}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor='#777'
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
    </View>

  )

}

export const CustomButton = (props) => {
  return (
    { ...props },

    <TouchableOpacity
      onPress={props.onPress}
      style={props.style1}
      onSubmit={props.onSubmit}
    >
      <Text
        style={props.style2}>
        {props.name}
      </Text>
    </TouchableOpacity>



  )
}

export const UserBox = (props) => {
  return (
    <View style={styles.Box}>
      <View style={styles.userBox}>
      <TouchableNativeFeedback onPress={props.onPress1} >
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.thumbnailCotainer}>
            <Image source={props.source} style={styles.thumbnail} />
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.detail}>{props.gender}</Text>
            <Text style={styles.detail}>age {props.age}</Text>
            <Text style={styles.detail}>{props.service}/{props.exp} exp</Text>
          </View>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={props.onPress2} >
        <View style={styles.bookBox}>
          <Text style={styles.rate}>{props.rate}</Text>
          <Text style={styles.rate}>Book</Text>
        </View>
    </TouchableNativeFeedback>
      </View>

    </View>
    
  )
}



const styles = StyleSheet.create({

  inputcontainer: {
    backgroundColor: Color.third
  },
  inputbox: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 70,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: -20,
    paddingLeft: 50,
    fontSize: 20
  },

  search: {
    width: 35,
    height: 30,
    position: 'absolute',
    left: 30,
    top: -10,
  },
  icons: {
    margin: 20,
    width: 30,
    height: 30,
    alignSelf: 'center',

  },
  title: {
    top: -20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconcontainer: {
    width: 75,
    flexWrap: 'wrap',
  },
  Box: {
    flexDirection: 'row',
    height: '5%',
    margin: 2,
    backgroundColor: Color.third
  },
  userBox: {
    width: '99%',
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    elevation: 8,
    justifyContent: 'space-between'
  },
  thumbnailCotainer: {
    backgroundColor: 'transparent',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'grey',
    margin: 20,

  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'white',

    justifyContent: 'center'
  },
  info: {
    margin: 10,
  },
  name: {
    fontSize: 15,
    color: 'grey',

  },
  detail: {
    fontSize: 15,
    color: 'grey',
  },

  bookBox: {
    alignContent: 'center',
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    elevation: 4

  },
  rate: {
    fontSize: 20,
    fontStyle: 'italic'
  }
});